import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import firebase from "../firebase";

const Heading = () => {
    const user = useSelector((state) => state.user);
    console.log("유저테스트", user.displayName);
    const navigate = useNavigate();
    const headStyle = {
        color: "white",
        textDecoration: "none",
        marginRight: "10px",
    };
    const LogoutHandler = () => {
        firebase.auth().signOut();
        navigate("/");
    };
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Community</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" style={headStyle}>
                            list
                        </Link>

                        <Link to="/upload" style={headStyle}>
                            upload
                        </Link>

                        {/* <Link to="/" style={headStyle}>
              list
            </Link> */}
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    {/* {user.displayName !== "" ? <Navbar.Text>{user.displayName}님</Navbar.Text> : null} */}
                    {user.accessToken === "" ? (
                        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
                            login
                        </Link>
                    ) : (
                        <Navbar.Text
                            style={{
                                color: "white",
                                textDecoration: "none",
                                cursor: "pointer",
                            }}
                            onClick={(e) => LogoutHandler(e)}
                        >
                            Logout
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Heading;
