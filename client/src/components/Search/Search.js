import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Logo from '../../common/Components/Logo/Logo';
import RadioButton from '../../common/Components/RadioButton/RadioButton';
import Button from '../../common/Components/Button/Button';
import Theme from '../../common/Theme/Theme';
import HeaderBackground from '../../common/Components/HeaderBackground/HeaderBackground';
import HeaderWrapper from '../../common/Components/HeaderWrapper/HeaderWrapper';

const Search = ({
  searchBy,
  inputChangeHandler,
  toggleSearchBy,
  formSubmitHandler,
}) => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <Logo />
        <Title main>find your movie</Title>
        <Form onSubmit={formSubmitHandler}>
          <InputWrapper>
            <Input
              id="searchInput"
              placeholder="Search here..."
              onChange={(evt) => inputChangeHandler(evt)}
              required
              autoFocus />
            <LabelArrow htmlFor="searchInput">
              <i className="fas fa-level-down-alt" />
            </LabelArrow>
          </InputWrapper>
          <SearchWrapper>
            <Title small>search by</Title>
            <RadioButton
              inputName="searchBy"
              inputValue="title"
              inputId="title"
              filtered={searchBy}
              handlerChange={toggleSearchBy}
              colored />
            <RadioButton
              inputName="searchBy"
              inputValue="genre"
              inputId="genres"
              filtered={searchBy}
              handlerChange={toggleSearchBy}
              colored />
            <Button id="searchBtn" type="submit" red>search</Button>
          </SearchWrapper>
        </Form>
      </HeaderWrapper>
    </HeaderBackground>
  );
};

export default Search;

Search.propTypes = {
  searchBy: PropTypes.string.isRequired,
  inputChangeHandler: PropTypes.func.isRequired,
  toggleSearchBy: PropTypes.func.isRequired,
  formSubmitHandler: PropTypes.func.isRequired,
};

const Title = styled.h2`
    color: ${Theme.colors.white};    
    text-transform: uppercase;
    
    
    ${props => props.main && css`
        font-size: 20px;
        font-weight: 800;
    `}
    
    ${props => props.small && css`
        font-size: 16px;
    `}
`;

const Form = styled.form`
    width: 100%;    
`;

const InputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const Input = styled.input`
    width: 100%;  
    box-sizing: border-box;  
    padding: 10px;
    background-color: ${Theme.colors.sub_grey};;
    color: ${Theme.colors.white};
    border: 0;
    border-bottom: 2px solid ${Theme.colors.red};
    outline: none;
`;

const LabelArrow = styled.label`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${Theme.colors.medium_grey};
    transform: rotate(90deg);  
`;

const SearchWrapper = styled.div.attrs({
  className: 'search-wrapper',
})`
    display: flex;
    align-items: center;  
`;
