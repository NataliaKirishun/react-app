import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import Theme from '../../common/Theme/Theme'
import bckgImage from '../../assets/images/films.jpeg'

class Search extends Component {

    constructor(props){
        super(props);
        this.state={
            searchBy: 'title'
        };
        this.toggleSearchBy = this.toggleSearchBy.bind(this);

    };

    toggleSearchBy(e) {
        this.setState({
            searchBy: e.target.value
        });
    };

    render(){
        return (
            <Header>
                <Wrapper>
                    <Logo>netflixroulette</Logo>
                    <Title main>find your movie</Title>
                    <Form>
                        <InputWrapper>
                            <Input id="searchInput" placeholder="Search here..." required/>
                            <LabelArrow htmlFor="searchInput" ><i className="fas fa-level-down-alt"></i></LabelArrow>
                        </InputWrapper>
                        <SearchWrapper>
                            <Title small>search by</Title>
                            <RadioInput type="radio" name="searchBy" id="titleChoice" value="title" onChange={this.toggleSearchBy}/>
                            <RadioLabel htmlFor="titleChoice" active={this.state.searchBy === 'title'}>title</RadioLabel>
                            <RadioInput type="radio" name="searchBy" id="genreChoice" value="genre" onChange={this.toggleSearchBy}/>
                            <RadioLabel htmlFor="genreChoice" active={this.state.searchBy === 'genre'}>genre</RadioLabel>
                            <Button type="submit">search</Button>
                        </SearchWrapper>
                    </Form>
                </Wrapper>
            </Header>
        )
    }
}

export default Search;

const Header = styled.header`
  width: 100vw;
  height: auto;    
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

const Logo = styled.a`
    color: ${Theme.colors.red};
    font-size: 16px;
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

const RadioInput = styled.input`
    display: none;
`;

const RadioLabel = styled.label`
  cursor: pointer;
  text-transform: uppercase;
  color:  ${Theme.colors.white};
  margin-left: 20px;
  padding: 6px 12px;
  background-color: ${Theme.colors.medium_grey};
  border-radius: 4px;
  font-weight: 400;
  
   ${props => props.active && css`
        background-color: ${Theme.colors.red}
   `}
`;

const Button = styled.button`
    font-size: 16px;
    margin-left: auto;
    background-color: ${Theme.colors.red};
    border: 0;
    padding: 6px 12px;
    color: ${Theme.colors.white};
    text-transform: uppercase;
    border-radius: 4px;
`;




