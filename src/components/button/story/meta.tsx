import { Meta } from '@storybook/react';
import { Button } from 'src';

export const createButtonMeta = (title: string): Meta => {
    return {
        component: Button,
        title,
        argTypes: {
            text: {
                defaultValue: 'Click Me',
                description: 'Content text',
                control: {
                    type: 'text',
                },
            },
            wide: {
                description: 'Set wide mode',
                defaultValue: false,
                control: {
                    type: 'boolean',
                },
            },
        },
        parameters: {
            actions: { handles: ['click'] },
        },
    };
};
