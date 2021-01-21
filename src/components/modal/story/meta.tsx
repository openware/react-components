import { Meta } from '@storybook/react';
import { Modal, ModalWrapper } from 'src';

export const createMeta = (title: string): Meta => {
    return {
        title,
        subcomponents: { Modal, ModalWrapper },
    };
};
