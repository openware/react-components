import * as React from 'react';
import { shallow } from 'enzyme';

import { Modal, ModalProps } from '../index';
import { ReduxProvider } from 'src/providers';
import { store } from 'src/store.ts';

const defaultProps: ModalProps = {
    name: '',
    children: <div />,
    onOk: jest.fn(),
};

const setup = (props: Partial<ModalProps> = {}) => {
    return shallow(
        <ReduxProvider store={store}>
            <Modal {...defaultProps} {...props} />
        </ReduxProvider>
    );
};

describe('Modal', () => {
    it('snapshot render', () => {
        expect(setup().render()).toMatchSnapshot();
    });

    it('should have correct parent className', () => {
        const component = setup().render();

        expect(component.hasClass('modal')).toBeTruthy();
    });

    it('should have additional className if defined', () => {
        const customClassName = 'modal__custom-class';
        const component = setup({ className: customClassName }).render();

        expect(component.hasClass(customClassName)).toBeTruthy();
        expect(component.hasClass('modal')).toBeTruthy();
    });
});
