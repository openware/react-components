import classNames from 'classnames';
import React, {
    Children,
    cloneElement,
    useCallback,
    useState,
    useMemo,
} from 'react';
import { Tab } from './tab';

import './index.scss';

/**
 * Tabs properties.
 */
export interface TabsProps {
    /** The content of the tabs **/
    children: JSX.Element[];
    /** Index of first time selected tab **/
    selectedTabIndex?: number;
    /** Css classname to add on the outer container **/
    className?: string;
    /** Callback on tab change **/
    onTabChange?: (value: number) => void;
}

/**
 * Tabs component
 */
const Tabs: React.FC<TabsProps> = ({
    children,
    selectedTabIndex = 0,
    className,
    onTabChange,
}) => {
    const [activeTabIndex, setActiveTab] = useState(selectedTabIndex);

    const handleClick = useCallback(
        (index: number) => {
            if (index !== activeTabIndex) {
                setActiveTab(index);
                onTabChange && onTabChange(index);
            }
        },
        [activeTabIndex]
    );

    const renderTabs = useMemo(() => {
        return Children.map(children, (child, index) => {
            return cloneElement(child, {
                tabIndex: index,
                active: index === activeTabIndex,
                onClick: handleClick,
            });
        });
    }, [children[activeTabIndex]]);

    const renderActiveTabPanel = useMemo(() => {
        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.panel;
        }
    }, [children[activeTabIndex]]);

    return (
        <div className={classNames('tabs', className)}>
            <div className="tabs__nav">
                <div className="tabs__nav-wrapper">{renderTabs}</div>
            </div>
            <div className="tabs__panel">
                <div className="tabs__panel-wrapper">
                    {renderActiveTabPanel}
                </div>
            </div>
        </div>
    );
};

export { Tabs, Tab };
