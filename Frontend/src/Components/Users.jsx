import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import GetCookies from "./Cookies/GetCookies";
import { useSelector } from "react-redux";

const HomePage = () => {
    const myState = useSelector((state) => state.sreachValue);
    const navigate = useNavigate();
    const [ent, setEnt] = useState(0);
    const [data, SetData] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [endpage, setEndpage] = useState(1);

    useEffect(() => {
        axios
            .post(
                `http://127.0.0.1:8090/api/v1/users/getUsers?page=${page}&limit=${limit}&search=${myState}`,
                {
                    Cookies: {
                        UserToken: GetCookies("UserToken"),
                    },
                }
            )
            .then((res) => {
                setEnt(res.data.count);
                SetData(res.data.rows);
            })
            .catch((err) => {
                if (err) {
                    navigate("/");
                }
            });
        setEndpage(Math.ceil(ent / limit));
    }, [page, limit, myState, navigate, ent]);
    return (
        <div className="p-4 shadow-md">
            <Table responsive striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => {
                        return (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                                <td>{item.email}</td>
                                <td>{item.role.user_role}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <div className="flex p-4 justify-between">
                <p className="flex font-bold">
                    Showing 1 To {limit <= ent ? limit : ent} of {ent} Entries
                </p>
                <div className="grid grid-cols-3 gap-4 rounded-2xl font-bold">
                    <select
                        className="border-2 text-black text-sm rounded-lg block w-full p-2"
                        onChange={(e) => setLimit(e.target.value)}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                    </select>
                    <button
                        className="border-2 p-2 rounded"
                        onClick={() => {
                            setPage(page - 1);
                        }}
                    >
                        Previous
                    </button>
                    <button
                        className="border-2 p-2 rounded"
                        disabled={page === endpage}
                        onClick={() => {
                            setPage(page + 1);
                        }}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
