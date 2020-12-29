import React from 'react';
import { shallow } from 'enzyme';

import { Button, ButtonProps } from '../index';

const defaultProps: ButtonProps = {
    children: 'Click Me',
};

const setup = (props: Partial<ButtonProps> = {}) => {
    return shallow(<Button {...props} {...defaultProps} />);
};

describe('Button', () => {
    it('click', () => {
        const testOnClick = jest.fn();
        const component = setup({ onClick: testOnClick });
        component.simulate('click');
        expect(testOnClick).toHaveBeenCalledTimes(1);
    });

    it('render', () => {
        expect(setup().render()).toMatchSnapshot();
    });

    it('wide', () => {
        const component = setup({ wide: true });
        expect(component.hasClass('test-button--wide')).toBeTruthy();
    });

    it('className', () => {
        const customClassName = 'custom-class-123456';
        const component = setup({ className: customClassName });
        expect(component.hasClass(customClassName)).toBeTruthy();
    });
});
