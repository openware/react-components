import React, { useMemo } from 'react';
import moment from 'moment';
import numeral from 'numeral';

import './index.scss';

import { WidgetFrame } from '../widget-frame';
import { VColumnProps, VTable } from '../vtable';
import { PublicTrade } from '../interfaces';

export interface TradeHistoryWidgetProps {
    header?: string;
    className?: string;
    style?: React.CSSProperties;
    data: PublicTrade[];
}

export const TradeHistoryWidget: React.FC<TradeHistoryWidgetProps> = ({
    className,
    style,
    header = 'History',
    data,
}) => {
    const columns = useMemo<VColumnProps<PublicTrade>[]>(() => {
        return [
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
            {
                header: 'Price',
                align: 'right',
                accessor: (x) => {
                    return numeral(x.amount).format('0.0000');
                },
            },
        ];
    }, []);

    return (
        <WidgetFrame header={header} className={className} style={style}>
            <VTable columns={columns} data={data} />
        </WidgetFrame>
    );
};
