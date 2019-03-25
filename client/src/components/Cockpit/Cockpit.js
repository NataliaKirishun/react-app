import React from 'react'
import styled, {css} from 'styled-components'
import RadioButton from '../../common/Components/RadioButton'
import Theme from '../../common/Theme/Theme'

const Cockpit = ({sortBy, toggleSortBy}) => {
    return (
        <Background>
            <Wrapper>
                <span>7 movies found</span>
                <form>
                    <span>Sort by</span>
                    <RadioButton
                        inputName="sort"
                        inputValue="release date"
                        inputId="release"
                        filtered={sortBy}
                        handlerChange={toggleSortBy}
                        transparent/>
                    <RadioButton
                        inputName="sort"
                        inputValue="rating"
                        inputId="rating"
                        filtered={sortBy}
                        handlerChange={toggleSortBy}
                        transparent/>
                </form>
            </Wrapper>
        </Background>
    )
};

export default Cockpit;

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

const SortLabel = styled.label`
    cursor: pointer;
    margin-left: 20px;
    
    ${props => props.active && css`
        color: ${Theme.colors.red};  
    `}
`;

