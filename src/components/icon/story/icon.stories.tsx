import React from 'react';
import { Story } from '@storybook/react';

import './index.scss';

import { OwIcon, OwIconNameList } from 'src';
import { createIconMeta } from './meta';

export default createIconMeta('Examples / Icon');

// ---------------
// Default
const Default: Story = ({ ...args }) => {
    return (
        <div className="icon-story">
            {OwIconNameList.map((n, i) => {
                return (
                    <div key={i} className="icon-story__item">
                        <div className="icon-story__item-icon">
                            <OwIcon name={n} style={args} />
                        </div>
                        <div className="icon-sotry__item-name">{n}</div>
                    </div>
                );
            })}
        </div>
    );
};

Default.args = {};

export { Default };
