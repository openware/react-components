import React from 'react';
import ReactTradingViewWidget, { Themes } from 'react-tradingview-widget';

import './index.scss';

import { WidgetFrame } from '../widget-frame';

export interface TradingViewWidgetProps {
    header?: string;
    className?: string;
    style?: React.CSSProperties;
    // view-widget
    symbol?: string;
    theme?: any;
    locale?: string;
    autosize?: boolean;
}

export const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
    className,
    style,
    header = 'History',
    ...props
}) => {
    return (
        <WidgetFrame header={header} className={className} style={style}>
            <ReactTradingViewWidget {...props} />
        </WidgetFrame>
    );
};
