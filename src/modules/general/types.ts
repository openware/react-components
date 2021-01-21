import { AnyAction } from 'redux';

export interface GeneralState {
    // eslint-disable-next-line
    dialog: { [key: string]: any };
    loading: { [key: string]: boolean };
}

// eslint-disable-next-line
export interface KeyValue<T = any> {
    key: string;
    value: T;
}

// eslint-disable-next-line
export interface ActionWith<T = any> extends AnyAction {
    payload: T;
}
