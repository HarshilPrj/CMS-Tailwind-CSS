import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetCookies from "./Cookies/GetCookies";
import { useSelector } from "react-redux";

const Teams = () => {
    const myState = useSelector((state) => state.sreachValue);
    const navigate = useNavigate();
    const [ent, setEnt] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(7);
    const [endpage, setEndpage] = useState(1);
    const [data, SetData] = useState([]);
    const [count, SetCount] = useState(0);
    const [role, setRole] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState({ msg: "", show: null });

    let pass = "";
    let name = fullName.split(" ");

    const sighUpUser = () => {
        axios
            .post(`http://localhost:8090/api/v1/users/createUser`, {
                role,
                first_name: name[0],
                last_name: name[1],
                email,
                pass,
            })
            .then((res) => {
                if (res) {
                    setResult({ msg: res.data.message, show: true });
                    setEmail("");
                    setFullName("");
                    setRole("");
                    SetCount(count + 1);
                }
            })
            .catch((err) => {
                setResult({ msg: err.response.data.message, show: true });
            });
    };

    useEffect(() => {
        axios
            .post(
                `http://127.0.0.1:8090/api/v1/users/getUsers?page=${page}&limit=${limit}&search=${myState}`,
                {
                    Cookies: {
                        UserToken: GetCookies("UserToken"),
                    },
                }
            )
            .then((res) => {
                setEnt(res.data.count);
                SetData(res.data.rows);
            })
            .catch((err) => {
                if (err) {
                    navigate("/");
                }
            });
        setEndpage(Math.ceil(ent / limit));
    }, [count, navigate, ent, page, limit, myState]);

    let handleClickUpdate = async (id) => {
        await axios.put(`http://127.0.0.1:8090/api/v1/users/updateUser/${id}`, {
            is_deleted: true,
            is_enable: false,
        });
    };

    setTimeout(() => {
        setResult({ msg: "", show: null });
    }, 8000);

    return (
        <div className="p-4 shadow-md bg-image2">
            <div className="flex flex-row">
                <i className="fi fi-ss-users-alt text-2xl text-blue-700" />
                <h5 className="ml-4 whitespace-nowrap">Team Members</h5>
                <div className="flex justify-center w-full">
                    {result.show === true ? (
                        <div
                            className={`h-10 flex p-2 w-[24rem] text-base rounded-lg bg-green-500 dark:text-white justify-center`}
                            role="alert"
                        >
                            <span className="font-medium">
                                {result.show === true ? "Success !" : ""}
                            </span>
                            &nbsp;{result.msg}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:p-4 lg:p-6 justify-center gap-4">
                <div className="flex items-center flex-col shadow-md bg-white rounded-lg cursor-pointer">
                    <div className="flex flex-row w-full p-2 cursor-pointer">
                        <p className="font-bold text-sm">Role : </p>
                        <span className="text-gray-500 font-normal text-xs">
                            <select
                                className="p-1 outline-0"
                                onChange={(e) => setRole(e.target.value)}
                            >
                                <option value={role}>Choose a Role</option>
                                <option value={"Admin"}>Admin</option>
                                <option value={"Super Admin"}>
                                    Super Admin
                                </option>
                                <option value={"Employee"}>Employee</option>
                                <option value={"Team Leader"}>
                                    Team Leader
                                </option>
                                <option value={"HR"}>HR</option>
                                <option value={"Project Manager"}>
                                    Project Manager
                                </option>
                            </select>
                        </span>
                    </div>
                    <div className="flex items-center flex-col">
                        <img
                            className="h-20 w-20 rounded-full mt-2"
                            src="https://images.megapixl.com/4707/47075259.jpg"
                            alt="Rounded avatar"
                        />
                        <h6 className="text-sm mt-1 font-bold">
                            <input
                                type="text"
                                value={fullName}
                                className="text-sm rounded-lg border-b-2 outline-0 w-full p-2"
                                placeholder="Enter The Full Name"
                                required
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </h6>
                        <p className="text-xs mt-1 text-gray-500">
                            <input
                                type="email"
                                value={email}
                                className="text-sm rounded-lg border-b-2 outline-0 w-full p-2"
                                placeholder="Enter The Email"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 text-sm font-semibold bg-[#1a75ff] w-[12rem] text-white rounded-lg p-2 block shadow-xl hover:bg-[#0b5ed7]"
                        onClick={() => {
                            pass = `${name[0]}123@`;
                            sighUpUser();
                        }}
                    >
                        Add Team Member
                    </button>
                </div>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center flex-col shadow-md bg-white rounded-lg cursor-pointer"
                        >
                            <div className="flex justify-between w-full p-2">
                                <p className="font-bold text-sm">
                                    Role :{" "}
                                    <span className="text-gray-500 font-normal text-xs">
                                        {item.role.user_role}
                                    </span>
                                </p>
                                <div
                                    className="hover:text-sm focus:text-sm active:text-sm"
                                    data-te-toggle="tooltip"
                                    title={`Delete ${item.first_name}`}
                                >
                                    <i
                                        className="float-right text-xl fi fi-rs-trash"
                                        onClick={() => {
                                            handleClickUpdate(item.id);
                                            SetCount(count + 1);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex p-2 items-center flex-col">
                                <img
                                    className="h-20 w-20 rounded-full mt-2"
                                    src="https://images.megapixl.com/4707/47075259.jpg"
                                    alt="Rounded avatar"
                                />
                                <h6 className="text-sm mt-4 font-bold">
                                    {item.first_name + " " + item.last_name}
                                </h6>
                                <p className="text-xs mt-1 text-gray-500">
                                    {item.email}
                                </p>
                            </div>
                            <div className="flex w-full flex-row justify-around bg-slate-100 p-4 rounded h-16">
                                <div className="flex w-auto justify-between">
                                    <i className="fi fi-rr-calendar mr-4" />
                                    <p className="pb-4">Assign</p>
                                </div>
                                <div className="flex w-auto justify-between">
                                    <i className="fi fi-rs-eye mr-4" />
                                    <p className="pb-4">View</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex p-4 justify-between">
                <p className="flex font-bold">
                    Showing 1 To {limit <= ent ? limit : ent} of {ent} Entries
                </p>
                <div className="grid grid-cols-3 gap-4 rounded-2xl font-bold">
                    <select
                        className="border-2 text-black text-sm rounded-lg block w-full p-2"
                        onChange={(e) => setLimit(e.target.value)}
                    >
                        <option value={7}>7</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                    <button
                        className="border-2 p-2 rounded"
                        onClick={() => {
                            setPage(page - 1);
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className="border-2 p-2 rounded"
                        disabled={page === endpage}
                        onClick={() => {
                            setPage(page + 1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Teams;
