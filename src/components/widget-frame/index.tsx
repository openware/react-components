import React from 'react';
import classNames from 'classnames';

import './index.scss';

interface Props {
    header: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export const WidgetFrame: React.FC<Props> = ({ header, className, children, style }) => {
    return (
        <div className={classNames('widget-frame', className)} style={style}>
            <div className="widget-frame__title">
                {typeof header === 'string' ? <div className="widget-frame__title-text">{header}</div> : header}
            </div>
            <div className="widget-frame__children">{children}</div>
        </div>
    );
};
