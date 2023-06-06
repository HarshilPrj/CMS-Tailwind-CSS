import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Users from "../Users";
import Login from "../Login";
import AuthContext from "../AuthContext";
import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "../Dashboard";
import Teams from "../Teams";
import Messages from "../Messages";
import Orders from "../Orders";
import AddUser from "../AddUser";
import Tasks from "../Tasks";
import Settings from "../Settings";
import NavigationRoutes from "./NavigationRoutes";
import Applications from "../Applications";

const LayoutView = () => {
    const myState = useSelector((state) => state.checkLogin);
    const [authStatus, setAuthStatus] = useState(false);

    let login = () => {
        setAuthStatus(authStatus === false ? true : false);
    };

    return (
        <div>
            <AuthContext.Provider value={{ status: authStatus, login: login }}>
                {myState !== null ? (
                    <div className="flex">
                        <SideBar />
                    </div>
                ) : (
                    ""
                )}

                <div
                    className={`right-10 ${
                        authStatus ? "w-100% pl-60" : "w-100% pl-20 pt-5"
                    } p-6`}
                    id="rootDiv"
                >
                    {myState !== null ? <Header authStatus={authStatus} /> : ""}
                    {myState !== null ? (
                        <NavigationRoutes authStatus={authStatus} />
                    ) : (
                        ""
                    )}

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/customers" element={<Users />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/massages" element={<Messages />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/signUp" element={<AddUser />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route
                            path="/applications"
                            element={<Applications />}
                        />
                    </Routes>
                </div>
            </AuthContext.Provider>
        </div>
    );
};

export default LayoutView;
