import React from 'react';

import { Table } from '../index';
import { table } from './defaultContent/defaultContent';

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
    content: table,
    ...Table.defaultProps,
};

export const WithHeaders = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithHeaders.args = {
    content: table.slice(1),
    ...Table.defaultProps,
    headers: table[0],
};
