// @flow

import React from 'react';

type LoaderProps = {
  loading: boolean,
};

const Loader = (props: LoaderProps) => {
  const { loading } = props;
  return (
    loading && <span>Loading...</span>
  );
}

Loader.defaultProps = {
  loading: true,
};

export default Loader;

