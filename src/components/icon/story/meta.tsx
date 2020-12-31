import { Meta } from '@storybook/react';

export const createIconMeta = (title: string): Meta => {
    return {
        title,
        argTypes: {
            height: {
                description: 'Size',
                defaultValue: '24',
                control: {
                    type: 'number',
                },
            },
            color: {
                description: 'Color',
                defaultValue: '#333',
                control: {
                    type: 'color',
                },
            },
        },
    };
};
