import React from 'react';
import { mount, render } from 'enzyme';
import Search from './Search';

describe('Search Component testing', () => {

    it("check prop title by default", () => {
        const props = {
            searchBy:'title',
            inputChangeHandler: jest.fn(),
            toggleSearchBy: jest.fn(),
            formSubmitHandler: jest.fn(),
        };
        const SearchComponent = mount(<Search {...props} />);
        expect(SearchComponent.find('label#active').text()).toEqual('title');
    });

});

