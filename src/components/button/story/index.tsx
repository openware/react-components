import React from 'react';
import { Story } from '@storybook/react';

import { Button, ButtonProps } from 'src';
import { createButtonMeta } from './meta';

export default createButtonMeta('Examples / Test Component');

// ---------------
// Default
const Default: Story<ButtonProps & { text: string }> = ({ text, ...args }) => (
    <Button {...args}>{text}</Button>
);
Default.args = {};

export { Default };
