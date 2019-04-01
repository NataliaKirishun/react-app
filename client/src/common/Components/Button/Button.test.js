import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Snapshot', () => {
    it('Button Common Component should render correctly with no props', () => {
        const component = shallow(<Button>Push</Button>);
        expect(component).toMatchSnapshot();
    });
});