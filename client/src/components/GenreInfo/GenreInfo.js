// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';

type GenreInfoProps = {
  activeFilm: Object,
};

const GenreInfo = (props: GenreInfoProps) => {
  const { activeFilm } = props;
  return (
    <GenreInfoComponent>
      <GenreInfoWrapper>
        Films by
        {activeFilm ? `   ${activeFilm.genres[0]}    ` : '...'}
        genre
      </GenreInfoWrapper>
    </GenreInfoComponent>
  );
};

export default connect(({ movie }) => ({
  activeFilm: movie.activeFilm,
}), null)(GenreInfo);

const GenreInfoComponent = styled.div`
    width: 100%;
    background-color: ${Theme.colors.grey};
    padding: 10px 0;
`;

const GenreInfoWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
`;
