import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ErrorBoundary>
          <Header />
          <Main />
          <Footer />
        </ErrorBoundary>
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
