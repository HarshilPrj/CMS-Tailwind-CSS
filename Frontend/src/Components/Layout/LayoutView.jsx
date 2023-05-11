import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Users from "../Users";
import Login from "../Login";
import AuthContext from "../AuthContext";
import SideBar from "./SideBar";
import Header from "./Header";
import Dashboard from "../Dashboard";
import Teams from "../Teams";
import Messages from "../Messages";
import { useSelector } from "react-redux";
import Orders from "../Orders";

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

                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/customers" element={<Users />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/massages" element={<Messages />} />
                        <Route path="/orders" element={<Orders />} />
                    </Routes>
                </div>
            </AuthContext.Provider>
        </div>
    );
};

export default LayoutView;
