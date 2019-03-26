import React from 'react'
import styled, {css} from 'styled-components'
import Logo from "../../common/Components/Logo"
import RadioButton from "../../common/Components/RadioButton"
import Button from "../../common/Components/Button"
import Theme from '../../common/Theme/Theme'
import bckgImage from '../../assets/images/films.jpeg'

const Search = ({searchBy, inputChangeHandler, toggleSearchBy,formSubmitHandler}) => {
    return (
        <Header>
            <Wrapper>
                <Logo/>
                <Title main>find your movie</Title>
                <Form onSubmit={formSubmitHandler}>
                    <InputWrapper>
                        <Input
                            id="searchInput"
                            placeholder="Search here..."
                            onChange={(evt)=> inputChangeHandler(evt)}
                            required/>
                        <LabelArrow htmlFor="searchInput" ><i className="fas fa-level-down-alt"></i></LabelArrow>
                    </InputWrapper>
                    <SearchWrapper>
                        <Title small>search by</Title>
                        <RadioButton
                            inputName="searchBy"
                            inputValue="title"
                            inputId="titleChoice"
                            filtered={searchBy}
                            handlerChange={toggleSearchBy}
                            colored/>
                        <RadioButton
                            inputName="searchBy"
                            inputValue="genre"
                            inputId="genreChoice"
                            filtered={searchBy}
                            handlerChange={toggleSearchBy}
                            colored/>
                        <Button type="submit" red>search</Button>
                    </SearchWrapper>
                </Form>
            </Wrapper>
        </Header>
    )
};

export default Search;

const Header = styled.header`
  flex: 0 0 auto;    
  background-color: ${Theme.colors.dark_grey};
  background-image: url(${bckgImage});
  background-repeat: no-repeat;
  background-blend-mode: overlay;
`;
const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 10px 0 20px;
`;

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

const SearchWrapper = styled.div`
    display: flex;
    align-items: center;  
`;








