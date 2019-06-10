import React, { Fragment } from 'react';
import Detail from '../../components/Detail/Detail';
import GenreInfo from '../../components/GenreInfo/GenreInfo';
import Main from '../../container/Main/Main';

const FilmScreen = () => (
  <Fragment>
    <Detail />
    <GenreInfo />
    <Main />
  </Fragment>
);

export default FilmScreen;
