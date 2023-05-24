import React, { useState } from "react";

const Settings = () => {
    const [search, SetSearch] = useState(7);
    let data = [
        {
            logo: "linear",
            title: "Linear",
            des: "Streamline software projects, sprints and bug tracking.",
        },
        {
            logo: "github",
            title: "Guthub",
            des: "Link pull requets and automate workflows.",
        },
        {
            logo: "figma",
            title: "Figma",
            des: "Embed file previews in projects.",
        },
        {
            logo: "zapier",
            title: "Zapier",
            des: "Build custom automatics and integratons with apps.",
        },
        {
            logo: "notation",
            title: "Notation",
            des: "Embed notation pages and notes in projects.",
        },
        {
            logo: "slack",
            title: "Slack",
            des: "Send notification to channels and create projects.",
        },
        {
            logo: "zendesk",
            title: "Zendesk",
            des: "Link and automatic Zendesk ticket.",
        },
        {
            logo: "jira",
            title: "Atlassian JIRA",
            des: "Plan, track and release software.",
        },
        {
            logo: "dropbox",
            title: "Dropbox",
            des: "Everything you need foe work, all in one place.",
        },
        {
            logo: "chrome",
            title: "Google Chrome",
            des: "Link your Google account to share bookmarks across your entire team.",
        },
        {
            logo: "discord",
            title: "Discord",
            des: "Keep in touch with your customers without leaving the app.",
        },
        {
            logo: "drive",
            title: "Google Drive",
            des: "Link your Google account to share files across your entire team.",
        },
    ];

    return (
        <div className="shadow-lg rounded p-4">
            <div className="flex flex-row gap-4">
                <p
                    className={`flex ${
                        search === 1 ? "text-blue-500 underline" : ""
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(1)}
                >
                    My Details
                </p>
                <p
                    className={`flex ${
                        search === 2
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(2)}
                >
                    Profile
                </p>
                <p
                    className={`flex ${
                        search === 3
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(3)}
                >
                    Passwords
                </p>
                <p
                    className={`flex ${
                        search === 4
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(4)}
                >
                    Team
                </p>
                <p
                    className={`flex ${
                        search === 5
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(5)}
                >
                    Billings
                </p>
                <p
                    className={`flex ${
                        search === 6
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(6)}
                >
                    Emails
                </p>
                <p
                    className={`flex ${
                        search === 7
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(7)}
                >
                    Notification
                </p>
                <p
                    className={`flex ${
                        search === 8
                            ? "text-blue-500 underline"
                            : "text-gray-600"
                    } cursor-pointer text-sm`}
                    onClick={() => SetSearch(8)}
                >
                    Integration
                </p>
            </div>
            <div className="grid lg:grid-cols-3 rounded-md gap-4 p-4">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="p-4 shadow-md rounded-md cursor-pointer"
                        >
                            <div className="flex flex-row relative">
                                <img
                                    className="h-11 w-11 rounded-full"
                                    src={`./${item.logo}.png`}
                                    alt="err"
                                />
                                <p className="py-2 pl-3 font-semibold">
                                    {item.title}
                                </p>
                                <label className="absolute inline-flex items-center cursor-pointer right-0">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                            <p className="border-b-2 py-2 whitespace-pre-wrap">
                                {item.des}
                            </p>
                            <div className="relative p-2">
                                <p className="text-blue-600 absolute right-0">
                                    View Integration
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Settings;
