import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyResults from '../../components/EmptyResults/EmptyResults';
import Films from '../../components/Films/Films';
import Pagination from '../../common/Components/Pagination/Pagination';
import {
  fetchMovie, changeOffset, fetchSameGenreMovies, fetchMovies, changePage, changeMoviesPerPage,
} from '../../actions';

class Main extends Component {
changeMoviesPerPageHandler = (id, moviesPerPage) => {
  const {
    changeMoviesPerPage, changeOffset, fetchMovies, activeFilm, fetchSameGenreMovies, searchBy, sortBy, sortOrder, term, offset,
  } = this.props;
  changeMoviesPerPage(moviesPerPage);
  changeOffset();
  if (activeFilm) {
    fetchSameGenreMovies(activeFilm.genres[0]);
  } else {
    fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
  }
}

    changePageHandler = (id, currentPage) => {
      const {
        changePage, changeOffset, fetchMovies, activeFilm, fetchSameGenreMovies, searchBy, sortBy, sortOrder, term, moviesPerPage,
      } = this.props;
      changePage(currentPage);
      changeOffset();
      const offset = (currentPage - 1) * moviesPerPage;
      if (activeFilm) {
        fetchSameGenreMovies(activeFilm.genres[0]);
      } else {
        fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
      }
    }

    render() {
      const {
        movies, isFetched, total, sameGenresFilms, currentPage, moviesPerPage, fetchMovie,
      } = this.props;
      const warningText = isFetched ? 'No films found for this request...' : 'Please, select your desired film.. ';
      const arrayOfPages = Array(Math.ceil(total / moviesPerPage)).fill(1).map((v, i) => i + 1);
      const arrayOfPerPages = [12, 24, 48, 96];
      const filmsToShow = (sameGenresFilms && sameGenresFilms.length) ? sameGenresFilms : movies;
      return (
        <MainWrapper>
          {isFetched && movies && movies.length
            ? (
              <Fragment>
                <Pagination
                  arrayOfPages={arrayOfPages}
                  arrayOfPerPages={arrayOfPerPages}
                  currentPage={currentPage}
                  moviesPerPage={moviesPerPage}
                  changePageHandler={this.changePageHandler}
                  changePerPageHandler={this.changeMoviesPerPageHandler}
                />
                <Films
                  films={filmsToShow}
                  albumClickHandler={fetchMovie} />
                <Pagination
                  arrayOfPages={arrayOfPages}
                  arrayOfPerPages={arrayOfPerPages}
                  currentPage={currentPage}
                  moviesPerPage={moviesPerPage}
                  changePageHandler={this.changePageHandler}
                  changePerPageHandler={this.changeMoviesPerPageHandler}
                />
              </Fragment>
            )
            : <EmptyResults text={warningText} />
          }
        </MainWrapper>
      );
    }
}

export default connect(({ movies, movie, search }) => ({
  movies: movies.movies,
  isFetched: movies.isFetched,
  total: movies.total,
  activeFilm: movie.activeFilm,
  sameGenresFilms: movie.sameGenresFilms,
  currentPage: search.currentPage,
  moviesPerPage: search.moviesPerPage,
  searchBy: search.searchBy,
  sortBy: search.sortBy,
  sortOrder: search.sortOrder,
  term: search.term,
  offset: search.offset,
}), {
  changePage, fetchMovie, changeOffset, fetchSameGenreMovies, fetchMovies, changeMoviesPerPage,
})(Main);

Main.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  isFetched: PropTypes.bool,
  total: PropTypes.number,
  activeFilm: PropTypes.shape({}),
  sameGenresFilms: PropTypes.arrayOf(PropTypes.object),
  currentPage: PropTypes.string,
  moviesPerPage: PropTypes.string,
  fetchMovie: PropTypes.func,
  changeMoviesPerPage: PropTypes.func,
  changeOffset: PropTypes.func,
  fetchSameGenreMovies: PropTypes.func,
  fetchMovies: PropTypes.func,
  changePage: PropTypes.func,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  sortOrder: PropTypes.string,
  term: PropTypes.string,
  offset: PropTypes.number,
};

const MainWrapper = styled.main`
    flex: 1 0 auto;

`;
