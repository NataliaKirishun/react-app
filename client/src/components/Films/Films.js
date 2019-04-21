import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Film from '../Film/Film';
import Pagination from '../../common/Components/Pagination/Pagination'


const Films = ({ films, albumClickHandler, arrayOfPages, arrayOfPerPages, currentPage, moviesPerPage, changePageHandler, changePerPageHandler }) => (
  <FilmsBackground>
    <Pagination
      arrayOfPages={arrayOfPages}
      arrayOfPerPages={arrayOfPerPages}
      currentPage={currentPage}
      moviesPerPage={moviesPerPage}
      changePageHandler={changePageHandler}
      changePerPageHandler={changePerPageHandler}
    />
      <FilmsWrapper>
        {films.map((film) => <Film info={film} key={film.id} albumClickHandler={albumClickHandler} />)}
      </FilmsWrapper>
    <Pagination
      arrayOfPages={arrayOfPages}
      arrayOfPerPages={arrayOfPerPages}
      currentPage={currentPage}
      moviesPerPage={moviesPerPage}
      changePageHandler={changePageHandler}
      changePerPageHandler={changePerPageHandler}
    />
  </FilmsBackground>
);

export default Films;

Films.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  albumClickHandler: PropTypes.func.isRequired,
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
