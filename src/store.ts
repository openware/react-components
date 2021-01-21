import { createStore } from 'redux';
import { rootReducer } from 'src/modules';

export const store = createStore(rootReducer);
