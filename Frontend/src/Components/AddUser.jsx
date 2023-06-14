import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const [role, setRole] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState();
    const [pass, setPassword] = useState();

    let navigate = useNavigate();

    const sighUpUser = () => {
        axios
            .post(`http://localhost:8090/api/v1/users/createUser`, {
                role,
                first_name,
                last_name,
                email,
                pass,
            })
            .then((res) => {
                if (res) {
                    navigate("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="bg-image2 p-6 shadow-md rounded">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 p-6">
                <div className="flex flex-col items-center bg-white p-6 h-full rounded">
                    <div className="flex flex-col items-center">
                        <h4 className="text-[#000054]">Company Management System</h4>
                        <h2 className="text-[#000054] mt-2">SIGN UP</h2>
                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="flex flex-col">
                            <span className="px-1 text-sm text-gray-600">Role</span>
                            <select
                                className="text-md block px-3 py-2  rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option defaultValue={""}>Choose a Role</option>
                                <option defaultValue={"Admin"}>Admin</option>
                                <option defaultValue={"Super Admin"}>Super Admin</option>
                                <option defaultValue={"Employee"}>Employee</option>
                                <option defaultValue={"Team Leader"}>Team Leader</option>
                                <option defaultValue={"HR"}>HR</option>
                                <option defaultValue={"Project Manager"}>
                                    Project Manager
                                </option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-3">
                            <span className="px-1 text-sm text-gray-600">FirstName</span>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter FirstName"
                                type="text"
                                className="text-md block px-3 py-2  rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <span className="px-1 text-sm text-gray-600">LastName</span>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter LastName"
                                type="text"
                                className="text-md block px-3 py-2  rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <span className="px-1 text-sm text-gray-600">Email</span>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter Email"
                                type="text"
                                className="text-md block px-3 py-2  rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col mt-3">
                            <span className="px-1 text-sm text-gray-600">Password</span>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Password"
                                type="Password"
                                className="text-md block px-3 py-2 rounded-lg w-[17.5rem] bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                            />
                        </div>
                        <button
                            className="mt-6 text-lg font-semibold bg-[#1a75ff] w-[17.5rem] text-white rounded-lg p-2 block shadow-xl hover:bg-[#0b5ed7]"
                            onClick={() => {
                                sighUpUser();
                            }}
                        >
                            SignUp
                        </button>
                        <p className="text-sm font-light text-gray-500 mt-2 cursor-pointer">
                            Already have an account?{" "}
                            <span
                                className="font-medium hover:underline text-blue-500"
                                onClick={() => navigate("/")}
                            >
                                Login here
                            </span>
                        </p>
                    </div>
                </div>
                <div className="rounded">
                    <img className="rounded" src="login.svg" alt="error" />
                </div>
            </div>
        </div>
    );
};

export default AddUser;
