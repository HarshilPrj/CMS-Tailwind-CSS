import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="flex justify-center w-full mx-auto max-w-screen-xl p-4 absolute bottom-0">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023{"   "}
                        <a
                            href="https://flowbite.com/"
                            className="hover:underline"
                        >
                            Flowbite™
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
