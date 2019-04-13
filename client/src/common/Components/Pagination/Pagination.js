import React, {Fragment} from 'react';
import styled, { css } from 'styled-components';
import Theme from '../../Theme/Theme';
import Arrow from '../Arrow/Arrow';
import RadioButton from '../RadioButton/RadioButton';

const Pagination = ({ paginationData, currentPage, changePageHandler, changePerPageHandler})=> (
    <PaginationWrapper>
        <PagesWrapper>
            {paginationData.firstPageIsShown
            ? (
              <Fragment>
                <Arrow left />
                <RadioButton
                inputName='pagination'
                inputValue={1}
                inputId='item1'
                filtered={'item'+currentPage}
                handlerChange={changePageHandler}
                >1</RadioButton>
                <span>...</span>
            </Fragment> )
            : null }
            { paginationData.pagesArray.map( item => <RadioButton
            inputName='pagination'
            inputValue={item}
            inputId={'item'+item}
            filtered={'item'+currentPage}
            handlerChange={changePageHandler}
            underline
            >{item}</RadioButton> )}
            {paginationData.lastPageIsShown
            ? ( <Fragment>
                <span>...</span>
                <RadioButton
                inputName='pagination'
                inputValue={paginationData.pagesCount}
                inputId={'item'+paginationData.pagesCount}
                filtered={'item'+currentPage}
                handlerChange={changePageHandler}>
                {paginationData.pagesCount}</RadioButton>
             </Fragment>)
              : null }
               <Arrow right/>
        </PagesWrapper>
        <ItemsPerPageWrapper>
            {[10,20,40,80].map(item=><RadioButton
                                       inputName={'perPage'+item}
                                       inputValue={item}
                                       inputId={'perPage'+item}
                                       filtered={'perPage'+paginationData.moviesPerPage}
                                       handlerChange={changePerPageHandler}
                                       underline>{item}</RadioButton>
            )}
            </ItemsPerPageWrapper>
    </PaginationWrapper>
);

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