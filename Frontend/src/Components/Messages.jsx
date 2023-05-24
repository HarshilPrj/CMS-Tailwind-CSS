import axios from "axios";
import React, { useState, useEffect } from "react";
import GetCookies from "./Cookies/GetCookies";
import { useSelector } from "react-redux";

const Messages = () => {
    const myState = useSelector((state) => state.sreachValue);
    const [ent, setEnt] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [data, SetData] = useState([]);
    const [endpage, setEndpage] = useState(1);
    let count = 0;

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
            });
        setEndpage(Math.ceil(ent / limit));
    }, [count, page, limit, ent, myState]);

    return (
        <div>
            <div className="shadow-md rounded p-3">
                <h4>Message Inbox</h4>
                <div className="rounded">
                    <div className="relative sm:rounded-lg p-4">
                        <table className="w-full text-sm text-left text-gray-600">
                            <thead className="text-xs text-white uppercase bg-gray-500">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Description
                                    </th>
                                </tr>
                            </thead>
                            {data.map((item, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr className="bg-white border-b-2">
                                            <th
                                                scope="row"
                                                className="flex text-gray-900 font-bold flex-row m-1 items-center"
                                            >
                                                <div className="flex items-center">
                                                    <input
                                                        id="default-checkbox"
                                                        type="checkbox"
                                                        value=""
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                                                    />
                                                </div>
                                                <img
                                                    className="h-7 w-7 rounded-full ml-4"
                                                    src="https://images.megapixl.com/4707/47075259.jpg"
                                                    alt="Rounded avatar"
                                                />
                                                <p className="ml-3 mt-2 whitespace-nowrap">
                                                    {item.first_name +
                                                        " " +
                                                        item.last_name}
                                                </p>
                                            </th>
                                            <td className="px-6 py-2 font-bold">
                                                Silver
                                            </td>
                                            <td className="px-6 py-2 break-normal">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry.
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                        <div className="flex p-4 justify-between bg-gray-50">
                            <p className="flex">
                                Showing 1 To {limit <= ent ? limit : ent} of{" "}
                                {ent} Entries
                            </p>
                            <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white">
                                <select
                                    className="border-2 text-gray-900 text-sm rounded-lg block w-full p-2"
                                    onChange={(e) => setLimit(e.target.value)}
                                >
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
                </div>
            </div>
        </div>
    );
};

export default Messages;
