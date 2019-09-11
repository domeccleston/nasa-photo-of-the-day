import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function DailyPhoto(props) {    
    const {url} = props;
    return (
        <>
        <img src={url} className="daily-photo" alt="NASA daily pic"></img>
        </>
    )
}

export default DailyPhoto;