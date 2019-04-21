import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cockpit from '../../components/Cockpit/Cockpit';
import GenreInfo from '../../components/GenreInfo/GenreInfo';
import Detail from '../../components/Detail/Detail';
import Search from '../../components/Search/Search';
import ErrorHeader from '../../common/Components/ErrorHeader/ErrorHeader';
import {
  toggleSearchBy, searchButtonHandler, toggleSortBy, fetchMovies, saveTerm, toggleSortOrder,
} from '../../actions';

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
      saveTerm, fetchMovies, searchBy, sortBy, sortOrder, offset, moviesPerPage,
    } = this.props;
    saveTerm(term);
    this.props.history.push(`/movies?searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=${sortOrder}&search=${term}&offset=${offset}&limit=${moviesPerPage}`);
    fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    this.setState({
      term: '',
    });
  }

  toggleSortByHandler = (sortBy) => {
    const {
      toggleSortBy, fetchMovies, searchBy, sortOrder, term, offset, moviesPerPage,
    } = this.props;
    toggleSortBy(sortBy);
    if (term) {
      fetchMovies(searchBy, sortBy, sortOrder, term, offset, moviesPerPage);
    }
  }

  render() {
    const {
      activeFilm,
      total,
      searchBy,
      sortBy,
      sortOrder,
      toggleSearchBy,
      searchButtonHandler,
    } = this.props;
    return (
      <Fragment>
        <HeaderWrapper>
        <Switch>
        <Route
          exact
          path="/"
          render={() =>
            <Search
              searchBy={searchBy}
              inputChangeHandler={this.inputChangeHandler}
              toggleSearchBy={toggleSearchBy}
              formSubmitHandler={this.formSubmitHandler}/>
            } />
            <Route
              path="/movies"
              render={() =>
              <Search
                searchBy={searchBy}
                inputChangeHandler={this.inputChangeHandler}
                toggleSearchBy={toggleSearchBy}
                formSubmitHandler={this.formSubmitHandler}/>
              } />
          <Route path="/detail/:id"
            render = { () =>
            < Detail
              targetFilm={activeFilm}
              searchButtonHandler={searchButtonHandler} />
            } />
              <Route render = { () => <ErrorHeader />}/>
        </Switch>
        <Switch>
          <Route path="/movies"
            render = { () => <Cockpit
              sortBy={sortBy}
              sortOrder={sortOrder}
              toggleSortBy={this.toggleSortByHandler}
              toggleSortDirection={this.toggleSortDirectionHandler}
              filmsCount={total}/>
              } />
           <Route path="/detail"
             render = { () => <GenreInfo />} />
        </Switch>
        </HeaderWrapper>
      </Fragment>
    );
  }
}

export default withRouter(connect(({ movies, movie, search }) => ({
  total: movies.total,
  activeFilm: movie.activeFilm,
  currentPage: search.currentPage,
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
  searchButtonHandler: PropTypes.func,
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
  moviesPerPage: PropTypes.string,
};

const HeaderWrapper = styled.header`
  flex: 0 0 auto; 
`;
