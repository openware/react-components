import React from 'react';
import { Story } from '@storybook/react';
import moment from 'moment';
import numeral from 'numeral';

import './index.scss';

import { TradeHistoryWidget } from '../index';
import { createMeta } from './meta';
import jsonData from './data/data.json';

export default createMeta('Examples / History Widget');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ height }) => {
    return (
        <div className="history-story-wrapper" style={{ height }}>
            <TradeHistoryWidget
                className="history-story-wrapper__widget"
                data={jsonData as any}
            />
        </div>
    );
};

const Columns: Story<any> = ({ height }) => {
    return (
        <div className="history-story-wrapper" style={{ height }}>
            <TradeHistoryWidget
                className="history-story-wrapper__widget"
                columns={[
                    {
                        header: 'Time',
                        align: 'left',
                        accessor: (x) => {
                            return moment(x.created_at).format('HH:mm');
                        },
                    },
                    {
                        header: 'Amount',
                        align: 'right',
                        accessor: (x) => {
                            return numeral(x.amount).format('0.000000');
                        },
                    },
                ]}
                data={jsonData as any}
            />
        </div>
    );
};

export { Default, Columns };
