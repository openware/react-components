import React from 'react';
import { Story } from '@storybook/react';
import classNames from 'classnames';

import './index.scss';

import { LandingBlock } from 'src';
import { createMeta } from './meta';

export default createMeta('Examples / Landing Block');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ maxWidth, ...args }) => (
    <div {...args}>
        <LandingBlock
            className={classNames(
                'test-landing-block',
                'test-landing-block__first'
            )}
            contentStyle={{ maxWidth }}>
            <h1>Block 1</h1>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
        </LandingBlock>
        <LandingBlock
            className={classNames(
                'test-landing-block',
                'test-landing-block__second'
            )}
            contentStyle={{ maxWidth }}>
            <h1>Block 2</h1>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
        </LandingBlock>
        <LandingBlock
            className={classNames(
                'test-landing-block',
                'test-landing-block__third'
            )}
            contentStyle={{ maxWidth }}>
            <h1>Block 3</h1>
            <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
        </LandingBlock>
    </div>
);

export { Default };
