import React from 'react';

import { table } from './defaultContent/defaultContent';
import Table, { defaults } from '../components/Table/Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const TableStory = {
    title: 'Flotiq components/Table',
    component: Table,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default TableStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    content: table,
    ...defaults,
};

export const WithHeaders = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithHeaders.args = {
    content: table.slice(1),
    ...defaults,
    headers: table[0],
};
