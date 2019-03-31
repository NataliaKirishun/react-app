import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import Theme from '../Theme/Theme';

const RadioButton = ({
  inputName,
  inputValue,
  inputId, filtered,
  handlerChange,
  ...props
}) => (
  <Fragment>
    <RadioInput
      type="radio"
      name={inputName}
      value={inputValue}
      id={inputId}
      onChange={(evt) => handlerChange(evt)} />
    <RadioLabel
      htmlFor={inputId}
      active={filtered === inputValue}
      {...props}>
      {inputValue}
    </RadioLabel>
  </Fragment>
);

export default RadioButton;

const RadioInput = styled.input`
    display: none;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  margin-left: 20px;    
  border-radius: 4px;    
   
   ${props => props.colored && css`
        background-color: ${Theme.colors.medium_grey};
        color:  ${Theme.colors.white};   
        text-transform: uppercase;   
        padding: 6px 12px;         
   `}   
   
    ${props => props.colored && props.active && css`
        background-color: ${Theme.colors.red}
     `} 
   
    ${props => props.transparent && css`
        background-color: transparent;         
   `}
   
    ${props => props.transparent && props.active && css`
        color: ${Theme.colors.red}
    `} 
`;
