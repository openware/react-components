import React from 'react';
import { shallow } from 'enzyme';

import { TradeHistoryWidget, TradeHistoryWidgetProps } from '../index';
import jsonData from '../story/data/data.json';

const defaultProps: TradeHistoryWidgetProps = {
    style: { height: 300 },
    data: jsonData as any,
};

const setup = (props: Partial<TradeHistoryWidgetProps> = {}) => {
    return shallow(<TradeHistoryWidget {...props} {...defaultProps} />);
};

describe('TradeHistoryWidget', () => {
    it('render', () => {
        expect(setup()).toMatchSnapshot();
    });
});
