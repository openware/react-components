import React from 'react';

import { useTheme } from 'src';

export const ThemeProviderContent: React.FC = ({ children }) => {
    const { rootClassName } = useTheme();
    return <div className={rootClassName}>{children}</div>;
};
