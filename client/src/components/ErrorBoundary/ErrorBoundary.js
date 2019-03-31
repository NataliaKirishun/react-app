import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

export default ErrorBoundary;

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};
