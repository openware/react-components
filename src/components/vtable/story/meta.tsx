import { Meta } from '@storybook/react';

export const createMeta = (title: string): Meta => {
    return {
        title,
        argTypes: {
            height: {
                name: 'Content Height',
                defaultValue: 400,
                control: {
                    type: 'number',
                },
            },
            rowHeight: {
                name: 'Row Height',
                defaultValue: 26,
                control: {
                    type: 'number',
                },
            },
        },
        parameters: {},
    };
};
