import React, { Component, PureComponent } from 'react';
import { render } from 'react-dom';
import ReactCreateElement from "./components/ReactCreateElement"
import WelcomeComponent from "./components/WelcomeComponent"
import WelcomePureComponent from "./components/WelcomePureComponent"
import WelcomeFunctionalComponent from "./components/WelcomeFunctionalComponent"
import "./styles/App.less";

const App = () => <div>
    <ReactCreateElement/>
    <WelcomeComponent/>
    <WelcomePureComponent/>
    <WelcomeFunctionalComponent/>
</div>

export default App;