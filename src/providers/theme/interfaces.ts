export type ThemeName = 'light' | 'dark' | string;

export interface ThemeStyle {
    fontColor: string;
    passiveFontColor: string;
    backgroundColor: string;
    borderColor: string;
    headerBackgroundColor: string;
    buyColor: string;
    sellColor: string;
    /* widget */
    widgetBodyBackgroundBolor: string;
    /* */
    [key: string]: string;
}
