import React, {Fragment} from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../Theme/Theme';
import Arrow from '../Arrow/Arrow';
import RadioButton from '../RadioButton/RadioButton';

const Pagination = ({ arrayOfPages, arrayOfPerPages, currentPage, moviesPerPage, changePageHandler, changePerPageHandler})=> { console.log(currentPage, moviesPerPage); return(
    <PaginationWrapper>
        <PagesWrapper>
            <Arrow left />
            { arrayOfPages.map( item => <RadioButton
            inputName='pagination'
            inputValue={item}
            inputId={'item'+item}
            filtered={'item'+currentPage}
            handlerChange={changePageHandler}
            underline
            >{item}</RadioButton> )}
            <Arrow right/>
        </PagesWrapper>
        <ItemsPerPageWrapper>
            {arrayOfPerPages.map(item=><RadioButton
                inputName='perPageCount'
                inputValue={item}
                inputId={'perPage'+ item}
                filtered={'perPage'+ moviesPerPage}
                handlerChange={changePerPageHandler}
                underline>{item}</RadioButton>
            )}
            </ItemsPerPageWrapper>
    </PaginationWrapper>
)};

export default Pagination;

const PaginationWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin:20px auto;
`;

const PagesWrapper=styled.form`

`;

const ItemsPerPageWrapper=styled.form`

`;