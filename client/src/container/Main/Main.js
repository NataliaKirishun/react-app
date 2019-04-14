import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyResults from '../../components/EmptyResults/EmptyResults';
import Films from '../../components/Films/Films';
import Pagination from '../../common/Components/Pagination/Pagination';
import {changePageHandler, changeMoviesPerPageHandler, fetchMovie} from '../../actions';

class Main extends Component {

  render() {
    const { movies, isFetched, total, currentPage, moviesPerPage, changePageHandler,changeMoviesPerPageHandler, fetchMovie } = this.props;
    const warningText = isFetched ? 'No films found for this request...' : 'Please, select your desired film.. ';
    const arrayOfPages = Array(Math.ceil(total/moviesPerPage)).fill(1).map((v, i) => i + 1);
    const arrayOfPerPages = [12, 24, 48, 96];
    console.log(moviesPerPage);
    return (
      <MainWrapper>
        {isFetched && movies.length
          ? (
          <Fragment>
            <Pagination
              arrayOfPages={arrayOfPages}
              arrayOfPerPages = {arrayOfPerPages}
              currentPage={currentPage}
              moviesPerPage={moviesPerPage}
              changePageHandler= {changePageHandler}
              changePerPageHandler={changeMoviesPerPageHandler}
            />
            <Films
              films={movies}
              albumClickHandler={fetchMovie} />
            <Pagination
              arrayOfPages={arrayOfPages}
              arrayOfPerPages = {arrayOfPerPages}
              currentPage={currentPage}
              moviesPerPage={moviesPerPage}
              changePageHandler = {changePageHandler}
              changePerPageHandler={changeMoviesPerPageHandler}
            />
              </Fragment>
          )
          : <EmptyResults text={warningText} />
        }
      </MainWrapper>
    );
  }
}

export default connect(({movies, search})=>({
    movies: movies.movies,
    isFetched: movies.isFetched,
    total: movies.total,
    currentPage: search.currentPage,
    moviesPerPage: search.moviesPerPage,
}), { changePageHandler, changeMoviesPerPageHandler, fetchMovie })(Main);

Main.propTypes = {
  searched: PropTypes.bool,
  filteredFilms: PropTypes.arrayOf(PropTypes.object),
  albumClickHandler: PropTypes.func,
};

const MainWrapper = styled.main`
    flex: 1 0 auto;

`;
