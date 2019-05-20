// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type FilmProps = {
  info: Object,
}
const Film = (props: FilmProps) => {
  const { info } = props;
  return (
    <FilmLink to={`/film/${info.id}`} key={info.id}>
      <Img src={info.poster_path} />
      <InfoWrapper>
        <Title>{info.title}</Title>
        <span>{info.genres.join(', ')}</span>
        <FilmYearRelease>
          {info.release_date.split('-')[0]}
        </FilmYearRelease>
      </InfoWrapper>
    </FilmLink>
  );
};

export default Film;

const FilmLink = styled(Link).attrs({
  className: 'film-link',
})`
    position: relative;
    width: 30%;
    height: 0;
    padding-top: 55%;
    text-decoration: none;
    box-shadow: 0 4px 11px 0 grey;
    margin-bottom: 30px;
    cursor: pointer;  
      
  @media (max-width: 900px) {
    width: 48%;
    padding-top: 88%;
  }
  
  @media (max-width: 500px) {
    width: 100%;
    padding-top: 183%;
  }    
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

const FilmYearRelease = styled.span`
    position: absolute;
    top: 0;
    right: 16px;
    border: 1px solid black;
    padding: 4px;
    font-size: 12px;
`;
