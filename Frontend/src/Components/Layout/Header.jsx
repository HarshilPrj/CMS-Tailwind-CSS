import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginOut } from "../../Actions/index";
import RemoveCookies from "../Cookies/RemoveCookies";

const Header = ({ authStatus }) => {
    const [show, setShow] = useState(false);
    let result = JSON.parse(sessionStorage.getItem("message"));
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                                    <div
                                        id="dropdown"
                                        className={`bg-white rounded-lg p-4 w-full`}
                                    >
                                        <button
                                            className="text-base bg-[#1a75ff] w-[10rem] text-white rounded-lg p-2 shadow-xl hover:bg-[#0b5ed7]"
                                            onClick={() => {
                                                navigate("/");
                                                dispatch(loginOut());
                                                RemoveCookies("UserToken");
                                            }}
                                        >
                                            Logout
                                        </button>
                                    </div>
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
