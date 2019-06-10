// @flow
import React from 'react';
import styled from 'styled-components';
import Theme from '../../common/Theme/Theme';

type EmptyResultsProps = {
  text: string,
}

const EmptyResults = (props: EmptyResultsProps) => {
  const { text } = props;
  return (
    <EmptyBackground>
      <EmptyContainer>
        <EmptyText className="empty-text">{text}</EmptyText>
      </EmptyContainer>
    </EmptyBackground>
  );
};

export default EmptyResults;

const EmptyBackground = styled.div`
    flex: auto;
    width: 100%;
    height: auto;
    background-color: ${Theme.colors.white};
`;

const EmptyContainer = styled.div`
    width: 80%;
    margin: 0 auto;  
`;

const EmptyText = styled.p`
   color: ${Theme.colors.red}; 
   text-align: center;
   vertical-align: middle;
   font-size: 30px;
`;
