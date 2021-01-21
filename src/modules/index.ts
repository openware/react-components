import { combineReducers } from 'redux';
import { generalReducer, GeneralState } from './general';

export * from './general';

export const rootReducer = combineReducers({
    general: generalReducer,
});

export interface RootState {
    general: GeneralState;
}
