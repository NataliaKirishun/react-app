import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme/Theme';

const ErrorHeader = () => (
  <ErrorWrapper>
    <HeaderText> There is no such page ...</HeaderText>
  </ErrorWrapper>
);

const ErrorWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const HeaderText = styled.h2`
  color: ${Theme.colors.red};
  font-size: 40px;
`;

export default ErrorHeader;
