import React from "react";
import "./App.css";
import styled from "styled-components";

function ExpandButton(props) {  
    const StyledButton = styled.button` 
        padding: 1em;
        font-family: Sans-Serif;
        font-size; 1rem;
        background: whitesmoke;
        border: none;
        outline: none;
        --box-shadow-color: #2a2829;
        box-shadow: 2px 5px var(--box-shadow-color);
        font-weight: bold;
        border-radius: 2px;

        :hover {
            outline: none;
            filter: brightness(90%);
        }

        :active {
            transform: translateY(1px);
            box-shadow: none;
        }

        ${props => (props.children === 'View past date' ? `margin-left: 1em;` : null)};
        ${props => (props.children === 'View Explanation' ? null : null)};

    `;
    const {action, textValue, link} = props;
    return (
        <><a href={link}>
        <StyledButton onClick={action}>{textValue}</StyledButton>
        </a>
        </>
    )
}

export default ExpandButton;