import React from 'react';
import { mount } from 'enzyme';
import Arrow from './Arrow';

describe('Arrow Snapshot', () => {
  it('Arrow Common Component should render correctly with no props', () => {
    const component = mount(
      <Arrow modifiers={['down']} />,
    );
    expect(component).toMatchSnapshot();
  });
});
