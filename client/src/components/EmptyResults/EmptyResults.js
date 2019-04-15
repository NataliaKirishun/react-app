import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';

const EmptyResults = ({ text }) => (
  <EmptyBackground>
    <EmptyContainer>
      <EmptyText>{text}</EmptyText>
    </EmptyContainer>
  </EmptyBackground>
);

export default EmptyResults;

EmptyResults.propTypes = {
  text: PropTypes.string.isRequired,
};

const EmptyBackground = styled.div`
    width: 100%;
    height: auto;
    background-color: ${Theme.colors.white};
`;

const EmptyContainer = styled.div`
    width: 80%;
    margin: 0 auto;  
`;

const EmptyText = styled.p.attrs({
  className: 'empty-text',
})`
   color: ${Theme.colors.red}; 
   text-align: center;
   vertical-align: middle;
   font-size: 30px;
`;
