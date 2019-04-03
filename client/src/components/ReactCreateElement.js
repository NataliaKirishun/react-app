import React, {Component} from "react";

export default class ReactCreateElement extends Component {
    render() {
        return (
            React.createElement('div', null, "Hello world! (with React.createElement)" )
        );
    }
};