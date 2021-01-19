import React from 'react';
import { Story } from '@storybook/react';

import { createMeta } from './meta';
import { WidgetFrame } from '..';

export default createMeta('Examples / Widget Frame');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ maxWidth, ...args }) => (
    <div {...args}>
        <WidgetFrame header="Widget Frame">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </WidgetFrame>
    </div>
);

export { Default };
