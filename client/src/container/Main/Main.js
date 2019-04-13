import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EmptyResults from '../../components/EmptyResults/EmptyResults';
import Films from '../../components/Films/Films';
import Pagination from '../../common/Components/Pagination/Pagination';

class Main extends Component {

    getPagesArray(){
         const { albumClickHandler, movies, isFetched, total, currentPage, moviesPerPage } = this.props;
         const pagesCount = Math.ceil(total/moviesPerPage);
         let startPage;
         let lastPage;
         let pagesArray=[];
         let firstPageIsShown;
         let lastPageIsShown;
         if (currentPage<=5) {
            startPage = 1;
            lastPage = Math.min(Math.max(currentPage + 2, 5),pagesCount);
            firstPageIsShown = false;
            lastPageIsShown = (pagesCount>=5)? true : false;
         } else if (currentPage>=pagesCount-3) {
            startPage = currentPage-2;
            lastPage= pagesCount
            firstPageIsShown= true;
            lastPageIsShown= false;
         } else {
            startPage=currentPage-2;
            lastPage=currentPage+2;
            firstPageIsShown= true;
            lastPageIsShown= true;
         }
         for (let i=startPage; i<=lastPage; i++) {
            pagesArray.push(i);
         }
         return { pagesArray,pagesCount, firstPageIsShown, lastPageIsShown, moviesPerPage };
    }

  render() {
    const { albumClickHandler, movies, isFetched, total, currentPage, moviesPerPage } = this.props;

    const warningText = isFetched ? 'No films found for this request...' : 'Please, select your desired film.. ';
    return (
      <MainWrapper>
        {isFetched && movies.length
          ? (
          <Fragment>
            <Pagination
              paginationData={this.getPagesArray()}
              currentPage={currentPage}
              changePageHandler
              changePerPageHandler
            />
            <Films
              films={movies}
              albumClickHandler={albumClickHandler} />
            <Pagination
              paginationData={this.getPagesArray()}
              currentPage={currentPage}
              changePageHandler
              changePerPageHandler
            />
              </Fragment>
          )
          : <EmptyResults text={warningText} />
        }
      </MainWrapper>
    );
  }
}

export default connect(({movies, search})=>({
    movies: movies.movies,
    isFetched: movies.isFetched,
    total: movies.total,
    currentPage: search.currentPage,
    moviesPerPage: search.moviesPerPage,
}))(Main);

Main.propTypes = {
  searched: PropTypes.bool,
  filteredFilms: PropTypes.arrayOf(PropTypes.object),
  albumClickHandler: PropTypes.func,
};

const MainWrapper = styled.main`
    flex: 1 0 auto;

`;
