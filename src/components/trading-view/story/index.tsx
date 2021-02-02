import React from 'react';
import { Story } from '@storybook/react';

import './index.scss';

import { createMeta } from './meta';
import { TradingViewWidget } from '../index';

export default createMeta('Examples / TradingView Widget');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ height, rowHeight, ...args }) => {
    return (
        <div className="trading-story-wrapper" style={{ height }}>
            <TradingViewWidget frameClassName="history-story-wrapper__widget" />
        </div>
    );
};

export { Default };
