import Cookies from "js-cookie";

const SetCookies = (cookieName, token) => {
    Cookies.set(cookieName, token, {
        expires: 1,
        secure: true,
        sameSite: "Strict",
        path: "/",
    });
};

export default SetCookies;
