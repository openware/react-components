import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

import './index.scss';

// eslint-disable-next-line
export interface ButtonProps extends ButtonHTMLAttributes<any> {
    wide?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    className,
    wide,
    ...props
}) => {
    return (
        <button
            className={classNames(
                'test-button',
                {
                    'test-button--wide': wide,
                },
                className
            )}
            {...props}
        />
    );
};
