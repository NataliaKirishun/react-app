import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Film from '../Film/Film';
import Pagination from '../../common/Components/Pagination/Pagination';
import {
  fetchMovies, changePage, changeOffset, fetchSameGenreMovies, changeMoviesPerPage,
} from '../../actions';

class Films extends Component {
  componentDidMount() {
    const { location, match, activeFilm } = this.props;
    if (location.search) {
      this.urlParse();
    }
  }

  componentDidUpdate(prevProps) {
    const { location, match, activeFilm } = this.props;
    if (location.search !== prevProps.location.search) {
      this.urlParse();
    }
  }

    urlParse = () => {
      const { fetchMovies, location } = this.props;
      const urlParams = new URLSearchParams(location.search);
      const searchBy = urlParams.get('searchBy');
      const sortBy = urlParams.get('sortBy');
      const sortOrder = urlParams.get('sortOrder');
      const search = urlParams.get('search');
      const offset = urlParams.get('offset');
      const limit = urlParams.get('limit');
      fetchMovies(searchBy, sortBy, sortOrder, search, offset, limit);
    }

    changePageHandler = (id, currentPage) => {
      const {
        changePage, changeOffset, fetchMovies, activeFilm, fetchSameGenreMovies, searchBy, sortBy, sortOrder, term, moviesPerPage, match,
      } = this.props;
      changePage(currentPage);
      changeOffset();
      const offset = (currentPage - 1) * moviesPerPage;
      if (match.params.id) {
        fetchSameGenreMovies(activeFilm.genres[0]);
      } else {
        fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
      }
    }

    changeMoviesPerPageHandler = (id, moviesPerPage) => {
      const {
        changeMoviesPerPage, changeOffset, fetchMovies, activeFilm, fetchSameGenreMovies, searchBy, sortBy, sortOrder, term, offset, match,
      } = this.props;
      changeMoviesPerPage(moviesPerPage);
      changeOffset();
      if (match.params.id) {
        fetchSameGenreMovies(activeFilm.genres[0]);
      } else {
        fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
      }
    }

    render() {
      const {
        currentPage, moviesPerPage, movies, total, sameGenresFilms, match,
      } = this.props;
      const arrayOfPages = Array(Math.ceil(total / moviesPerPage)).fill(1).map((v, i) => i + 1);
      const arrayOfPerPages = [12, 24, 48, 96];
      const films = match.params.id ? sameGenresFilms : movies;
      if (!films || !films.length) {
        return (
          <EmptyWrapper>There are no such films...</EmptyWrapper>
        );
      }
      return (
        <FilmsBackground>
          <Pagination
            arrayOfPages={arrayOfPages}
            arrayOfPerPages={arrayOfPerPages}
            currentPage={currentPage}
            moviesPerPage={moviesPerPage}
            changePageHandler={this.changePageHandler}
            changePerPageHandler={this.changeMoviesPerPageHandler}
          />
          <FilmsWrapper>
            {films.map((film) => <Film info={film} key={film.id} />)}
          </FilmsWrapper>
          <Pagination
            arrayOfPages={arrayOfPages}
            arrayOfPerPages={arrayOfPerPages}
            currentPage={currentPage}
            moviesPerPage={moviesPerPage}
            changePageHandler={this.changePageHandler}
            changePerPageHandler={this.changeMoviesPerPageHandler}
          />
        </FilmsBackground>
      );
    }
}

export default connect(({ search, movies, movie }) => ({
  activeFilm: movie.activeFilm,
  sameGenresFilms: movie.sameGenresFilms,
  currentPage: search.currentPage,
  moviesPerPage: search.moviesPerPage,
  searchBy: search.searchBy,
  sortBy: search.sortBy,
  sortOrder: search.sortOrder,
  term: search.term,
  movies: movies.movies,
  total: movies.total,
}), {
  fetchMovies, changePage, fetchSameGenreMovies, changeOffset, changeMoviesPerPage,
})(Films);

Films.propTypes = {
  sameGenresFilms: PropTypes.shape({}),
  total: PropTypes.number,
  offset: PropTypes.number,
  movies: PropTypes.arrayOf(PropTypes.shape({})),
  currentPage: PropTypes.string,
  changeMoviesPerPage: PropTypes.func,
  moviesPerPage: PropTypes.string,
  term: PropTypes.string,
  sortOrder: PropTypes.string,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  fetchSameGenreMovies: PropTypes.func,
  changeOffset: PropTypes.func,
  changePage: PropTypes.func,
  fetchMovies: PropTypes.func,
  activeFilm: PropTypes.shape({}),
  match: PropTypes.shape({}),
  location: PropTypes.shape({}),
};

const FilmsBackground = styled.div`
    flex: 1 0 auto;
    width: 100%;    
    background-color: ${Theme.colors.white};  
    padding: 30px 0; 
`;

const FilmsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;    
`;

const EmptyWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: ${Theme.colors.red};
    font-size: 24px;
`;
