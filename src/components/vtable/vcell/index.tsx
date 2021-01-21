import * as React from 'react';
import classNames from 'classnames';

import './index.scss';

interface Props {
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
}

export const VCell: React.FC<Props> = ({
    children,
    style: valueStyle,
    className,
}) => {
    const style: React.CSSProperties = { ...valueStyle };

    // if (maxWidth) {
    //     style.maxWidth = maxWidth;
    //     style.margin = '0 auto';
    //     style.whiteSpace = 'nowrap';
    // }
    // if (minWidth) {
    //     style.minWidth = minWidth;
    // }

    return (
        <div className={classNames('vcell', className)} style={style}>
            {children}
        </div>
    );
};
