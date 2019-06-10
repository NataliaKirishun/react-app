import React from 'react';
import { shallow } from 'enzyme';
import EmptyResults from './EmptyResults';

describe('EmptyResults Snapshot', () => {
  it('EmptyResults Component should render correctly with given props', () => {
    const text = 'Empty result';
    const component = shallow(<EmptyResults text={text} />);
    expect(component).toMatchSnapshot();
  });
});
