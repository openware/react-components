import React from 'react';
import { Story } from '@storybook/react';

import { Tabs, Tab } from 'src';
import { createMeta } from './meta';

export default createMeta('Examples / Tabs');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ ...args }) => {
    return (
        <Tabs {...args}>
            <Tab panel={<div>Panel of Tab 1</div>}>
                <p>Tab 1 content</p>
            </Tab>
            <Tab panel={<div>Panel of Tab 2</div>}>
                <p>Tab 2 content</p>
            </Tab>
            <Tab panel={<div>Panel of Tab 3</div>} disabled={true}>
                <p>Tab 3 content</p>
            </Tab>
            <Tab panel={<div>Panel of Tab 4</div>}>
                <p>Tab 4 content</p>
            </Tab>
        </Tabs>
    );
};

export { Default };
