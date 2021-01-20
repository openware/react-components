import classNames from 'classnames';
import React from 'react';

import './index.scss';

/**
 * Tab properties.
 */
export interface TabProps {
    /** The content of the tab **/
    children?: React.ReactNode;
    /** Callback fired when a tab is clicked **/
    onClick?: (tabIndex: number) => void;
    /** Index of Tab **/
    tabIndex?: number;
    /** Css classname to add on the outer container **/
    className?: string;
    /** If true, the tab will be active **/
    active?: boolean;
    /** If true, the tab will be disabled **/
    disabled?: boolean;
    /** Content what will be displayed if tab is active **/
    panel: React.ReactNode;
}

/**
 * Tab
 */
export const Tab: React.FC<TabProps> = ({
    children,
    className,
    onClick,
    tabIndex,
    active = false,
    disabled = false,
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
