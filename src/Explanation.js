import React from "react";
import "./App.css";
import styled from 'styled-components';

function Explanation(props) {
    const displayStatus = props.displayStatus;
    const StyledParagraph = styled.p`
        font-size: 1.5em;
        line-height: 150%;
        position: absolute;
        top: 600px;
    `;
    return (
        <>
        <StyledParagraph className="explanation">{displayStatus === true ? props.data : null}</StyledParagraph>
        </>
    )
}

export default Explanation;