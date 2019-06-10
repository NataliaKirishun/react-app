import React from 'react';
import { shallow } from 'enzyme';
import HeaderWrapper from './HeaderWrapper';

describe('HeaderWrapper Snapshot', () => {
  it('HeaderWrapper Component should render correctly with no props', () => {
    const component = shallow(<HeaderWrapper />);
    expect(component).toMatchSnapshot();
  });
});
