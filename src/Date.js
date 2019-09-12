import React from "react";
import "./App.css";
import styled from "styled-components";

function Date(props) {  

    const StyledInput = styled.input`
        padding: 0.3em;
        font-family: Sans-Serif;
        font-size: 1rem;
        background: whitesmoke;
        border: none;
        border-radius: 2px;
    `;

    return (
        <>
         <StyledInput type="date" onClick={props.action}></StyledInput>
        </>
    )
}

export default Date;