import axios from "axios";
import { loginIn } from "../Actions/index";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const Login = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState({ data: "", show: null });

    let loginToDashboard = () => {
        axios
            .post("http://localhost:8090/api/v1/users/loginUser", {
                email,
                password,
            })
            .then((res) => {
                if (res.data.token) {
                    Cookies.set("userToken2", res.data.token, {
                        expires: 1,
                        httpOnly: true,
                    });
                    dispatch(loginIn());
                    navigate("/dashboard");
                    sessionStorage.setItem(
                        "message",
                        JSON.stringify({
                            data: res.data.loginUser,
                            msg: res.data.msg,
                        })
                    );
                }
            })
            .catch((err) => {
                setResult({ msg: err.response.data.message, show: false });
            });
    };

    setTimeout(() => {
        setResult({ show: null });
    }, 5000);

    return (
        <div className="bg-image2 p-8 shadow-md rounded">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 p-8">
                <div className="flex flex-col items-center bg-white p-10 h-full rounded">
                    <div className="flex justify-center w-full">
                        {result.show === false ? (
                            <div
                                className={`h-10 flex p-2 w-[24rem] text-base rounded-lg dark:bg-red-500 dark:text-white justify-center`}
                                role="alert"
                            >
                                <span className="font-medium">
                                    {result.show === false ? "Error !" : ""}
                                </span>
                                &nbsp;{result.msg}
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <img
                            className="h-[3rem] w-[3.5rem]"
                            src="earth.png"
                            alt="error"
                        />
                        <h4 className="text-[#000054] mt-4">
                            Company Management System
                        </h4>
                    </div>
                    <h2 className="text-[#000054] mt-10">LOGIN</h2>
                    <div className="flex flex-col mt-6">
                        <div className="flex flex-col">
                            <span className="px-1 text-sm text-gray-600">
                                Username
                            </span>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                type="text"
                                className="text-md block px-3 py-2  rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-6">
                            <span className="px-1 text-sm text-gray-600">
                                Password
                            </span>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                type="Password"
                                className="text-md block px-3 py-2 rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                            <button
                                className="mt-6 text-lg font-semibold bg-[#1a75ff] w-[17.5rem] text-white rounded-lg p-2 block shadow-xl hover:bg-[#0b5ed7]"
                                onClick={() => {
                                    loginToDashboard();
                                }}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rounded">
                    <img className="rounded" src="login.svg" alt="error" />
                </div>
            </div>
        </div>
    );
};

export default Login;
