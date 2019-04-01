import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Detail from '../../components/Detail/Detail';
import Search from '../../components/Search/Search';

class Header extends Component {
  state = {
    searchBy: 'title',
    term: '',
  };


  inputChangeHandler = (e) => {
    this.setState({
      term: e.target.value,
    });
  }

  toggleSearchBy = (e) => {
    this.setState({
      searchBy: e.target.value,
    });
  }

  formSubmitHandler = (e) => {
    const { searchBy, term } = this.state;
    e.preventDefault();
    this.props.searchFilmsHandler({
      searchBy,
      term: term.toLowerCase()});
    this.setState({
      term: '',
    });

  }

  render() {
    const activeFilm = this.props.activeFilm;
    return(
      <HeaderWrapper>
        {activeFilm
          ? (
            <Detail
              targetFilm={activeFilm}
              searchButtonHandler={this.props.searchButtonHandler} />
          )
          : (
            <Search
              searchBy={this.state.searchBy}
              inputChangeHandler={this.inputChangeHandler}
              toggleSearchBy={this.toggleSearchBy}
              formSubmitHandler={this.formSubmitHandler} />
          )
        }
      </HeaderWrapper>
    )
  }
}

export default Header;

Header.propTypes = {
  activeFilm: PropTypes.shape({}),
  searchFilmsHandler: PropTypes.func,
  searchButtonHandler: PropTypes.func,
};

const HeaderWrapper = styled.header`
  flex: 0 0 auto; 
`;