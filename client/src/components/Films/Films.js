import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import Theme from '../../common/Theme/Theme'
import Film from '../Film/Film'


const Films = ({films, albumClickHandler}) => (
    <FilmsBackground>
        <FilmsWrapper>
            {films.map((film)=> <Film info={film} key={film.id} albumClickHandler={albumClickHandler}/>)}
        </FilmsWrapper>
    </FilmsBackground>
);

export default Films;

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