import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertMSg = (props) => {
    return (
        <div style={{ height: "6rem" }}>
            <Alert show={props.show} variant={props.variant}>
                <p>{props.err}</p>
            </Alert>
        </div>
    );
};

export default AlertMSg;
