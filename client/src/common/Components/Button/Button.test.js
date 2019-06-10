import React from 'react';
import { mount } from 'enzyme';
import Button from './Button';

describe('Button Snapshot', () => {
  it('Button Common Component should render correctly with no props', () => {
    const component = mount(
      <Button modifiers={['red']}>Push</Button>,
    );
    expect(component).toMatchSnapshot();
  });
});
