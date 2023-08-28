import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const ClickMenu = () => {};

    return (
        <div style={{ width: "400px", height: "100%", backgroundColor: "lightgray", padding: "10px" }}>
            {/* 사이드바 컨텐츠 */}
            <Nav variant="underline" defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Active</Nav.Link>
                <Nav.Link href="/">list</Nav.Link>
                <Nav.Link href="/upload">upload</Nav.Link>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
