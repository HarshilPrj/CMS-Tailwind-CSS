import axios from "axios";
import React, { useState, useEffect } from "react";

const Messages = () => {
    const [data, SetData] = useState([]);
    let count = 0;

    useEffect(() => {
        axios
            .get(
                "http://127.0.0.1:8090/api/v1/users/getUsers?page=1&limit=200&search="
            )
            .then((res) => {
                SetData(res.data);
            });
    }, [count]);

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
                            {data.map((item) => {
                                return (
                                    <tbody>
                                        <tr className="bg-white border-b-2">
                                            <th
                                                scope="row"
                                                className="flex text-gray-900 font-bold flex-row m-3 items-center"
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
                                                <p className="ml-3 mt-1 whitespace-nowrap">
                                                    {item.first_name +
                                                        " " +
                                                        item.last_name}
                                                </p>
                                            </th>
                                            <td className="px-6 py-4 font-bold">
                                                Silver
                                            </td>
                                            <td className="px-6 py-4 break-normal">
                                                Lorem Ipsum is simply dummy text
                                                of the printing and typesetting
                                                industry.
                                            </td>
                                        </tr>
                                    </tbody>
                                );
                            })}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Messages;
