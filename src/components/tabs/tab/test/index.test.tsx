import * as React from 'react';
import { shallow } from 'enzyme';

import { Tab, TabProps } from '../index';

const defaultProps = {
    panel: <div>Panel</div>,
};

const setup = (props: Partial<TabProps> = {}) => {
    return shallow(
        <Tab {...defaultProps} {...props}>
            Test tab
        </Tab>
    );
};

describe('Tab', () => {
    it('snapshot render', () => {
        expect(setup().render()).toMatchSnapshot();
    });

    it('should have correct parent className', () => {
        const component = setup().render();

        expect(component.hasClass('tab')).toBeTruthy();
    });

    it('should have additional className if defined', () => {
        const customClassName = 'tab__custom-class';
        const component = setup({ className: customClassName });

        expect(component.hasClass(customClassName)).toBeTruthy();
        expect(component.hasClass('tab')).toBeTruthy();
    });

    it('should be active', () => {
        const component = setup({ active: true });

        expect(component.hasClass('tab--active')).toBeTruthy();
    });

    it('should be disabled', () => {
        const component = setup({ disabled: true });

        expect(component.hasClass('tab--disabled')).toBeTruthy();
    });

    it('should be clickable if not disabled', () => {
        const testOnClick = jest.fn();
        const component = setup({ onClick: testOnClick });
        component.simulate('click');

        expect(testOnClick).toHaveBeenCalledTimes(1);
    });

    it("shouldn't be clickable if disabled", () => {
        const testOnClick = jest.fn();
        const component = setup({ disabled: true, onClick: testOnClick });
        component.simulate('click');

        expect(testOnClick).toHaveBeenCalledTimes(0);
    });
});
