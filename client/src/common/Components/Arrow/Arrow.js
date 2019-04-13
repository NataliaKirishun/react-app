import React from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../Theme/Theme';

const Arrow = ( { ...props } ) => (
    <ArrowWrapper {...props} >
        <i className="fas fa-arrow-up"></i>
    </ArrowWrapper>
);

const ArrowWrapper = styled.span`

    .fas {

        margin-left: 20px;

        ${props => props.down && css`
            transform: rotate(180deg);
        `}

         ${props => props.left && css`
            transform: rotate(-90deg);
            margin-left: 0;
         `}

         ${props => props.right && css`
            transform: rotate(90deg);
         `}

     }
`;

export default Arrow;