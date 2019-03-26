import React from 'react'
import styled, {css} from 'styled-components'

const Film = ({info, albumClickHandler}) => (
    <FilmLink onClick={()=>albumClickHandler(info.id)}>
        <Img src={info.poster_path}/>
        <InfoWrapper>
            <Title>{info.title}</Title>
            <FilmGenre>{info.genres.join(', ')}</FilmGenre>
            <FilmYearRelease>{info.release_date.split('-')[0]}</FilmYearRelease>
        </InfoWrapper>
    </FilmLink>
);

export default Film;

const FilmLink = styled.a`
    position: relative;
    width: 30%;
    height: 0;
    padding-top: 55%;
    text-decoration: none;
    box-shadow: 0 4px 11px 0 grey;
    margin-bottom: 30px;
    
`;

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80%;
    padding: 16px;
    box-sizing: border-box;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    padding: 0 16px 16px ;
    box-sizing: border-box;
`;

const Title = styled.h3`
    text-transform: uppercase;
    padding: 0 40px 0 0;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

const FilmGenre = styled.span`

`;

const FilmYearRelease = styled.span`
    position: absolute;
    top: 0;
    right: 16px;
    border: 1px solid black;
    padding: 4px;
    font-size: 12px;
`;
