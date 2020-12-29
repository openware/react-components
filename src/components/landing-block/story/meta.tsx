import { Meta } from '@storybook/react';
import { LandingBlock } from 'src';

export const createMeta = (title: string): Meta => {
    return {
        component: LandingBlock,
        title,
        argTypes: {
            maxWidth: {
                name: 'Content Width',
                defaultValue: 1000,
                control: {
                    type: 'number',
                },
            },
        },
        parameters: {},
    };
};
