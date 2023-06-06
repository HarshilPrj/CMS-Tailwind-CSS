import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
    const [ent, setEnt] = useState(0);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [data, SetData] = useState([]);
    const [search, SetSearch] = useState(3);
    const [endpage, setEndpage] = useState(1);

    useEffect(() => {
        axios
            .get(
                `http://localhost:8090/api/v1/products/orders?page=${page}&limit=${limit}&search=${search}`
            )
            .then((res) => {
                setEnt(res.data.count);
                SetData(res.data.rows);
            });
        setEndpage(Math.ceil(ent / limit));
    }, [search, page, limit, ent]);

    return (
        <div className="shadow-lg rounded p-4">
            <div className="flex flex-row gap-1">
                <i className="fi fi-ss-shopping-cart mt-1 text-xl" />
                <p className="text-gray-700 font-bold text-2xl">Orders</p>
                <p className="text-sm text-gray-500 mt-2">{ent} Orders Found</p>
            </div>
            <div className="flex flex-row gap-4">
                <p
                    className={`flex ${
                        search === 3 ? "text-blue-500 underline" : ""
                    } cursor-pointer font-bold`}
                    onClick={() => SetSearch(3)}
                >
                    All orders
                </p>
                <p
                    className={`flex ${
                        search === 1
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer font-bold`}
                    onClick={() => SetSearch(1)}
                >
                    Completed
                </p>
                <p
                    className={`flex ${
                        search === 0
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer font-bold`}
                    onClick={() => SetSearch(0)}
                >
                    Pending
                </p>
                <p
                    className={`flex ${
                        search === 2
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer font-bold`}
                    onClick={() => SetSearch(2)}
                >
                    Cancel
                </p>
            </div>
            <div>
                <table className="w-full text-[6px] text-left bg-gray-50">
                    <thead className="text-[10px] text-white uppercase bg-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-2 text-sm">
                                #
                            </th>
                            <th scope="col" className="px-4 py-2 text-sm">
                                Order ID
                            </th>
                            <th scope="col" className="px-4 py-2 text-sm">
                                Product Name
                            </th>
                            <th scope="col" className="px-4 py-2 text-sm">
                                Address
                            </th>
                            <th scope="col" className="px-4 py-2 text-sm">
                                Date
                            </th>
                            <th scope="col" className="px-4 py-2 text-sm">
                                Price
                            </th>
                            <th scope="col" className="px-4 py-2 text-sm">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={index} className="border-b-2">
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">
                                        #{item.id.slice(0, 7)}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.product_name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.address}...
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.order_date}
                                    </td>
                                    <td className="px-6 py-4">
                                        $ {item.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`text-base font-medium text-center p-2 rounded-xl ${
                                                item.status === 0
                                                    ? "bg-orange-400"
                                                    : item.status === 1
                                                    ? "bg-green-400"
                                                    : "bg-red-500 text-white"
                                            }`}
                                        >
                                            {item.status === 0
                                                ? "Pending"
                                                : item.status === 1
                                                ? "Completed"
                                                : "Canceled"}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="flex p-4 justify-between bg-gray-50">
                    <p className="flex">
                        Showing 1 To {limit <= ent ? limit : ent} of {ent}{" "}
                        Entries
                    </p>
                    <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white">
                        <select
                            className="border-2 text-gray-900 text-sm rounded-lg block w-full p-2"
                            onChange={(e) => setLimit(e.target.value)}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={15}>15</option>
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
    );
};

export default Orders;
