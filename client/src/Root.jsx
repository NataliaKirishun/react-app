import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import styled from 'styled-components';
import Theme from './common/Theme/Theme';
import { hot } from 'react-hot-loader';


const Root = () => (
  <div>
    <Title>Server Side Renderig</Title>
    <div>Hello!</div>
  </div>
);

const Title = styled.h1` 
    width: 100%;
    background-color: ${Theme.colors.grey};    
`;

export default hot(module)(Root);

