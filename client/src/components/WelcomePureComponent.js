import React, { PureComponent } from 'react';
import { render } from 'react-dom';

export default class WelcomePureComponent extends PureComponent {
    render() {
        return <div>Hello world! (with React PureComponent)</div>
    }
}