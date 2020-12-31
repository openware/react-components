import React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';

import { OwIcon, OwIconProps } from '../index';
import { OwIconName } from '../names';

const defaultProps: OwIconProps = {
    name: 'apps',
};

const setup = (props: Partial<OwIconProps> = {}) => {
    return shallow(<OwIcon {...defaultProps} {...props} />);
};

const setupMount = (props: Partial<OwIconProps> = {}) => {
    return mount(<OwIcon {...defaultProps} {...props} />);
};

describe('Button', () => {
    it('render', () => {
        expect(setup()).toMatchSnapshot();
    });

    it('render styled', () => {
        expect(
            setup({ style: { height: 30, color: 'white' } })
        ).toMatchSnapshot();
    });

    it('render diff name', () => {
        expect(setup({ name: 'calendar' }).render()).toMatchSnapshot();
    });

    it('render null', () => {
        expect(setup({ name: null }).render()).toMatchSnapshot();
    });

    function checkName(component: ReactWrapper, name: OwIconName) {
        component.setProps({ name }, () => {
            expect(component.prop('name')).toEqual(name);
        });
    }

    it('name', () => {
        const component = setupMount({});
        checkName(component, 'apps');
        checkName(component, 'arrow-back-ios');
        checkName(component, 'close');
        checkName(component, 'lock');
        checkName(component, 'menu');
        checkName(component, 'settings');
        checkName(component, 'shield');
        checkName(component, 'show-chart');
    });

    it('className', () => {
        const customClassName = 'custom-class-123456';
        const component = setupMount({ className: customClassName });
        expect(component.prop('className')).toEqual(customClassName);

        const newClassName = 'new-class';
        component.setProps({ className: newClassName }, () => {
            expect(component.prop('className')).toEqual(newClassName);
        });
    });
});
