import * as React from 'react';
import { Provider } from 'react-redux';

// eslint-disable-next-line
const ReduxProvider = ({ children, store }) => (
    <Provider store={store}>{children}</Provider>
);

export { ReduxProvider };
