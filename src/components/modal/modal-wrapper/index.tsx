import React from 'react';
import { useReduxSelector } from 'src/hooks';

/**
 * ModalWrapper properties.
 */
export interface ModalWrapperProps {
    /** Modal's name **/
    name: string;
    /** Function what returns chilren with props if props are defined **/
    renderChildren: (options: any) => React.ReactElement; // eslint-disable-line
}

/**
 * ModalWrapper component.
 */
export const ModalWrapper: React.FC<ModalWrapperProps> = ({
    name,
    renderChildren,
}) => {
    const options = useReduxSelector((x) => x.general.dialog[name]);

    return options ? renderChildren(options) : null;
};
