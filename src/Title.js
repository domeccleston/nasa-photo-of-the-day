import React, {useState, useEffect} from "react";
import "./App.css";

function Title(props) {    
    const {text} = props;
    return (
        <>
        <h1 className="info-text">{text}</h1>
        </>
    )
}

export default Title;