import { useEffect } from 'react';

// eslint-disable-next-line
export const useOutsideClick = (ref: any, callback: any) => {
    // eslint-disable-next-line
    const handleClick = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
};
