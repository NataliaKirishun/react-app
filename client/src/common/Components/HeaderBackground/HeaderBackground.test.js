import React from 'react';
import { shallow } from 'enzyme';
import HeaderBackground from './HeaderBackground';

describe('HeaderBackground Snapshot', () => {
    it('HeaderBackground Component should render correctly', () => {
        const component = shallow(<HeaderBackground />);
        expect(component).toMatchSnapshot();
    });
});