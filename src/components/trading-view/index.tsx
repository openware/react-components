import React from 'react';

import './index.scss';

import { WidgetFrame } from '../widget-frame';

export interface TradingViewWidgetProps {
    header?: string;
    frameClassName?: string;
    frameStyle?: React.CSSProperties;
}

export const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
    frameClassName,
    frameStyle,
    header = 'Trading View',
    ...props
}) => {
    return (
        <WidgetFrame
            header={header}
            className={frameClassName}
            style={frameStyle}>
            <span></span>
        </WidgetFrame>
    );
};
