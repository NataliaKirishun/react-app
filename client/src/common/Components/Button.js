import React from "react"
import styled from "styled-components"
import Theme from "../Theme/Theme"

const Button = styled.button`
    font-size: 16px;
    margin-left: auto;
    background-color: ${Theme.colors.red};
    border: 0;
    padding: 6px 12px;
    color: ${Theme.colors.white};
    text-transform: uppercase;
    border-radius: 4px;
    outline: none;
`;

export default Button;