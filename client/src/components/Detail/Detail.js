import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Logo from '../../common/Components/Logo/Logo';
import Button from '../../common/Components/Button/Button';
import HeaderBackground from '../../common/Components/HeaderBackground/HeaderBackground';
import HeaderWrapper from '../../common/Components/HeaderWrapper/HeaderWrapper';

const Detail = ({ targetFilm, searchButtonHandler }) => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <Container>
          <Logo />
          <Button id="backToSearch" onClick={() => searchButtonHandler()} white>Search</Button>
        </Container>
        <Container>
          <PosterWrapper>
            <Poster src={targetFilm.poster_path} />
          </PosterWrapper>
          <InfoWrapper>
            <Title>{targetFilm.title}</Title>
            <Info>
              {targetFilm.genres.join(', ')}
            </Info>
            <div>
              <Info bold>
                {targetFilm.release_date.split('-')[0]}
              </Info>
              <Info bold>
                {targetFilm.runtime}
                {'min'}
              </Info>
            </div>
            <Info>
              {targetFilm.overview}
            </Info>
          </InfoWrapper>
        </Container>
      </HeaderWrapper>
    </HeaderBackground>
  );
};

export default Detail;

Detail.propTypes = {
  targetFilm: PropTypes.shape({}).isRequired,
  searchButtonHandler: PropTypes.func.isRequired,
};

const Container = styled.div`
    display: flex;
    justify-content: space-between; 
    
    ${props => props.column && css`
        flex-direction: column;
    `}   
`;

const PosterWrapper = styled.div`
    position: relative;
    width: 15%;
    height: 0;
    padding-top: 22.5%;
`;

const InfoWrapper = styled.div.attrs({
  className: 'film-info-wrapper',
})`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;        
`;

const Poster = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;   
`;

const Title = styled.h3`
    color: ${Theme.colors.red};  
    font-size: 24px;
    margin: 10px 0;  
`;

const Info = styled.span`
    color: ${Theme.colors.white};  
    font-weight: 400;
    padding: 10px;
    
     ${props => props.bold && css`
        font-weight: 800;
    `}
`;
