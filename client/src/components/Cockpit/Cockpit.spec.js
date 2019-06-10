import React from 'react';
import { shallow } from 'enzyme';
import Cockpit from './Cockpit';


describe('Cockpit Component props testing', () => {
  let wrapper;
  const sortBy = 'release date';
  const toggleSortBy = jest.fn();
  const filmsCount = 10;

  beforeEach(() => {
    wrapper = shallow(<Cockpit sortBy={sortBy} toggleSortBy={toggleSortBy} filmsCount={filmsCount} />);
  });

  it('should render 2pcs RadioButtons', () => {
    expect(wrapper.find('RadioButton')).toHaveLength(2);
  });
});
