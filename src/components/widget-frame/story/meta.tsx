import { Meta } from '@storybook/react';
import { WidgetFrame } from 'src';

export const createMeta = (title: string): Meta => {
    return {
        component: WidgetFrame,
        title,
        argTypes: {
            maxWidth: {
                name: 'Content Width',
                defaultValue: 'Windget Frame',
                control: {
                    type: 'string',
                },
            },
        },
        parameters: {},
    };
};
