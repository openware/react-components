import classNames from 'classnames';
import React from 'react';

import './index.scss';

interface TabProps {
    children?: string | React.ReactNode;
    onClick?: (tabIndex: number) => void;
    tabIndex?: number;
    className?: string;
    active?: boolean;
    disabled?: boolean;
    panel: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({
    children,
    className,
    onClick,
    tabIndex,
    active,
    disabled,
}) => {
    const tabClassNames = classNames(`tab`, className, {
        'tab--active': active,
        'tab--disabled': disabled,
    });

    return (
        <div
            className={tabClassNames}
            onClick={() => {
                !disabled && onClick(tabIndex);
            }}>
            {children}
        </div>
    );
};
