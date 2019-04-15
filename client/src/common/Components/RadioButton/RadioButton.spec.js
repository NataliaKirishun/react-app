import React from 'react';
import {mount} from 'enzyme';
import RadioButton from './RadioButton';

describe('Radio Button Component testing with props', () => {

    let RadioButtonComponent;

    beforeEach( ()=> {
            const props = {
                inputName: "sort",
                inputValue: "release date",
                inputId: "release",
                filtered: "release date",
                handlerChange: jest.fn(),
                transparent: "true",
            };
           RadioButtonComponent = mount(<RadioButton {...props} />);
    });

    it("should render release date button ", () => {
        expect(RadioButtonComponent.find('label').text()).toEqual('release date');
    });

    it("should render active button after clicking on it", () => {
        RadioButtonComponent.find('input').simulate('click');
        expect(RadioButtonComponent.find('label').is('#active')).toEqual(true);
    });
});

