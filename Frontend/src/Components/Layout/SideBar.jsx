import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import AuthContext from "../AuthContext";
import ClickAwayListener from "react-click-away-listener";

const SideBar = () => {
    const auth = useContext(AuthContext);
    let navigate = useNavigate();
    const handleClickAway = () => {
        if (auth.status === true) {
            auth.login();
        }
    };

    return (
        <div id="app">
            {auth.status ? (
                <button
                    className="flex text-2xl text-white items-center cursor-pointer fixed left-[12rem] top-[1rem] z-50"
                    onClick={auth.login}
                >
                    x
                </button>
            ) : (
                <svg
                    onClick={auth.login}
                    className="fixed z-30 flex items-center cursor-pointer left-10 top-4 shadow-xl"
                    fill="#000000"
                    viewBox="0 0 100 80"
                    width="30"
                    height="30"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}

            <ClickAwayListener onClickAway={handleClickAway}>
                <div
                    className={`top-0 left-[-16rem] w-60 bg-gradient-to-r from-[#000054] to-blue-900 p-10 text-white fixed h-full z-40 ease-in-out duration-300 ${
                        auth.status ? "translate-x-full" : "translate-x-0"
                    }`}
                >
                    <div className="justify-self-center self-center cursor-pointer">
                        <img
                            className="h-[3.5rem] w-[4rem]"
                            src="earth.png"
                            alt="error"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <Container className="mt-8">
                        <Nav className="me-auto">
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-apps" />
                                <Nav.Link
                                    as={Link}
                                    to="/dashboard"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Dashboard
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-users" />
                                <Nav.Link
                                    as={Link}
                                    to="/customers"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Customers
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-shopping-cart" />
                                <Nav.Link
                                    as={Link}
                                    to="/orders"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Orders
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-users-alt" />
                                <Nav.Link
                                    as={Link}
                                    to="/teams"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Team
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-envelope" />
                                <Nav.Link
                                    as={Link}
                                    to="/massages"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Messages
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-rr-list-check" />
                                <Nav.Link
                                    as={Link}
                                    to="/tasks"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Tasks
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-apps" />
                                <Nav.Link
                                    as={Link}
                                    to="/applications"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Applications
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-sparkles" />
                                <Nav.Link
                                    as={Link}
                                    to="/campaigns"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Campaign
                                </Nav.Link>
                            </div>
                            <div className="flex cursor-pointer mt-4">
                                <i className="fi fi-ss-settings" />
                                <Nav.Link
                                    as={Link}
                                    to="/settings"
                                    style={{
                                        color: "white",
                                        marginTop: "-11px",
                                    }}
                                >
                                    Settings
                                </Nav.Link>
                            </div>
                        </Nav>
                    </Container>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default SideBar;
