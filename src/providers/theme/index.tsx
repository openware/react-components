import React, {
    useContext,
    useState,
    useCallback,
    useEffect,
    createContext,
    useMemo,
} from 'react';
import classNames from 'classnames';
import { ThemeName } from './names';

export { ThemeName };

export interface ThemeContextProps {
    theme: ThemeName;
    rootClassName: string;
    changeTheme: (name: ThemeName) => void;
}

function getRootClassName(themeName: ThemeName): string {
    return classNames('app-root-theme', `app-root-theme--${themeName}`);
}

const DefaultTheme: ThemeName = 'light';

const ThemeContext = createContext<ThemeContextProps>({
    theme: DefaultTheme,
    rootClassName: getRootClassName(DefaultTheme),
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    changeTheme: () => {},
});

interface Props {
    theme?: ThemeName;
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ theme, children }) => {
    const [innerTheme, setInnerTheme] = useState<ThemeName>(DefaultTheme);

    const handleChange = useCallback((newTheme: ThemeName) => {
        setInnerTheme(newTheme);
    }, []);

    useEffect(() => {
        if (theme) {
            setInnerTheme(theme);
        }
    }, [theme]);

    const themeValue = useMemo<ThemeContextProps>(() => {
        return {
            theme: innerTheme,
            changeTheme: handleChange,
            rootClassName: getRootClassName(innerTheme),
        };
    }, [innerTheme, handleChange]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme(): ThemeContextProps {
    return useContext(ThemeContext);
}
