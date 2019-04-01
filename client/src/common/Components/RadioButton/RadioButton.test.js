import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('RadioButton Snapshot', () => {
    it('RadioButton Component should render correctly', () => {
        const component = shallow(<RadioButton />);
        expect(component).toMatchSnapshot();
    });
});