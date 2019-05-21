import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Theme from '../../common/Theme/Theme';
import Logo from '../../common/Components/Logo/Logo';
import HeaderBackground from '../../common/Components/HeaderBackground/HeaderBackground';
import HeaderWrapper from '../../common/Components/HeaderWrapper/HeaderWrapper';
import { fetchMovie, clearState } from '../../store';

class Detail extends Component {

  componentWillMount() {
    const { match, fetchMovie } = this.props;
    const { id } = match.params;
    fetchMovie(id);
  }

  componentDidUpdate(prevProps) {
    const { fetchMovie, match } = this.props;
    if (match.params.id !== prevProps.match.params.id) {
      const { id } = match.params;
      fetchMovie(id);
    }
  }

  render() {
    const { targetFilm, clearState } = this.props;
    if (!targetFilm) {
      return (
        <EmptyWrapper>Loading...</EmptyWrapper>
      );
    }
    return (
      <HeaderBackground>
        <HeaderWrapper>
          <Container>
            <Logo />
            <ButtonLink  to="/" onClick={clearState} id="backToSearch">Search</ButtonLink>
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
  }
}

export default withRouter(connect(({ movie }) => ({
  targetFilm: movie.activeFilm,
}), {
  fetchMovie, clearState,
})(Detail));

Detail.propTypes = {
  targetFilm: PropTypes.shape({}),
  fetchMovie: PropTypes.func,
  match: PropTypes.shape({}),
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

const ButtonLink = styled(Link)`
    background-color: ${Theme.colors.white};
    color: ${Theme.colors.red};
    text-decoration: none;
    padding: 6px;
    border-radius: 6px;
`;

const EmptyWrapper = styled.div`
    display: flex;
    justify-content: center;
    color: ${Theme.colors.red};
    font-size: 24px;
    flex: auto;
`;
