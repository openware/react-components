import React, { useCallback } from 'react';
import { Story } from '@storybook/react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalProps, ModalWrapper } from 'src';
import { createMeta } from './meta';
import { generalShowDialog } from 'src/modules/general';

export default createMeta('Examples / Modal');

// ---------------
// Modal
// eslint-disable-next-line
const Default: Story<any> = ({ ...args }) => {
    const dispatch = useDispatch();
    const testOptions = {
        name: 'Test Modal',
        onOk: () => {
            window.console.log('OK clicked');
        },
        header: <div>Modal Header</div>,
        outsideClick: true,
    };

    const openModal = useCallback(() => {
        dispatch(generalShowDialog(testOptions.name, testOptions));
    }, [testOptions.name]);

    return (
        <div {...args}>
            <Button onClick={() => openModal()}>Click me</Button>
            <ModalWrapper
                name={testOptions.name}
                renderChildren={(options: ModalProps) => (
                    <Modal {...options}>
                        <div>Modal Content</div>
                    </Modal>
                )}
            />
        </div>
    );
};

export { Default };
