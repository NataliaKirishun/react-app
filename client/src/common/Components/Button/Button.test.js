import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Snapshot', () => {
    it('Button Common Component should render correctly', () => {
        const component = shallow(<Button>Push</Button>);
        expect(component).toMatchSnapshot();
    });
});