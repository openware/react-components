import { ThemeStyle } from './interfaces';

export const ThemeStyles: { [key: string]: ThemeStyle | undefined } = {
    light: {
        fontColor: '#222',
        passiveFontColor: '#777f93',
        backgroundColor: '#f4f4f4',
        borderColor: '#e0e0e0',
        headerBackgroundColor: '#ffffff',
        buyColor: '#386b64',
        sellColor: '#7f424d',
        disabledFontColor: 'rgba(119, 127, 147, 0.4)',
        dividerColor: 'rgba(0, 0, 0, 0.25)',
        subheaderBackgroundColor: '#f7f7f7',

        /* tabs */
        tabsActiveBorderColor: '#3C78E0',

        // /* widget */
        widgetBodyBackgroundColor: `#ffffff`,
    },
    dark: {
        fontColor: '#fff',
        passiveFontColor: '#697588',
        backgroundColor: '#171c29',
        borderColor: '#424c64',
        headerBackgroundColor: '#28334e',
        buyColor: '#addbc7',
        sellColor: '#f4b2b0',
        disabledFontColor: 'rgba(105, 117, 136, 0.4)',
        dividerColor: 'rgba(255, 255, 255, 0.25)',
        subheaderBackgroundColor: '#28334E',

        /* tabs */
        tabsActiveBorderColor: '#3C78E0',

        // /* widget */
        widgetBodyBackgroundColor: `#1e2841`,
    },
};
