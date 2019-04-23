import React from 'react';
import { mount} from 'enzyme';
import Pagination from './Pagination';

describe('Pagination  Snapshot', () => {
    it('Pagination Common Component should render correctly with no props', () => {
        const arrayOfPages=[1,2,3];
        const arrayOfPerPages=[10];
        const currentPage=1;
        const moviesPerPage=10;
        const changePageHandler=jest.fn();
        const changePerPageHandler=jest.fn();

        const component = mount(
            <Pagination
                arrayOfPages={arrayOfPages}
                arrayOfPerPages={arrayOfPerPages}
                currentPage={currentPage}
                moviesPerPage={moviesPerPage}
                changePageHandler={changePageHandler}
                changePerPageHandler={changePerPageHandler}/>
        );
        expect(component).toMatchSnapshot();
    });
});