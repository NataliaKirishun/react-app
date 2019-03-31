import styled from 'styled-components';
import Theme from '../Theme/Theme';
import bckgImage from '../../assets/images/films.jpeg';


const HeaderBackground = styled.div`
    background-color: ${Theme.colors.dark_grey};
    background-image: url(${bckgImage});
    background-repeat: no-repeat;
    background-blend-mode: overlay;
`;

export default HeaderBackground;
