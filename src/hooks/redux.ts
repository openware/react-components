import { shallowEqual, useSelector } from 'react-redux';

import { RootState } from 'src/modules';

export function useReduxSelector<T>(selector: (state: RootState) => T): T {
    return useSelector(selector, shallowEqual);
}
