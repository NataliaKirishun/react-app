import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Film from '../../components/Film/Film';
import Pagination from '../../common/Components/Pagination/Pagination';
import {
  fetchMovies, changePage, changeOffset, changeMoviesPerPage,
} from '../../store';
import { getUrl } from '../../constants';

class Main extends Component {
  componentWillMount() {
    const { location } = this.props;
    if (location.search) {
      this.urlParse();
    }
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location.search !== prevProps.location.search) {
      this.urlParse();
    }
  }

  urlParse = () => {
    const {
      fetchMovies, searchBy, sortBy, sortOrder, moviesPerPage, offset, term,
    } = this.props;
    const url = getUrl(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    fetchMovies(url);
  }

  changePageHandler = (id, currentPage) => {
    const {
      changePage, changeOffset, fetchMovies, searchBy, sortBy, sortOrder, term, moviesPerPage,
    } = this.props;
    changePage(+currentPage);
    changeOffset();
    const offset = (currentPage - 1) * moviesPerPage;
    const url = getUrl(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    fetchMovies(url);
  };

  changeMoviesPerPageHandler = (id, moviesPerPage) => {
    const {
      changeMoviesPerPage, changeOffset, fetchMovies, searchBy, sortBy, sortOrder, term, offset,
    } = this.props;
    changeMoviesPerPage(+moviesPerPage);
    changeOffset();
    const url = getUrl(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    fetchMovies(url);
  };

  render() {
    const {
      currentPage, moviesPerPage, movies, total, loading, mode,
    } = this.props;
    const arrayOfPages = Array(Math.ceil(total / moviesPerPage)).fill(1).map((v, i) => i + 1);
    const arrayOfPerPages = [12, 24, 48, 96];
    if (loading) {
      return (
        <EmptyWrapper>Loading...</EmptyWrapper>
      );
    }
    if (!loading && !movies.size) {
      return (
        <EmptyWrapper>There are no such films ...</EmptyWrapper>
      );
    }
    return (
      <FilmsBackground>
        {mode === 'movies'
          ? (
            <Pagination
              arrayOfPages={arrayOfPages}
              arrayOfPerPages={arrayOfPerPages}
              currentPage={currentPage}
              moviesPerPage={moviesPerPage}
              changePageHandler={this.changePageHandler}
              changePerPageHandler={this.changeMoviesPerPageHandler}
          />
          )
          : null
        }
        <FilmsWrapper>
          {movies.map((film) => <Film info={film} key={film.id} />)}
        </FilmsWrapper>
      </FilmsBackground>
    );
  }
}

export default withRouter(connect(({ search, movies, movie }) => ({
  activeFilm: movie.activeFilm,
  sameGenresFilms: movie.sameGenresFilms,
  currentPage: search.currentPage,
  moviesPerPage: search.moviesPerPage,
  searchBy: search.searchBy,
  sortBy: search.sortBy,
  sortOrder: search.sortOrder,
  term: search.term,
  offset: search.offset,
  movies: movies.movies,
  total: movies.total,
  loading: movies.loading,
  mode: movies.mode,
}), {
  fetchMovies, changePage, changeOffset, changeMoviesPerPage,
})(Main));

Main.propTypes = {
  sameGenresFilms: PropTypes.shape({}),
  total: PropTypes.number,
  offset: PropTypes.number,
  movies: PropTypes.array,
  currentPage: PropTypes.number,
  changeMoviesPerPage: PropTypes.func,
  moviesPerPage: PropTypes.number,
  term: PropTypes.string,
  sortOrder: PropTypes.string,
  searchBy: PropTypes.string,
  sortBy: PropTypes.string,
  changeOffset: PropTypes.func,
  changePage: PropTypes.func,
  fetchMovies: PropTypes.func,
  activeFilm: PropTypes.shape({}),
  match: PropTypes.shape({}),
  location: { search: PropTypes.object },
  loading: PropTypes.bool,
  mode: PropTypes.string,
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
    flex: auto;
`;
