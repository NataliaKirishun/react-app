import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

describe('Search Component Snapshot', () => {
  it('Search Component should render correctly with given props', () => {
    const searchBy = 'title';
    const inputChangeHandler = jest.fn();
    const toggleSearchBy = jest.fn();
    const formSubmitHandler = jest.fn();
    const component = shallow(<Search searchBy={searchBy} inputChangeHandler={inputChangeHandler} toggleSearchBy={toggleSearchBy} formSubmitHandler={formSubmitHandler} />);
    expect(component).toMatchSnapshot();
  });
});
