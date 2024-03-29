// express js 라우팅

var express = require("express");
var router = express.Router();
const { Post } = require("../Model/Post");
const { Counter } = require("../Model/Counter.js");
const multer = require("multer");
const { User } = require("../Model/User");
router.post("/submit", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    };
    Counter.findOne({ name: "counter" })
        .exec()
        .then((counter) => {
            temp.postNum = counter.postNum;
            User.findOne({ uid: req.body.uid })
                .exec()
                .then((userInfo) => {
                    temp.author = userInfo._id;
                    console.log("userInfo._id", userInfo._id);
                    const CommunityPost = new Post(temp);
                    CommunityPost.save().then(() => {
                        Counter.updateOne({ name: "counter" }, { $inc: { postNum: 1 } }).then(() => {
                            res.status(200).json({ success: true });
                        });
                    });
                });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});

router.post("/list", (req, res) => {
    let sort = {};

    if (req.body.sort === "최신순") {
        sort.createdAt = -1;
    } else {
        // 댓글순
        sort.repleNum = -1;
    }

    Post.find({
        $or: [{ title: { $regex: req.body.search } }, { content: { $regex: req.body.search } }],
    })
        .populate("author")
        .sort(sort)
        .skip(req.body.skip) // 0, 5
        // 페이지네이션구현을 위한 limit해제
        // .limit(5) // 한번에 찾을 doc 숫자
        .exec()
        .then((doc) => {
            res.status(200).json({ success: true, postList: doc });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});

router.post("/detail", (req, res) => {
    Post.findOne({ postNum: Number(req.body.postNum) })
        .populate("author")
        .exec()
        .then((doc) => {
            console.log(doc);
            res.status(200).json({ success: true, post: doc });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});
// 글수정 규칙
router.post("/edit", (req, res) => {
    let temp = {
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    };
    Post.updateOne({ postNum: Number(req.body.postNum) }, { $set: temp })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});
router.post("/delete", (req, res) => {
    Post.deleteOne({ postNum: Number(req.body.postNum) })
        .exec()
        .then(() => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            res.status(400).json({ success: false });
        });
});

// diskStorage: multer로부터 전달받은 파일을 우리 디스크에 저장
// destination: 어떤 경로로 저장할지
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "image/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage }).single("file");

router.post("/image/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ success: false });
        } else {
            res.status(200).json({ success: true, filePath: res.req.file.path });
        }
    });
});

module.exports = router;
