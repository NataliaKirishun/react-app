import React from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../Theme/Theme';

const Loading = () => (
  <LoadingWrapper>
    <LoadingText> Loading ...</LoadingText>
  </LoadingWrapper>
);

const LoadingWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const LoadingText = styled.h2`
  color: ${Theme.colors.red};
  font-size: 40px;
`;

export default Loading;