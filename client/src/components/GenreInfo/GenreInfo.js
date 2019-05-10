import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';

const GenreInfo = ({ activeFilm }) => (
  <GenreInfoComponent>
    <GenreInfoWrapper>
      Films by
      {activeFilm ? activeFilm.genres[0] : '...'}
      genre
    </GenreInfoWrapper>
  </GenreInfoComponent>
);

export default GenreInfo;

GenreInfo.propTypes = {
  activeFilm: PropTypes.string,
};

const GenreInfoComponent = styled.div`
    width: 100%;
    background-color: ${Theme.colors.grey};
    padding: 10px 0;
`;

const GenreInfoWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
