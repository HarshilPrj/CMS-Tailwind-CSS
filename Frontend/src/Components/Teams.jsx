import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Teams = () => {
    const navigate = useNavigate();
    const [data, SetData] = useState([]);
    const [count, SetCount] = useState(0);
    const [like, SetLike] = useState(false);

    useEffect(() => {
        axios
            .get(
                "http://127.0.0.1:8090/api/v1/users/getUsers?page=1&limit=200&search="
            )
            .then((res) => {
                SetData(res.data);
            })
            .catch((err) => {
                if (err) {
                    navigate("/");
                }
            });
    }, [count, navigate]);

    let handleClickUpdate = (id) => {
        console.log(like);
        axios
            .put(`http://127.0.0.1:8090/api/v1/users/updateUser/${id}`, {
                like: like === false ? true : false,
            })
            .then((res) => {
                // console.log(res.data);
            });
    };

    return (
        <div className="p-4 shadow-md bg-image2">
            <div className="flex flex-row">
                <i className="fi fi-ss-users-alt text-2xl text-blue-700" />
                <h5 className="ml-4">Team Members</h5>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 sm:p-4 lg:p-6 justify-center gap-4">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="flex items-center flex-col shadow-md bg-white rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"
                        >
                            <div className="w-full p-2">
                                <i
                                    className={`float-right ${
                                        item.like
                                            ? "fi fi-ss-heart"
                                            : "fi fi-rr-heart"
                                    } text-2xl text-red-500`}
                                    onClick={() => {
                                        handleClickUpdate(item.id);
                                        SetLike(item.like);
                                        SetCount(count + 1);
                                    }}
                                />
                                <p className="font-bold text-sm">
                                    Role :{" "}
                                    <span className="text-gray-500 font-normal text-xs">
                                        {item.role.user_role}
                                    </span>
                                </p>
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
        </div>
    );
};

export default Teams;
