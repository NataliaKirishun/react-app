import React, { Component } from 'react';
import styled from 'styled-components';
import Search from '../components/Search/Search';
import Cockpit from '../components/Cockpit/Cockpit';
import EmptyResults from '../components/EmptyResults/EmptyResults';
import Films from '../components/Films/Films';
import Detail from '../components/Detail/Detail';
import Footer from '../components/Footer/Footer';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import mock from '../mock.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchBy: 'title',
      sortBy: 'release date',
      searched: false,
      allFilms: [],
      activeAlbumId: null,
      activeFilm: null,
      someGenreFilms: [],
      term: '',
    };
    this.toggleSearchBy = this.toggleSearchBy.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.toggleSortBy = this.toggleSortBy.bind(this);
    this.searchFilms = this.searchFilms.bind(this);
    this.albumClickHandler = this.albumClickHandler.bind(this);
    this.searchButtonHandler = this.searchButtonHandler.bind(this);
  }

  toggleSearchBy(e) {
    this.setState({
      searchBy: e.target.value,
    });
  }

  inputChangeHandler(e) {
    this.setState({
      term: e.target.value,
    });
  }

  formSubmitHandler(e) {
    const { searchBy, term } = this.state;
    e.preventDefault();
    this.searchFilms(searchBy, term.toLowerCase());
    this.setState({
      term: '',
      searched: true,
    });
  }

  toggleSortBy(e) {
    const { allFilms, sortBy } = this.state;
    const sortFunction = sortBy === 'release date'
      ? (a, b) => {
        return new Date(a.release_date) - new Date(b.release_date);
      }
      : (a, b) => {
        return a.vote_average - b.vote_average;
      };

    this.setState({
      sortBy: e.target.value,
      allFilms: allFilms.sort(sortFunction),
    });
  }

  searchFilms(searchBy, term) {
    const filterVariable = searchBy === 'title' ? 'title' : 'genres';
    const filteredFilms = mock.data.filter((item) => {
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
      allFilms: filteredFilms,
    });
  }

  albumClickHandler(id) {
    const { allFilms } = this.state;
    const targetFilm = allFilms.filter((film) => {
      return film.id === id;
    })[0];

    this.setState({
      activeAlbumId: id,
      activeFilm: targetFilm,
    });
  }

  searchButtonHandler() {
    this.setState({
      activeAlbumId: null,
      activeFilm: null,
    });
  }

  render() {
    const {
      searchBy,
      sortBy,
      searched,
      allFilms,
      activeAlbumId,
      activeFilm,
    } = this.state;
    const warningText = searched ? 'No films found for this request...' : 'Please, select your desired film.. ';
    return (
      <AppWrapper>
        <ErrorBoundary>
          <Header>
            {activeAlbumId
              ? (
                <Detail
                  targetFilm={activeFilm}
                  searchButtonHandler={this.searchButtonHandler} />
              )
              : (
                <Search
                  searchBy={searchBy}
                  inputChangeHandler={this.inputChangeHandler}
                  toggleSearchBy={this.toggleSearchBy}
                  formSubmitHandler={this.formSubmitHandler} />
              )
            }
          </Header>
        </ErrorBoundary>
        <Main>
          <Cockpit
            sortBy={sortBy}
            toggleSortBy={this.toggleSortBy}
            filmsCount={allFilms.length} />
          {searched && allFilms.length
            ? (
              <Films
                films={allFilms}
                albumClickHandler={this.albumClickHandler} />
            )
            : <EmptyResults text={warningText} />
            }
        </Main>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;

const AppWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    flex: 0 0 auto;    
`;

const Main = styled.main`
    flex: 1 0 auto;    
`;
