import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import VisibilitySensor from 'react-visibility-sensor';

import './index.scss';

interface LandingBlockProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    contentClassName?: string;
    contentStyle?: React.CSSProperties;
    onVisible?: (isVisible: boolean) => void;
}

export const LandingBlock: React.FC<LandingBlockProps> = ({
    children,
    className,
    style,
    contentClassName,
    contentStyle,
    onVisible,
}) => {
    const handleChange = useCallback(
        (isVisible) => {
            if (onVisible) {
                onVisible(isVisible);
            }
        },
        [onVisible]
    );

    return (
        <VisibilitySensor
            onChange={handleChange}
            partialVisibility={true}
            offset={{ top: 500, bottom: 600 }}>
            <div
                className={classNames('landing-block', className)}
                style={style}>
                <div
                    className={classNames(
                        'landing-block__content',
                        contentClassName
                    )}
                    style={contentStyle}>
                    {children}
                </div>
            </div>
        </VisibilitySensor>
    );
};
