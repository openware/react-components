import React from 'react';
import { Story } from '@storybook/react';

import './index.scss';

import { TradeHistoryWidget } from '../index';
import { createMeta } from './meta';
import jsonData from './data/data.json';

export default createMeta('Examples / History Widget');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ height, rowHeight, ...args }) => {
    return (
        <div className="history-story-wrapper" style={{ height }}>
            <TradeHistoryWidget
                className="history-story-wrapper__widget"
                data={jsonData as any}
            />
        </div>
    );
};

export { Default };
