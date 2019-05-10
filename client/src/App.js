import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Loading from './common/Components/Loading/Loading';
import DynamicImport from "./code_splitting/DynamicImport/DynamicImport";

const MainScreen = (props) => (
  <DynamicImport load={() => import('./Screens/MainScreen/MainScreen')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const ResultsScreen = (props) => (
  <DynamicImport load={() => import('./Screens/ResultsScreen/ResultsScreen')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const FilmScreen = (props) => (
  <DynamicImport load={() => import('./Screens/FilmScreen/FilmScreen')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

const NotFoundScreen = (props) => (
  <DynamicImport load={() => import('./Screens/NotFoundScreen/NotFoundScreen')}>
    {(Component) => Component === null
      ? <Loading />
      : <Component {...props} />}
  </DynamicImport>
);

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

