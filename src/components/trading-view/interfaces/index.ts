export enum TvBarStyles {
    BARS = '0',
    CANDLES = '1',
    HOLLOW_CANDLES = '9',
    HEIKIN_ASHI = '8',
    LINE = '2',
    AREA = '3',
    RENKO = '4',
    LINE_BREAK = '7',
    KAGI = '5',
    POINT_AND_FIGURE = '6',
}

export type TvIntervalTypes =
    | 1
    | 3
    | 5
    | 15
    | 30
    | 60
    | 120
    | 180
    | '1'
    | '3'
    | '5'
    | '15'
    | '30'
    | '60'
    | '120'
    | '180'
    | 'D'
    | 'W';

export type TvRangeTypes = '1d' | '5d' | '1m' | '3m' | '6m' | 'ytd' | 'all';

export type TvThemes = 'Light' | 'Dark';
