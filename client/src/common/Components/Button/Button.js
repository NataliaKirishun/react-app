import styled, { css } from 'styled-components';
import Theme from '../../Theme/Theme';

const Button = styled.button`
    font-size: 16px;
    margin-left: auto;    
    border: 0;
    padding: 6px 12px;    
    text-transform: uppercase;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    
    ${props => props.red && css`
        background-color: ${Theme.colors.red};
        color: ${Theme.colors.white};
    `}
    
    ${props => props.white && css`
        background-color: ${Theme.colors.white};
        color: ${Theme.colors.red};        
    `}
`;

export default Button;
