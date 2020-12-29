import React from 'react';
import classNames from 'classnames';

import './index.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    wide?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className, wide, ...props }) => {
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
