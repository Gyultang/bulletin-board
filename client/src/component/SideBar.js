import React from "react";
import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const user = useSelector((state) => state.user);
    console.log("유저정보?", user);

    const sideStyle = {
        color: "white",
        textDecoration: "none",
        marginRight: "10px",
    };

    return (
        <div style={{ width: "400px", height: "100%", backgroundColor: "lightgray", padding: "10px" }}>
            {/* 사이드바 컨텐츠 */}
            <Nav variant="underline" defaultActiveKey="/" className="flex-column">
                <Link to="/" style={sideStyle}>
                    home
                </Link>
                <Link to="/" style={sideStyle}>
                    list
                </Link>
                <Link to="/upload" style={sideStyle}>
                    upload
                </Link>
                <Link to="/photo" style={sideStyle}>
                    photo
                </Link>
                <Link to="/calendar" style={sideStyle}>
                    calendar
                </Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
