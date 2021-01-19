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
interface TabsProps {
    /** The content of the tabs **/
    children: JSX.Element[];
    /** Index of first time selected tab **/
    selectedTabIndex?: number;
    /** Css classname to add on the outer container **/
    className?: string;
    /** Css classname to add on the .tabs__nav container **/
    tabNavClassName?: string;
    /** Css classname to add on the .tabs__nav-wrapper container **/
    tabNavWrapperClassName?: string;
    /** Css classname to add on the .tabs__panel container **/
    tabPanelClassName?: string;
    /** Css classname to add on the .tabs__panel-wrapper container **/
    tabPanelWrapperClassName?: string;
}

/**
 * Tabs component
 */
const Tabs: React.FC<TabsProps> = ({
    children,
    selectedTabIndex = 0,
    className,
    tabNavClassName,
    tabNavWrapperClassName,
    tabPanelClassName,
    tabPanelWrapperClassName,
}) => {
    const [activeTabIndex, setActiveTab] = useState(selectedTabIndex);

    const handleClick = useCallback(
        (index: number) => {
            if (index !== activeTabIndex) {
                setActiveTab(index);
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
            <div className={classNames('tabs__nav', tabNavClassName)}>
                <div
                    className={classNames(
                        'tabs__nav-wrapper',
                        tabNavWrapperClassName
                    )}>
                    {renderTabs}
                </div>
            </div>
            <div className={classNames('tabs__panel', tabPanelClassName)}>
                <div
                    className={classNames(
                        'tabs__panel-wrapper',
                        tabPanelWrapperClassName
                    )}>
                    {renderActiveTabPanel}
                </div>
            </div>
        </div>
    );
};

export { Tabs, Tab };
