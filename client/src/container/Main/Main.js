import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Cockpit from '../../components/Cockpit/Cockpit';
import EmptyResults from '../../components/EmptyResults/EmptyResults';
import Films from '../../components/Films/Films';

class Main extends Component {

  state = {
    sortBy: 'release date'
  }

  toggleSortBy = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  }

  sortFilms = () => {
    const { sortBy } = this.state;
    const sortFunction = sortBy === 'release date'
      ? (a, b) => {
        return new Date(a.release_date) - new Date(b.release_date);
      }
      : (a, b) => {
        return a.vote_average - b.vote_average;
      };
    return this.props.filteredFilms.sort(sortFunction);
  }

  render() {
    const { searched, filteredFilms, albumClickHandler } = this.props;
    const warningText = searched ? 'No films found for this request...' : 'Please, select your desired film.. ';
    return (
      <MainWrapper>
        <Cockpit
          sortBy={this.state.sortBy}
          toggleSortBy={this.toggleSortBy}
          filmsCount={filteredFilms.length}/>
        {searched && filteredFilms.length
          ? (
            <Films
              films={this.sortFilms()}
              albumClickHandler={albumClickHandler}/>
          )
          : <EmptyResults text={warningText}/>
        }
      </MainWrapper>
    )
  }
}

export default Main;

Main.propTypes = {
  searched: PropTypes.bool,
  filteredFilms: PropTypes.array,
  albumClickHandler: PropTypes.func
};

const MainWrapper = styled.main`
    flex: 1 0 auto;    
`;

