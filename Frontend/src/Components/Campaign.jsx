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

    let data = [
        {
            title: "Sent",
            icon: "fi fi-rr-paper-plane-top",
            docs: 40,
            total: 520,
            today: 63,
            color: "#9900ff",
        },
        {
            title: "Viewed",
            icon: "fi fi-rs-eye",
            docs: 70,
            total: 234,
            today: 98,
            color: "#1aa3ff",
        },
        {
            title: "Completed",
            icon: "fi fi-rr-assept-document",
            docs: 120,
            total: 790,
            today: 55,
            color: "#33ff33",
        },
        {
            title: "Expired",
            icon: "fi fi-rr-file-excel",
            docs: 28,
            total: 234,
            today: 98,
            color: "#ff1aff",
        },
        {
            title: "Draft",
            icon: "fi fi-rs-notebook-alt",
            docs: 13,
            total: 30,
            today: 12,
            color: "#b3b3cc",
        },
    ];

    let numData = [
        { title: "Revenue Generated", num: "$ 13,430,120", icon: "fi fi-rs-money" },
        { title: "Contacts", num: "2940", icon: "fi fi-bs-form" },
        { title: "Documents", num: "1450", icon: "fi fi-rr-edit" },
        { title: "Products", num: "135", icon: "fi fi-bs-box-open" },
        { title: "Templates", num: "30", icon: "fi fi-br-album-circle-plus" },
        { title: "Contracts", num: "450", icon: "fi fi-br-document" },
    ];

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
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-4 cursor-pointer shadow-xl"
                            id={`icon-color${index + 1}`}
                        >
                            <div className="flex flex-row relative border-b-2">
                                <span
                                    className={`text-8xl font-bold text-[${item.color}] mt-[-66px]`}
                                >
                                    .
                                </span>
                                <p className="px-2 font-bold text-xl text-gray-500">
                                    {item.title}
                                </p>
                                <i className="absolute right-0 fi fi-rr-angle-small-right mr-2 font-bold text-xl py-2" />
                            </div>
                            <div className="flex flex-row justify-around border-dashed border-2 rounded-lg mt-4 p-2">
                                <div className="flex items-end bg-gray-100 p-4 rounded-lg">
                                    <i
                                        className={`${item.icon} text-3xl text-gray-600`}
                                    ></i>
                                </div>
                                <div className="p-2">
                                    <h1 className="font-bold">{item.docs}</h1>
                                    <span className="text-sm text-gray-700">Docs</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mt-4">
                                <div className="flex flex-row justify-between border-b-2">
                                    <span className="text-sm text-gray-700">Total</span>
                                    <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                                </div>
                                <div className="flex flex-row justify-between border-b-2">
                                    <span className="text-sm text-gray-700">Today</span>
                                    <i className="fi fi-rr-arrow-right py-1 px-2"></i>
                                </div>
                                <p className="text-lg text-gray-700">{item.total}</p>
                                <p className="text-lg text-gray-700">{item.today}</p>
                            </div>
                        </div>
                    );
                })}
                <div className="mt-4">
                    <div className="flex flex-row gap-2">
                        <i className="fi fi-rr-users-medical text-2xl py-1"></i>
                        <p className="font-bold text-lg">General Numbers</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 rounded-lg p-3 w-[74rem]">
                        {numData.map((item, index) => {
                            return (
                                <div
                                    className="relative flex flex-row gap-3 bg-white rounded-2xl p-4 cursor-pointer shadow-md"
                                    key={index}
                                >
                                    <div className="flex items-center rounded-lg">
                                        <i
                                            className={`${item.icon} text-3xl text-gray-600`}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between px-2">
                                        <p className="mt-3">{item.title}</p>
                                        <p className="text-2xl font-bold">{item.num}</p>
                                    </div>
                                    <i className="absolute right-0 fi fi-bs-menu-dots mr-4 py-5" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Campaign;
