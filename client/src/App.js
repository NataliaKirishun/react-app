import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import MainScreen from './Screens/MainScreen/MainScreen';
import ResultsScreen from "./Screens/ResultsScreen/ResultsScreen";
import FilmScreen from "./Screens/FilmScreen/FilmScreen";
import NotFoundScreen from "./Screens/NotFoundScreen/NotFoundScreen";

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <ErrorBoundary>
          <Switch>
            <Route exact path="/" component = { MainScreen } />
            <Route path="/search" component={ ResultsScreen } />
            <Route path="/film/:id" component={ FilmScreen } />
            <Route path="*" component={ NotFoundScreen } />
          </Switch>
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

