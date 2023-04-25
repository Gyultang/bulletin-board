const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    postNum: Number,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId, //고유의 ID
      ref: "User",
    },
    repleNum: {
      type: Number,
      default: 0,
    },
  },
  { collection: "posts", timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

module.exports = { Post };
