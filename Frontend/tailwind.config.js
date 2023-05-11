/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#000066",
                "light-purple": "rgba(255,255,255,0.17)",
            },
            backgroundImage: {
                image: "url('../public/img.jpg')",
                image2: "url('../public/bg-image2.png')",
                bgLogin: "url('../public/login.svg')",
            },
        },
    },
    plugins: [],
};
