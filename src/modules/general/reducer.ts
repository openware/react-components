import { AnyAction } from 'redux';
import { GENERAL_DIALOG, GENERAL_LOADING } from './constants';
import { GeneralState, KeyValue } from './types';

const GENERAL_STATE_DEFAULT: GeneralState = {
    dialog: {},
    loading: {},
};

export const generalReducer = (
    state: GeneralState = GENERAL_STATE_DEFAULT,
    action: AnyAction
): GeneralState => {
    switch (action.type) {
        case GENERAL_DIALOG: {
            const { key, value }: KeyValue = action['payload'];
            return {
                ...state,
                dialog: { ...state.dialog, [key]: value },
            };
        }
        case GENERAL_LOADING: {
            const { key, value }: KeyValue = action['payload'];
            return {
                ...state,
                loading: { ...state.loading, [key]: value },
            };
        }

        default:
            return state;
    }
};
