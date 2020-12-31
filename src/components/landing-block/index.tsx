import classNames from 'classnames';
import React from 'react';

import './index.scss';

interface LandingBlockProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
}

export const LandingBlock: React.FC<LandingBlockProps> = ({
    children,
    className,
    style,
    contentClassName,
    contentStyle,
}) => {
    return (
        <div className={classNames('landing-block', className)} style={style}>
            <div
                className={classNames(
                    'landing-block__content',
                    contentClassName
                )}
                style={contentStyle}>
                {children}
            </div>
        </div>
    );
};
