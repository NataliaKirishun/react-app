import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cockpit from '../../components/Cockpit/Cockpit';
import Search from '../../components/Search/Search';
import {
  toggleSearchBy, searchButtonHandler, toggleSortBy, fetchMovies, saveTerm, toggleSortOrder,
} from '../../store';

class Header extends Component {
  state={
    term: '',
  };

  inputChangeHandler = ({ target: { value } }) => {
    this.setState({
      term: value,
    });
  }

  toggleSortDirectionHandler = () => {
    const {
      sortOrder, toggleSortOrder, fetchMovies, term, searchBy, sortBy, offset, moviesPerPage,
    } = this.props;
    const sorted = sortOrder === 'asc' ? 'desc' : 'asc';
    toggleSortOrder(sorted);
    if (term) {
      fetchMovies(searchBy, sortBy, sorted, term, offset, moviesPerPage);
    }
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    const { term } = this.state;
    const {
      saveTerm, fetchMovies, searchBy, sortBy, sortOrder, offset, moviesPerPage, history,
    } = this.props;
    saveTerm(term);
    history.push(`/search?searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${term}&offset=${offset}&limit=${moviesPerPage}`);
    fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
  }

  toggleSortByHandler = (sortBy) => {
    const {
      toggleSortBy, fetchMovies, searchBy, sortOrder, term, offset, moviesPerPage,
    } = this.props;
    toggleSortBy(sortBy);
    if (term) {
      console.log(fetchMovies);
      fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    }
  }

  render() {
    const {
      // activeFilm,
      total,
      searchBy,
      sortBy,
      sortOrder,
      toggleSearchBy,
    } = this.props;
    return (
      <Fragment>
        <HeaderWrapper>
          <Search searchBy={searchBy} inputChangeHandler={this.inputChangeHandler} toggleSearchBy={toggleSearchBy} formSubmitHandler={this.formSubmitHandler} />
          <Cockpit sortBy={sortBy} sortOrder={sortOrder} toggleSortBy={this.toggleSortByHandler} toggleSortDirection={this.toggleSortDirectionHandler} filmsCount={total} />
        </HeaderWrapper>
      </Fragment>
    );
  }
}

export default withRouter(connect(({ movies, movie, search }) => ({
  total: movies.total,
  activeFilm: movie.activeFilm,
  offset: search.offset,
  moviesPerPage: search.moviesPerPage,
  searchBy: search.searchBy,
  sortBy: search.sortBy,
  sortOrder: search.sortOrder,
  term: search.term,
}),
{
  toggleSearchBy, searchButtonHandler, toggleSortBy, fetchMovies, saveTerm, toggleSortOrder,
})(Header));

Header.propTypes = {
  sortOrder: PropTypes.string,
  total: PropTypes.number,
  sortBy: PropTypes.string,
  searchBy: PropTypes.string,
  toggleSearchBy: PropTypes.func,
  toggleSortBy: PropTypes.func,
  toggleSortOrder: PropTypes.func,
  fetchMovies: PropTypes.func,
  saveTerm: PropTypes.func,
  activeFilm: PropTypes.shape(),
  term: PropTypes.string,
  offset: PropTypes.number,
  moviesPerPage: PropTypes.number,
  history: PropTypes.shape(),
};

const HeaderWrapper = styled.header`
  flex: 0 0 auto; 
`;
