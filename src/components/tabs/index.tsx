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

interface TabsProps {
    children: JSX.Element[];
    selectedTabIndex?: number;
    className?: string;
    tabNavClassName?: string;
    tabNavWrapperClassName?: string;
    tabPanelClassName?: string;
    tabPanelWrapperClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
    children,
    selectedTabIndex = 0,
    className = '',
    tabNavClassName = '',
    tabNavWrapperClassName = '',
    tabPanelClassName = '',
    tabPanelWrapperClassName = '',
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
