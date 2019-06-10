import React, { Fragment } from 'react';
import Header from '../../container/Header/Header';
import EmptyResults from '../../components/EmptyResults/EmptyResults';

const MainScreen = () => (
  <Fragment>
    <Header />
    <EmptyResults text="Please, select your desired film.. " />
  </Fragment>
);

export default MainScreen;
