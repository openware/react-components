import * as React from 'react';
import { shallow } from 'enzyme';

import { WidgetFrame } from '..';

describe('WidgetFrame', () => {
    it('snapshot render', () => {
        expect(
            shallow(
                <WidgetFrame header="title" className="className">
                    Content
                </WidgetFrame>
            )
        ).toMatchSnapshot();
    });
});
