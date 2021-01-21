import React from 'react';
import { Story } from '@storybook/react';

import './index.scss';

import { VColumnProps, VTable } from 'src';
import { createMeta } from './meta';

import jsonData from './data/data.json';

export default createMeta('Examples / Virtual Table');

// ---------------
// Default
// eslint-disable-next-line
const Default: Story<any> = ({ height, rowHeight, ...args }) => {
    const columns: VColumnProps[] = [
        {
            header: 'Time',
            align: 'left',
            accessor: (x) => {
                return x.created_at;
            },
        },
        {
            header: 'Amount',
            align: 'right',
            accessor: (x) => {
                return x.amount;
            },
        },
        {
            header: 'Price',
            align: 'right',
            accessor: (x) => {
                return x.price;
            },
        },
    ];

    return (
        <div className="vtable-wrapper" style={{ height }}>
            <VTable
                rowHeight={rowHeight}
                className="vtable-wrapper__vtable"
                columns={columns}
                data={jsonData}
            />
        </div>
    );
};

export { Default };
