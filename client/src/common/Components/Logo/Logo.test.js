import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('Logo Snapshot', () => {
  it('Logo Component should render correctly with no props', () => {
    const component = shallow(<Logo />);
    expect(component).toMatchSnapshot();
  });
});
