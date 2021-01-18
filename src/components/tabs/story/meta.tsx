import { Meta } from '@storybook/react';
import { Tabs, Tab } from 'src';

export const createMeta = (title: string): Meta => {
    return {
        component: Tabs,
        title,
        argTypes: {
            selectedTabIndex: {
                name: 'selectedTabIndex',
                type: { name: 'number', required: false },
                defaultValue: 0,
                description: 'Index value of selected tab',
                table: {
                    type: { summary: 'number' },
                    defaultValue: { summary: 0 },
                },
                control: {
                    type: 'number',
                },
            },
            className: {
                name: 'className',
                type: { name: 'string', required: false },
                description: 'Property for overriding .tabs class',
                table: {
                    type: { summary: 'string' },
                    defaultValue: { summary: '' },
                },
                control: {
                    type: 'text',
                },
            },
            tabNavClassName: {
                name: 'tabNavClassName',
                type: { name: 'string', required: false },
                description: 'Property for overriding .tabs__nav class',
                table: {
                    type: { summary: 'string' },
                    defaultValue: { summary: '' },
                },
                control: {
                    type: 'text',
                },
            },
            tabNavWrapperClassName: {
                name: 'tabNavWrapperClassName',
                type: { name: 'string', required: false },
                description: 'Property for overriding .tabs__nav-wrapper class',
                table: {
                    type: { summary: 'string' },
                    defaultValue: { summary: '' },
                },
                control: {
                    type: 'text',
                },
            },
            tabPanelClassName: {
                name: 'tabPanelClassName',
                type: { name: 'string', required: false },
                description: 'Property for overriding .tabs__panel class',
                table: {
                    type: { summary: 'string' },
                    defaultValue: { summary: '' },
                },
                control: {
                    type: 'text',
                },
            },
            tabPanelWrapperClassName: {
                name: 'tabPanelWrapperClassName',
                type: { name: 'string', required: false },
                description:
                    'Property for overriding .tabs__panel-wrapper class',
                table: {
                    type: { summary: 'string' },
                    defaultValue: { summary: '' },
                },
                control: {
                    type: 'text',
                },
            },
        },
        subcomponents: { Tab },
    };
};
