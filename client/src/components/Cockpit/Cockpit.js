import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RadioButton from '../../common/Components/RadioButton/RadioButton';
import Theme from '../../common/Theme/Theme';

const Cockpit = ({ sortBy, toggleSortBy, filmsCount }) => {
  return (
    <Background>
      <Wrapper>
        <span>
          {filmsCount}
          {'movies found'}
        </span>
        <form>
          <span>Sort by</span>
          <RadioButton
            inputName="sort"
            inputValue="release date"
            inputId="release"
            filtered={sortBy}
            handlerChange={toggleSortBy}
            transparent />
          <RadioButton
            inputName="sort"
            inputValue="rating"
            inputId="rating"
            filtered={sortBy}
            handlerChange={toggleSortBy}
            transparent />
        </form>
      </Wrapper>
    </Background>
  );
};

export default Cockpit;

Cockpit.propTypes = {
  sortBy: PropTypes.string,
  toggleSortBy: PropTypes.func.isRequired,
  filmsCount: PropTypes.number.isRequired,
};

const Background = styled.div` 
    width: 100%;
    background-color: ${Theme.colors.grey};    
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
`;
