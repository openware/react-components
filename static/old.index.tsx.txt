import React from 'react';
import ReactTradingViewWidget, { Themes } from 'react-tradingview-widget';

import './index.scss';

import { WidgetFrame } from '../widget-frame';
import { TvBarStyles, TvIntervalTypes, TvRangeTypes } from './interfaces';

interface TvProps {
    allow_symbol_change?: boolean;
    autosize?: boolean;
    calendar?: boolean;
    details?: boolean;
    enable_publishing?: boolean;
    height?: number;
    hideideas?: boolean;
    hide_legend?: boolean;
    hide_side_toolbar?: boolean;
    hide_top_toolbar?: boolean;
    hotlist?: boolean;
    interval?: TvIntervalTypes;
    locale?: string;
    news?: string[];
    no_referral_id?: boolean;
    popup_height?: number | string;
    popup_width?: number | string;
    range?: TvRangeTypes;
    referral_id?: string;
    save_image?: boolean;
    show_popup_button?: boolean;
    studies?: string[];
    style?: TvBarStyles;
    symbol: string;
    theme?: Themes;
    timezone?: string;
    toolbar_bg?: string;
    watchlist?: string;
    widgetType?: string;
    width?: number;
    withdateranges?: boolean;
}

export interface TradingViewWidgetProps extends TvProps {
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
            <ReactTradingViewWidget {...props} />
        </WidgetFrame>
    );
};
