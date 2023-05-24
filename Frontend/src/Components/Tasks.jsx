import React from "react";

const Tasks = () => {
    return (
        <div className="shadow-lg rounded p-4">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row justify-between gap-2">
                    <i className="fi fi-rr-list-check text-2xl text-blue-700 py-1" />
                    <p className="text-gray-700 font-bold text-2xl">Tasks</p>
                </div>
                <div className="flex flex-row justify-between gap-3">
                    <i className="fi fi-rr-star py-2 cursor-pointer" />
                    <i className="fi fi-rr-clock-five py-2 cursor-pointer" />
                    <p className="text-gray-700 text-lg p-1 cursor-pointer">
                        9 days remaining
                    </p>
                    <p className="text-gray-700 text-lg bg-gray-200 p-1 rounded cursor-pointer">
                        Complate Tasks
                    </p>
                    <i className="fi fi-rr-share text-lg py-2 cursor-pointer" />
                    <i className="fi fi-bs-menu-dots text-lg py-2 cursor-pointer" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 py-4">
                <div className="flex flex-col shadow-md bg-gray-200 rounded cursor-pointer p-2">
                    <div className="flex justify-between">
                        <p className="text-left font-bold">TO DO</p>
                        <i className="fi fi-sr-add text-2xl text-blue-600" />
                    </div>
                    <div className="grid grid-row-1 gap-2 w-full">
                        <div className="bg-white p-2 rounded-sm w-full h-24">
                            <p className="p-1">Accessibility Audit</p>
                            <div className="flex items-center gap-3 px-2">
                                <input
                                    defaultChecked={true}
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                                />
                                <i className="fi fi-br-arrow-small-up text-red-600 font-bold text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col shadow-md bg-gray-200 rounded cursor-pointer p-2">
                    <p className="float-left font-bold">IN PROGRESS</p>
                    <div className="bg-white p-1 rounded-sm w-full h-24">
                        <p className="p-1">Brand Color Palette Testing </p>
                        <div className="flex items-center gap-3 px-2">
                            <input
                                defaultChecked={true}
                                type="checkbox"
                                className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                            />
                            <i className="fi fi-br-arrow-small-up text-green-600 font-bold text-xl" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col shadow-md bg-gray-200 rounded cursor-pointer p-2">
                    <p className="float-left font-bold">DONE</p>
                    <div className="grid grid-row-1 gap-2 w-full">
                        <div className="bg-white p-1 rounded-sm w-full h-24">
                            <p className="p-1">Ux Research</p>
                            <div className="flex items-center gap-3 px-2">
                                <input
                                    defaultChecked={true}
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                                />
                                <i className="fi fi-br-arrow-small-up text-green-600 font-bold text-xl" />
                            </div>
                        </div>
                        <div className={`bg-white p-1 rounded-sm w-full h-24`}>
                            <p className="p-1">Analytics and Testing</p>
                            <div className="flex items-center gap-3 px-2">
                                <input
                                    defaultChecked={true}
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                                />
                                <i className="fi fi-br-arrow-small-up text-green-600 font-bold text-xl" />
                            </div>
                        </div>
                        <div className="bg-white p-1 rounded-sm w-full h-24">
                            <p className="p-1">Stakeholder Input</p>
                            <div className="flex items-center gap-3 px-2">
                                <input
                                    defaultChecked={true}
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded"
                                />
                                <i className="fi fi-br-arrow-small-up text-green-600 font-bold text-xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tasks;
