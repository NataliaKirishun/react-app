import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cockpit from '../../components/Cockpit/Cockpit';
import Detail from '../../components/Detail/Detail';
import Search from '../../components/Search/Search';
import { fetchMovies, toggleSearchBy, toggleSortByHandler, toggleSortDirectionHandler, searchSubmit } from '../../actions';


class Header extends Component {

state={
    term: '',
}

  inputChangeHandler = ({ target: { value } }) => {
    this.setState({
        term: value
    });
  }

  toggleSortDirectionHandler = () => {
    const { sortOrder, toggleSortDirectionHandler } = this.props;
      const sorted = sortOrder === 'asc' ? 'desc' : 'asc';
      toggleSortDirectionHandler(sorted);
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    const {term}=this.state;
    const { searchSubmit } = this.props;
    searchSubmit(term);
  }

  render() {
    const {
    activeFilm,
    searchButtonHandler,
    total,
    searchBy,
    sortBy,
    sortOrder,
    term,
    toggleSearchBy,
    toggleSortBy,
    toggleSortByHandler} = this.props;

    return (
    <Fragment>
      <HeaderWrapper>
        {activeFilm
          ? (
            <Detail
              targetFilm={activeFilm}
              searchButtonHandler={searchButtonHandler} />
          )
          : (
            <Search
              searchBy={searchBy}
              inputChangeHandler={this.inputChangeHandler}
              toggleSearchBy={toggleSearchBy}
              formSubmitHandler={this.formSubmitHandler}
            />
          )
        }
      </HeaderWrapper>
      <Cockpit
        sortBy={sortBy}
        sortOrder={sortOrder}
        toggleSortBy={toggleSortByHandler}
        toggleSortDirection = {this.toggleSortDirectionHandler}
        filmsCount={total} />
        </Fragment>
    );
  }
}

export default connect( ({ movies, search }) => ({
  total: movies.total,
  currentPage: search.currentPage,
  offset: search.offset,
  moviesPerPage: search.moviesPerPage,
  searchBy: search.searchBy,
  sortBy: search.sortBy,
  sortOrder: search.sortOrder,
  term: search.term
}),
{ toggleSearchBy, toggleSortByHandler, toggleSortDirectionHandler, searchSubmit })(Header);

Header.propTypes = {
  activeFilm: PropTypes.shape({}),
  searchFilmsHandler: PropTypes.func,
  searchButtonHandler: PropTypes.func,
};

const HeaderWrapper = styled.header`
  flex: 0 0 auto; 
`;
