import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationRoutes = ({ authStatus }) => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div className={`${authStatus ? "ml-[69rem]" : "ml-[78rem]"}`}>
            <p
                className="cursor-pointer"
                onClick={() => navigate("/dashboard")}
            >{`Home /${
                location.pathname.charAt(1).toUpperCase() +
                location.pathname.slice(2).toLowerCase()
            }`}</p>
        </div>
    );
};

export default NavigationRoutes;
