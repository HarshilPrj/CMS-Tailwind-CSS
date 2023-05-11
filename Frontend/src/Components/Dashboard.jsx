import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginInOut } from "../Actions/index";
import Chart from "react-apexcharts";

const Dashboard = () => {
    const myState = useSelector((state) => state.checkLogin);
    const dispatch = useDispatch();
    let result = JSON.parse(sessionStorage.getItem("message"));

    let options = {
        series1: [
            {
                name: "Credits",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
            {
                name: "Debits",
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        series2: [
            {
                name: "Credits",
                data: [20, 35, 26, 48, 38, 110, 99],
            },
            {
                name: "Debits",
                data: [56, 34, 56, 34, 56, 78, 45],
            },
        ],
        series3: [
            {
                name: "Credits",
                data: [56, 34, 56, 34, 56, 78, 45],
            },
            {
                name: "Debits",
                data: [20, 35, 26, 48, 38, 110, 99],
            },
        ],
        chart: {
            height: 350,
            type: "area",
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
            ],
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
        },
    };

    let colors = [
        "#3366ff",
        "#80ff80",
        "#ffdb4d",
        "#ff4d94",
        "#8533ff",
        "#8585ad",
        "#70dbdb",
        "#ff4dff",
    ];

    let barOptions = {
        series: [
            {
                data: [21, 22, 10, 28, 16, 21, 13, 30],
            },
        ],
        series2: [
            {
                data: [12, 32, 29, 21, 8, 31, 11, 24],
            },
        ],
        chart: {
            height: 350,
            type: "bar",
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: "40%",
                distributed: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        xaxis: {
            categories: [
                ["Jaydeep"],
                ["Karan"],
                ["Abhay"],
                ["Mithil"],
                ["Jaimin"],
                ["Nikesh"],
                ["Jasmat"],
                ["Kartik"],
            ],
            labels: {
                style: {
                    colors: colors,
                    fontSize: "1px",
                },
            },
        },
    };

    setTimeout(() => {
        dispatch(loginInOut());
    }, 4000);

    return (
        <div className="container p-3 mx-auto">
            <div className="flex justify-center w-full">
                {myState === true ? (
                    <div
                        className={`h-10 flex p-2 w-[24rem] text-xl rounded-lg dark:bg-green-500 dark:text-white justify-center`}
                        role="alert"
                    >
                        <span className="text-xl">Success !</span>&nbsp;
                        {result.msg}
                    </div>
                ) : (
                    ""
                )}
            </div>

            <div className="grid p-3 lg:w-full sm:w-[17.5rem] grid-cols-1 rounded bg-image text-white mt-6">
                <h1 className="font-bold text-2xl ">
                    Good Morning, {result.data.first_name}
                </h1>
                <p>Here is What's happening with your projects today</p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4">
                <div className="w-full h-full p-2 shadow-md">
                    <div className="flex flex-row">
                        <i className="fi fi-ss-paper-plane-top text-2xl text-blue-700" />
                        <h5 className="ml-6">Acme Plush</h5>
                    </div>
                    <Chart
                        options={options}
                        series={options.series1}
                        type="area"
                        width="380"
                        height="300"
                    />
                </div>
                <div className="w-full h-full p-2 shadow-md">
                    <div className="flex flex-row">
                        <i className="fi fi-ss-paper-plane-top text-2xl text-cyan-400" />
                        <h5 className="ml-6">Acme Advanced</h5>
                    </div>
                    <Chart
                        options={options}
                        series={options.series2}
                        type="area"
                        width="380"
                        height="300"
                    />
                </div>
                <div className="w-full h-full p-2 shadow-md">
                    <div className="flex flex-row">
                        <i className="fi fi-ss-paper-plane-top text-2xl text-gray-500" />
                        <h5 className="ml-6">Acme Professional</h5>
                    </div>
                    <Chart
                        options={options}
                        series={options.series3}
                        type="area"
                        width="380"
                        height="300"
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-4 gap-4">
                <div className="w-full h-full p-2 shadow-md">
                    <h6 className="ml-4">Direct VS InDirect</h6>
                    <Chart
                        options={barOptions}
                        series={barOptions.series}
                        type="bar"
                        width="600"
                        height="300"
                    />
                </div>
                <div className="w-full h-full p-2 shadow-md">
                    <h6 className="ml-4">Real Time Value</h6>
                    <Chart
                        options={barOptions}
                        series={barOptions.series2}
                        type="bar"
                        width="600"
                        height="300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
