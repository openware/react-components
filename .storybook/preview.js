export const parameters = {};

import { storyDecorators } from '../decorators';

export const decorators = storyDecorators;

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            items: [
                { value: 'light', title: 'light', icon: 'circlehollow' },
                { value: 'dark', title: 'dark', icon: 'circle' },
            ],
        },
    },
};
