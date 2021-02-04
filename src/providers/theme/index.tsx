import React, {
    useContext,
    useState,
    useCallback,
    useEffect,
    createContext,
    useMemo,
} from 'react';
import { ThemeName } from './interfaces';
import { ThemeStyles } from './styles';

export { ThemeName };
export interface ThemeContextProps {
    theme: ThemeName;
    changeTheme: (name: ThemeName) => void;
}

const DefaultTheme: ThemeName = 'light';

const ThemeContext = createContext<ThemeContextProps>({
    theme: DefaultTheme,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    changeTheme: () => {},
});

interface Props {
    theme?: ThemeName;
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({
    theme = DefaultTheme,
    children,
}) => {
    const [innerTheme, setInnerTheme] = useState<ThemeName>(DefaultTheme);

    const handleChange = useCallback((newTheme: ThemeName) => {
        setInnerTheme(newTheme);
    }, []);

    const themeValue = useMemo<ThemeContextProps>(() => {
        return {
            theme: innerTheme,
            changeTheme: handleChange,
        };
    }, [innerTheme, handleChange]);

    useEffect(() => {
        if (theme) {
            setInnerTheme(theme);
        }
    }, [theme]);

    useEffect(() => {
        const style = ThemeStyles[theme];
        if (style) {
            Object.keys(style).map((key) => {
                const value = style[key];
                document.documentElement.style.setProperty(`--${key}`, value);
            });
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export function useTheme(): ThemeContextProps {
    return useContext(ThemeContext);
}
