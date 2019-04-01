import styled from 'styled-components';
import Theme from '../../Theme/Theme';
import Image from '../../../assets/images/films.jpeg';


const HeaderBackground = styled.div`
    background-color: ${Theme.colors.dark_grey};
    background-image: url(${Image});
    background-repeat: no-repeat;
    background-blend-mode: overlay;
`;

export default HeaderBackground;
