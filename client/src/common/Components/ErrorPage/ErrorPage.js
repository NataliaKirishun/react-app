import React from 'react';
import styled from 'styled-components';
import Theme from '../../Theme/Theme';

const ErrorPage = () => (
  <ErrorWrapper>
    <ErrorText>404 page</ErrorText>
  </ErrorWrapper>
);

const ErrorWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ErrorText = styled.span`
  color: ${Theme.colors.red};
  font-size: 40px;
`;

export default ErrorPage;
