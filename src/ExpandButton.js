import React, {useState, useEffect} from "react";
import "./App.css";

function ExpandButton(props) {    
    const {textStatus, action} = props;
    return (
        <>
        <button onClick={props.action}>View Explanation</button>
        </>
    )
}

export default ExpandButton;