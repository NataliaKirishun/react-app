import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../../components/Footer/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import mock from '../../mock.json';

class App extends Component {
  state = {
    allFilms: mock.data,
    activeFilm: null,
    searched: true,
  };

  searchFilms = ({ searchBy, term }) => {
    const { allFilms } = this.state;
    const filterVariable = searchBy === 'title' ? 'title' : 'genres';
    const filtered = allFilms.filter((item) => {
      if (typeof item[filterVariable] === 'string') {
        return item[filterVariable].toLowerCase().indexOf(term) > -1;
      }
      if (typeof item[filterVariable] === 'object') {
        return item[filterVariable].some((genre) => {
          return genre.toLowerCase().indexOf(term) > -1;
        });
      }
      return false;
    });
    this.setState({
      searched: true,
      filteredFilms: filtered,
    });
  }

  albumClickHandler = (id) => {
    const { filteredFilms } = this.state;
    const targetFilm = filteredFilms.filter((film) => {
      return film.id === id;
    })[0];
    this.setState({
      activeFilm: targetFilm,
    });
    window.scrollTo(0, 0);
  }

  searchButtonHandler = () => {
    this.setState({
      activeFilm: null,
    });
  }

  render() {
    const { activeFilm, searched } = this.state;
    const { movies } = this.props.movies;
    console.log('props', this.props);
    console.log('movies',movies);
    return (
      <AppWrapper>
        <ErrorBoundary>
          <Header
            activeFilm={activeFilm}
            searchFilmsHandler={this.searchFilms}
            searchButtonHandler={this.searchButtonHandler}
          />
        </ErrorBoundary>
        <Main
          searched={searched}
          filteredFilms={movies}
          albumClickHandler={this.albumClickHandler} />
        <Footer />
      </AppWrapper>
    );
  }
}

export default connect( state => ({
    movies: state.movies
}))(App);

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;
