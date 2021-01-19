import { Meta } from '@storybook/react';
import { Tabs, Tab } from 'src';

export const createMeta = (title: string): Meta => {
    return {
        title,
        subcomponents: { Tabs, Tab },
    };
};
