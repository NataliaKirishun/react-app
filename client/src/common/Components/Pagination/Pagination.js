import React from 'react';
import styled from 'styled-components';
import Arrow from '../Arrow/Arrow';
import RadioButton from '../RadioButton/RadioButton';

const Pagination = ({
  arrayOfPages, arrayOfPerPages, currentPage, moviesPerPage, changePageHandler, changePerPageHandler,
}) => (
  <PaginationWrapper>
    <form>
      <Arrow left />
      { arrayOfPages.map(item => (
        <RadioButton
          inputName="pagination"
          inputValue={item}
          inputId={`item${item}`}
          filtered={`item${currentPage}`}
          handlerChange={changePageHandler}
          underline>
          {item}
        </RadioButton>),
      )}
      <Arrow right />
    </form>
    <form>
      {arrayOfPerPages.map(item => (
        <RadioButton
          inputName="perPageCount"
          inputValue={item}
          inputId={`perPage${item}`}
          filtered={`perPage${moviesPerPage}`}
          handlerChange={changePerPageHandler}
          underline>
          {item}
        </RadioButton>
      ),
      )}
    </form>
  </PaginationWrapper>
);

export default Pagination;

const PaginationWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin:20px auto;
`;
