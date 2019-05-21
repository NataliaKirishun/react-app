import React, {Fragment} from 'react';
import ErrorHeader from '../../common/Components/ErrorHeader/ErrorHeader';
import ErrorPage from '../../common/Components/ErrorPage/ErrorPage';

const NotFoundScreen = () => (
  <Fragment>
    <ErrorHeader />
    <ErrorPage />
  </Fragment>
);

export default NotFoundScreen;