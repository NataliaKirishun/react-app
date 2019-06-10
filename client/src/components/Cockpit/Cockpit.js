// @flow
import React from 'react';
import styled from 'styled-components';
import RadioButton from '../../common/Components/RadioButton/RadioButton';
import Arrow from '../../common/Components/Arrow/Arrow';
import Theme from '../../common/Theme/Theme';

type CockpitProps = {
  sortBy: string,
  sortOrder: string,
  toggleSortBy: Function,
  toggleSortDirection: Function,
  filmsCount: number
}

const Cockpit = (props: CockpitProps) => {
  const {
    sortBy, sortOrder, toggleSortBy, toggleSortDirection, filmsCount,
  } = props;
  return (
    <Background>
      <CockpitWrapper>
        <div>
          <span id="filmsCount">
            {filmsCount}
          </span>
          <span>
            {' movies found'}
          </span>
        </div>
        <SortWrapper>
          <form>
            <span>Sort by</span>
            <RadioButton
              inputName="sort"
              inputValue="release date"
              inputId="release_date"
              filtered={sortBy}
              handlerChange={toggleSortBy}
              transparent />
            <RadioButton
              inputName="sort"
              inputValue="rating"
              inputId="vote_average"
              filtered={sortBy}
              handlerChange={toggleSortBy}
              transparent />
          </form>
          <Arrow onClick={toggleSortDirection} down={sortOrder === 'desc'} />
        </SortWrapper>
      </CockpitWrapper>
    </Background>
  );
};

export default Cockpit;

const Background = styled.div` 
    width: 100%;
    background-color: ${Theme.colors.grey};    
`;

const CockpitWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
`;

const SortWrapper = styled.div`
    display: flex;
`;
