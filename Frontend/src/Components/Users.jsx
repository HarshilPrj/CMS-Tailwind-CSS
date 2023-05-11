import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

const HomePage = () => {
    const [data, SetData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        axios
            .get(
                `http://127.0.0.1:8090/api/v1/users/getUsers?page=${page}&limit=5&search=`
                // {
                //     headers: {
                //         Authorization: `Bearer ${sessionStorage.getItem(
                //             "userToken"
                //         )}`,
                //     },
                // }
            )
            .then((res) => {
                SetData(res.data);
            })
            .catch(() => {});
    }, [page]);
    return (
        <div>
            <Table responsive striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>No</th>
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
            <div className="Bdiv">
                <button
                    className="Lbtn"
                    onClick={() => {
                        setPage(page - 1);
                    }}
                >
                    Pre
                </button>
                <button
                    className="Lbtn"
                    onClick={() => {
                        data.length === 5 && setPage(page + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default HomePage;
