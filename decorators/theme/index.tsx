import React from 'react';
import { StoryContext } from '@storybook/react';

import { ThemeProvider } from 'src';
import { ThemeProviderContent } from './content';

export const withThemeProvider = (Story: React.FC<StoryContext>, context: StoryContext): React.ReactNode => {
    const { theme } = context.globals;
    return (
        <ThemeProvider theme={theme}>
            <ThemeProviderContent>
                <Story {...context} />
            </ThemeProviderContent>
        </ThemeProvider>
    );
};
