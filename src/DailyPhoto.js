import React from "react";
import "./App.css";
import styled from "styled-components";

const StyledImg = styled.img`
    height: 200vh;
    width: 100vw;
`;

function DailyPhoto(props) {    
    const {url} = props;
    return (
        <>
        <StyledImg src={url} className="daily-photo" alt="NASA daily pic"></StyledImg>
        </>
    )
}

export default DailyPhoto;