import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginOut, sreachValue } from "../../Actions/index";
import RemoveCookies from "../Cookies/RemoveCookies";
import ClickAwayListener from "react-click-away-listener";

const Header = ({ authStatus }) => {
    const [show, setShow] = useState(false);
    let result = JSON.parse(sessionStorage.getItem("message"));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClickAway = () => {
        if (show === true) {
            setShow(false);
        }
    };

    return (
        <div>
            <header
                className={`${
                    authStatus ? "mt-[-40px]" : "mt-[-67px]"
                } shadow-sm mb-4 `}
            >
                <nav
                    className="relative grid lg:w-full md:w-10 sm:w-5 items-center justify-between bg-white border-red-700"
                    data-te-navbar-ref
                >
                    <div>
                        <div className="flex flex-row px-10 py-6">
                            <i className="fi fi-rs-search opacity-40 mt-2" />
                            <input
                                onChange={(e) => {
                                    dispatch(sreachValue(e.target.value));
                                }}
                                type="text"
                                className="outline-0 ml-4 grow"
                                placeholder="Enter your search text"
                            />
                            <div className="absolute right-0 mr-2">
                                <button
                                    id="dropdownDefaultButton"
                                    data-dropdown-toggle="dropdown"
                                    className="flex flex-cols gap-3 font-medium rounded-lg text-sm text-center items-center"
                                    onClick={() => {
                                        setShow(show ? false : true);
                                    }}
                                >
                                    <i className="fi fi-ss-bell text-xl text-dark-purple mt-2" />
                                    <img
                                        className="h-7 w-7 rounded-full"
                                        src="https://images.megapixl.com/4707/47075259.jpg"
                                        alt="Rounded avatar"
                                    />
                                    <p className="mt-3 whitespace-nowrap font-semibold">
                                        {result.data.first_name +
                                            " " +
                                            result.data.last_name}
                                    </p>
                                    <svg
                                        className="w-4 h-4 ml-1"
                                        aria-hidden="true"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        ></path>
                                    </svg>
                                </button>
                                {show ? (
                                    <ClickAwayListener
                                        onClickAway={handleClickAway}
                                    >
                                        <div
                                            id="dropdown"
                                            className="bg-white rounded-md p-2 w-auto shadow-md z-auto"
                                        >
                                            <button
                                                className="text-base bg-[#1a75ff] w-[11rem] text-white rounded-lg p-2 shadow-xl hover:bg-[#0b5ed7]"
                                                onClick={() => {
                                                    navigate("/");
                                                    dispatch(loginOut());
                                                    RemoveCookies("UserToken");
                                                }}
                                            >
                                                Logout
                                            </button>
                                            <div className="flex flex-col py-3">
                                                <p className="tracking-widest text-sm bg-gray-200 p-1.5 rounded">
                                                    CONTENT
                                                </p>
                                                <div className="flex flex-row cursor-pointer">
                                                    <i className="fi fi-rr-heart text-xl" />{" "}
                                                    <p className="px-2 text-sm">
                                                        Favorites
                                                    </p>
                                                    <i className="fi fi-sr-angle-small-right absolute right-0" />
                                                </div>
                                                <div className="flex flex-row cursor-pointer">
                                                    <i className="fi fi-rr-cloud-download-alt text-xl" />{" "}
                                                    <p className="px-2 text-sm">
                                                        Download
                                                    </p>
                                                    <i className="fi fi-sr-angle-small-right absolute right-0" />
                                                </div>
                                            </div>

                                            <p className="tracking-widest text-sm bg-gray-200 p-1.5 rounded">
                                                PREFERENCES
                                            </p>
                                            <div className="flex flex-row cursor-pointer">
                                                <i className="fi fi-rr-globe text-xl" />{" "}
                                                <p className="px-2 text-sm">
                                                    Langauges
                                                </p>
                                                <i className="fi fi-sr-angle-small-right absolute right-0" />
                                            </div>
                                            <div className="flex flex-row cursor-pointer">
                                                <i className="fi fi-rs-moon text-xl" />{" "}
                                                <p className="px-2 text-sm">
                                                    Dark Mode
                                                </p>
                                                <label className="absolute inline-flex items-center cursor-pointer right-0 ml-2">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                </label>
                                            </div>
                                            <div className="flex flex-row cursor-pointer">
                                                <i className="fi fi-rr-wifi text-xl" />{" "}
                                                <p className="px-2 text-sm">
                                                    Download Ony Via Wifi
                                                </p>
                                                <label className="absolute inline-flex items-center cursor-pointer right-0 ml-2">
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only peer"
                                                    />
                                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                                </label>
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
