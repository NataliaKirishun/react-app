import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from './RadioButton';

describe('RadioButton Snapshot', () => {
    it('RadioButton Component should render correctly with no props', () => {
        const component = shallow(<RadioButton />);
        expect(component).toMatchSnapshot();
    });

    it('RadioButton Component should render radio button correctly with given props', () => {
        const inputName = 'test_button';
        const inputValue = 'radio button';
        const inputId = 'radioButton';
        const filtered = 'radio button';
        const handlerChange = jest.fn();
        const component = shallow(<RadioButton inputName={inputName} inputValue={inputValue} inputId={inputId} filtered={filtered} handlerChange={handlerChange}/>);
        expect(component).toMatchSnapshot();
    });
});

