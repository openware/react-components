import React, { useCallback, useMemo, useRef } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import { generalShowDialog } from 'src/modules/general';
import { Button } from 'src/components';
import { useOutsideClick } from 'src/hooks';

import './index.scss';

import { ModalWrapper } from './modal-wrapper';

/**
 * Modal properties.
 */
interface ModalProps {
    /** Callback fired when a confirm buttons is clicked **/
    onOk: () => void;
    /** Text for confirm button  **/
    okText?: string;
    /** If true, when user clicks outside modal window will be closed **/
    outsideClick?: boolean;
    /** Text for cancel button  **/
    cancelText?: string;
    /** If true, confirm button will not be rendered  **/
    hideOk?: boolean;
    /** If true, cancel button will not be rendered  **/
    hideCancel?: boolean;
    /** Modal's header component  **/
    header?: React.ReactNode;
    /** Modal's body component  **/
    children: React.ReactNode;
    /** Modal's name **/
    name: string;
    /** Css classname to add on the outer container **/
    className?: string;
}

/**
 * Modal component.
 */
const Modal: React.FC<ModalProps> = ({
    header,
    children,
    outsideClick,
    onOk,
    okText,
    cancelText,
    hideOk,
    hideCancel,
    name,
    className,
}) => {
    const ref = useRef();
    const dispatch = useDispatch();

    const handleCancel = useCallback(() => {
        dispatch(generalShowDialog(name, undefined));
    }, [name]);

    const headerContent = useMemo(() => {
        return <div className="modal__container-header">{header}</div>;
    }, [header]);

    const childrenContent = useMemo(() => {
        return <div className="modal__container-content">{children}</div>;
    }, [children]);

    const footerContent = useMemo(() => {
        return (
            <div className="modal__container-footer">
                {hideCancel !== true ? (
                    <Button
                        onClick={handleCancel}
                        className="modal__container-footer-cancel">
                        Cancel
                    </Button>
                ) : null}
                {hideOk !== true ? (
                    <Button
                        onClick={onOk}
                        className="modal__container-footer-confirm">
                        Confirm
                    </Button>
                ) : null}
            </div>
        );
    }, [hideOk, cancelText, hideCancel, okText, onOk]);

    const cxModal = useMemo(() => classNames('modal', className), [className]);

    if (outsideClick) {
        useOutsideClick(ref, () => handleCancel());
    }

    return (
        <div className={cxModal}>
            <div ref={ref} className="modal__container">
                {headerContent}
                {childrenContent}
                {footerContent}
            </div>
        </div>
    );
};

export { Modal, ModalWrapper, ModalProps };
