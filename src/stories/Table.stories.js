import React from 'react';

import { Table } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Table',
    component: Table,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    content: [
        ['lorem', 'ipsum', 'dolor'],
        ['sit', 'amet', 'lorem'],
        ['ipsum', 'dolor', 'sit'],
    ],
    additionalClasses: [],
};
