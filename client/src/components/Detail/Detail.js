import React from 'react'
import styled, {css} from 'styled-components'
import Theme from '../../common/Theme/Theme'
import Logo from '../../common/Components/Logo'
import Button from '../../common/Components/Button'
import bckgImage from '../../assets/images/films.jpeg'

const Detail =  () => (
    <DetailBackground>
        <DetailWrapper>
            <Container>
                <Logo/>
                <Button/>
            </Container>
        </DetailWrapper>
    </DetailBackground>
);

export default  Detail;

const DetailBackground = styled.div`
    width: 100%;    
    background: url(${bckgImage}) no-repeat;
    background-color: ${Theme.colors.dark_grey};
    background-blend-mode: overlay;    
`;

const DetailWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
`;

