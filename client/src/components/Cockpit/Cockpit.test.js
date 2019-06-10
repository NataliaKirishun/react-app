import React from 'react';
import { shallow } from 'enzyme';
import Cockpit from './Cockpit';

describe('Cockpit Snapshot', () => {
  it('Cockpit Component should render correctly with given props', () => {
    const sortBy = 'release date';
    const toggleSortBy = jest.fn();
    const filmsCount = 10;
    const component = shallow(<Cockpit sortBy={sortBy} toggleSortBy={toggleSortBy} filmsCount={filmsCount} />);
    expect(component).toMatchSnapshot();
  });
});
