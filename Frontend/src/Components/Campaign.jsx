import React, { useState } from "react";

const Campaign = () => {
    const [count, setCount] = useState(1);
    const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="p-4 shadow-md bg-blue-50">
            <p className="font-bold text-lg">Overview</p>
            <div className="flex justify-between bg-blue-100 rounded-xl">
                <div className="flex flex-row">
                    <p className="p-2 ml-4 font-bold text-lg">
                        {month[new Date().getMonth()] + ", " + new Date().getFullYear()}
                    </p>
                </div>
                <div className="flex flex-row gap-2 mr-4 bg-white rounded-2xl h-10 my-2 p-[0.1rem] text-sm">
                    <span
                        onClick={() => {
                            setCount(1);
                        }}
                        className={`text-base font-medium text-center p-2 rounded-2xl ${
                            count === 1 ? "bg-blue-400" : ""
                        } w-16 cursor-pointer`}
                    >
                        Days
                    </span>
                    <span
                        onClick={() => {
                            setCount(2);
                        }}
                        className={`text-base font-medium text-center p-2 rounded-2xl ${
                            count === 2 ? "bg-blue-400" : ""
                        } w-16 cursor-pointer`}
                    >
                        Week
                    </span>
                    <span
                        onClick={() => {
                            setCount(3);
                        }}
                        className={`text-base font-medium text-center p-2 rounded-2xl ${
                            count === 3 ? "bg-blue-400" : ""
                        } w-16 cursor-pointer`}
                    >
                        Month
                    </span>
                    <span
                        onClick={() => {
                            setCount(4);
                        }}
                        className={`text-base font-medium text-center p-2 rounded-2xl ${
                            count === 4 ? "bg-blue-400" : ""
                        } w-16 cursor-pointer`}
                    >
                        Year
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-12 py-3 gap-3">
                {date.map((_item, index) => {
                    return (
                        <div className="flex flex-col text-center border-2 rounded-xl bg-white p-2 cursor-pointer">
                            <p className="text-gray-500">{month[index]}</p>
                            <h4 className="font-bold">{index + 1}</h4>
                        </div>
                    );
                })}
            </div>
            <div className="grid grid-cols-5 py-3 gap-4">
                <div
                    className="border-2 bg-white rounded-2xl p-4 cursor-pointer"
                    id="icon-color1"
                >
                    <div className="flex flex-row relative border-b-2">
                        <span className="text-8xl font-bold text-[#9900ff] mt-[-66px]">
                            .
                        </span>
                        <p className="px-2 font-bold text-xl text-gray-500">Sent</p>
                        <i className="absolute right-0 fi fi-rr-angle-small-right mr-2 font-bold text-xl py-2" />
                    </div>
                    <div className="flex flex-row justify-around border-dashed border-2 rounded-lg mt-4 p-2">
                        <div className="flex items-end bg-gray-100 p-4 rounded-lg">
                            <i className="fi fi-rr-paper-plane-top text-3xl text-gray-600"></i>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold">40</h1>
                            <span className="text-sm text-gray-700">Docs</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 py-3">
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Total</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Today</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <p className="text-lg text-gray-700">520</p>
                        <p className="text-lg text-gray-700">63</p>
                    </div>
                </div>
                <div
                    className="border-2 bg-white rounded-2xl p-4 cursor-pointer"
                    id="icon-color2"
                >
                    <div className="flex flex-row relative border-b-2">
                        <span className="text-8xl font-bold text-[#1aa3ff] mt-[-66px]">
                            .
                        </span>
                        <p className="px-2 font-bold text-xl text-gray-500">Viewed</p>
                        <i className=" absolute right-0 fi fi-rr-angle-small-right mr-2 font-bold text-xl py-2" />
                    </div>
                    <div className="flex flex-row justify-around border-dashed border-2 rounded-lg mt-4 p-2">
                        <div className="flex items-end bg-gray-100 p-4 rounded-lg">
                            <i className="fi fi-rs-eye text-3xl text-gray-600"></i>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold">70</h1>
                            <span className="text-sm text-gray-700">Docs</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 py-3">
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Total</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Today</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <p className="text-lg text-gray-700">520</p>
                        <p className="text-lg text-gray-700">63</p>
                    </div>
                </div>
                <div
                    className="border-2 bg-white rounded-2xl p-4 cursor-pointer"
                    id="icon-color3"
                >
                    <div className="flex flex-row relative border-b-2">
                        <span className="text-8xl font-bold text-[#33ff33] mt-[-66px]">
                            .
                        </span>
                        <p className="px-2 font-bold text-xl text-gray-500">Completed</p>
                        <i className=" absolute right-0 fi fi-rr-angle-small-right mr-2 font-bold text-xl py-2" />
                    </div>
                    <div className="flex flex-row justify-around border-dashed border-2 rounded-lg mt-4 p-2">
                        <div className="flex items-end bg-gray-100 p-4 rounded-lg">
                            <i className="fi fi-rr-assept-document text-3xl text-gray-600"></i>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold">120</h1>
                            <span className="text-sm text-gray-700">Docs</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 py-3">
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Total</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Today</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <p className="text-lg text-gray-700">520</p>
                        <p className="text-lg text-gray-700">63</p>
                    </div>
                </div>
                <div
                    className="border-2 bg-white rounded-2xl p-4 cursor-pointer"
                    id="icon-color4"
                >
                    <div className="flex flex-row relative border-b-2">
                        <span className="text-8xl font-bold text-[#ff1aff] mt-[-66px]">
                            .
                        </span>
                        <p className="px-2 font-bold text-xl text-gray-500">Expired</p>
                        <i className=" absolute right-0 fi fi-rr-angle-small-right mr-2 font-bold text-xl py-2" />
                    </div>
                    <div className="flex flex-row justify-around border-dashed border-2 rounded-lg mt-4 p-2">
                        <div className="flex items-end bg-gray-100 p-4 rounded-lg">
                            <i className="fi fi-rr-file-excel text-3xl text-gray-600"></i>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold">28</h1>
                            <span className="text-sm text-gray-700">Docs</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 py-3">
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Total</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Today</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <p className="text-lg text-gray-700">520</p>
                        <p className="text-lg text-gray-700">63</p>
                    </div>
                </div>
                <div
                    className="border-2 bg-white rounded-2xl p-4 cursor-pointer"
                    id="icon-color5"
                >
                    <div className="flex flex-row relative border-b-2">
                        <span className="text-8xl font-bold text-[#b3b3cc] mt-[-66px]">
                            .
                        </span>
                        <p className="px-2 font-bold text-xl text-gray-500">Draft</p>
                        <i className=" absolute right-0 fi fi-rr-angle-small-right mr-2 font-bold text-xl py-2" />
                    </div>
                    <div className="flex flex-row justify-around border-dashed border-2 rounded-lg mt-4 p-2">
                        <div className="flex items-end bg-gray-100 p-4 rounded-lg">
                            <i className="fi fi-rs-notebook-alt text-3xl text-gray-600"></i>
                        </div>
                        <div className="p-2">
                            <h1 className="font-bold">13</h1>
                            <span className="text-sm text-gray-700">Docs</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 py-3">
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Total</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <div className="flex flex-row justify-between border-b-2">
                            <span className="text-sm text-gray-700">Today</span>
                            <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                        </div>
                        <p className="text-lg text-gray-700">520</p>
                        <p className="text-lg text-gray-700">63</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
