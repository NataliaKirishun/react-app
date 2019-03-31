import React from 'react';
import styled from 'styled-components';
import Theme from '../Theme/Theme';

const Logo = () => <LogoText>netflixroulette</LogoText>;

export default Logo;

const LogoText = styled.a`
    color: ${Theme.colors.red};
    font-size: 16px;
`;
