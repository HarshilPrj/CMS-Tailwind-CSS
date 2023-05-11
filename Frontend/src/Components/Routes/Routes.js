import React from "react";
import { Route, Routes } from "react-router-dom";
import ChatPage from "../ChatPage";
import Users from "../Users";
import Login from "../Login";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" Component={Login} exact />
                <Route path="/customers" Component={Users} exact />
                <Routes path="/teams" Component={ChatPage} exact />
            </Routes>
        </>
    );
};

export default Routers;
