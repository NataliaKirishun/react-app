import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import EmptyResults from '../../components/EmptyResults/EmptyResults';
import Films from '../../components/Films/Films';
import ErrorPage from '../../common/Components/ErrorPage/ErrorPage';

const Main = () => (
  <MainWrapper>
    <Switch>
      <Route exact path="/" render={() => <EmptyResults text="Please, select your desired film.. " />} />
      <Route path="/movies" component={Films} />
      <Route path="/film/:id" component={Films} />
      <Route render={() => <ErrorPage />} />
    </Switch>
  </MainWrapper>
);

export default Main;

const MainWrapper = styled.main`
    flex: 1 0 auto;

`;
