import React from 'react';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Logo from '../../common/Components/Logo/Logo';

const Footer = () => (
  <FooterBackground>
    <FooterWrapper>
      <Logo />
    </FooterWrapper>
  </FooterBackground>
);

export default Footer;

const FooterBackground = styled.footer`
    flex: 0 0 auto;    
    width: 100%;
    background-color: ${Theme.colors.lighter_grey};
`;

const FooterWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
`;
