import * as React from 'react';
import { shallow } from 'enzyme';

import { Tabs, Tab, TabsProps } from '../index';

const setup = (props: Partial<TabsProps> = {}) => {
    return shallow(
        <Tabs {...props}>
            <Tab panel={<div>Panel of Tab 1</div>}>Tab 1 content</Tab>
            <Tab panel={<div>Panel of Tab 2</div>}>Tab 2 content</Tab>
            <Tab panel={<div>Panel of Tab 3</div>}>Tab 3 content</Tab>
            <Tab panel={<div>Panel of Tab 4</div>}>Tab 4 content</Tab>
        </Tabs>
    );
};

describe('Tabs', () => {
    it('snapshot render', () => {
        expect(setup().render()).toMatchSnapshot();
    });

    it('should have correct parent className', () => {
        const component = setup().render();

        expect(component.hasClass('tabs')).toBeTruthy();
    });

    it('should have additional className if defined', () => {
        const customClassName = 'tabs__custom-class';
        const component = setup({ className: customClassName });

        expect(component.hasClass(customClassName)).toBeTruthy();
        expect(component.hasClass('tabs')).toBeTruthy();
    });

    it('should render 4 tabs with first active', () => {
        const wrapper = setup();

        expect(wrapper.find(Tab).length).toEqual(4);
        expect(wrapper.find(Tab).at(0).props().active).toEqual(true);
    });

    it('should setup correct active tab by default', () => {
        const wrapper = setup({ selectedTabIndex: 1 });

        expect(wrapper.find(Tab).at(0).props().active).toEqual(false);
        expect(wrapper.find(Tab).at(1).props().active).toEqual(true);
        expect(wrapper.find(Tab).at(2).props().active).toEqual(false);
    });
});
