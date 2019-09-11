import React, {useState, useEffect} from "react";
import "./App.css";

function Explanation(props) {
    const displayStatus = props.displayStatus;
    return (
        <>
        <p className="explanation">{displayStatus === true ? props.data : null}</p>
        </>
    )
}

export default Explanation;