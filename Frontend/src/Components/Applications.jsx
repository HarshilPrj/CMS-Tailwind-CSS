import React from "react";

const Applications = () => {
    let data = [
        {
            logo: "skype",
            title: "Skype",
            des: "Link your Microsoft account and chat with your entire team.",
            link: "https://skype.en.softonic.com/",
        },
        {
            logo: "vscode",
            title: "Visual Studio Code",
            des: "Visual Studio Code editor for efficient development and customizable workflows.",
            link: "https://code.visualstudio.com/download",
        },
        {
            logo: "zoom",
            title: "Zoom",
            des: "Video conferencing software for remote meetings and virtual collaboration.",
            link: "https://zoom.us/download",
        },
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
            link: "https://www.figma.com/downloads/",
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
            link: "https://www.google.com/chrome/?brand=YTUH&gclid=CjwKCAjwscGjBhAXEiwAswQqNPU58iCLJcK35B2Nt0Ic_zwvoMbLFuLrnkzoKSD220Eliwow-aKCbhoCVOYQAvD_BwE&gclsrc=aw.ds",
        },
        {
            logo: "discord",
            title: "Discord",
            des: "Keep in touch with your customers without leaving the app.",
            link: "https://discord.com/download",
        },
        {
            logo: "drive",
            title: "Google Drive",
            des: "Link your Google account to share files across your entire team.",
            link: "https://www.google.com/intl/en_in/drive/download/",
        },
    ];

    return (
        <div className="shadow-lg rounded p-2">
            <div className="grid lg:grid-cols-3 rounded-md gap-4 p-4">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="p-4 shadow-md rounded-lg cursor-pointer"
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
                                <div
                                    className="hover:text-sm focus:text-sm active:text-sm"
                                    data-te-toggle="tooltip"
                                    title={`Download ${item.title}`}
                                >
                                    <i
                                        className="absolute right-0 text-xl text-blue-500 fi fi-sr-down-to-line"
                                        onClick={() => {
                                            window.location.href = `${item.link}`;
                                        }}
                                    />
                                </div>
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

export default Applications;
