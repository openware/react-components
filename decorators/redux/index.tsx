import React from 'react';
import { store } from 'src/store.ts';

import { ReduxProvider } from 'src/providers/redux';

import 'src/components/style/theme.scss';

export const withReduxProvider = story => {
    return (
        <ReduxProvider store={store}>
            { story() }
        </ReduxProvider>
    );
};
