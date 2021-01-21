export type ThemeName = 'light' | 'dark' | string;

export interface ThemeStyle {
    fontColor: string;
    passiveFontColor: string;
    backgroundColor: string;
    borderColor: string;
    headerBackgroundColor: string;
    buyColor: string;
    sellColor: string;
    disabledFontColor: string;
    dividerColor: string;
    subheaderBackgroundColor: string;

    /* tabs */
    tabsActiveBorderColor: string;

    /* widget */
    widgetBodyBackgroundColor: string;
    /* */
    [key: string]: string;
}
