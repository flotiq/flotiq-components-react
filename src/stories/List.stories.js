import React from 'react';

import { List } from '../index';
import { list } from './defaultContent/defaultContent';
import { defaults } from '../components/List/List';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const ListStory = {
    title: 'Flotiq components/List',
    component: List,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        style: { control: 'inline-radio' },
    },
};

export default ListStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <List {...args} />;

export const Unordered = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unordered.args = {
    items: list,
    ...defaults,
};

export const Ordered = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ordered.args = {
    items: list,
    ...defaults,
    style: 'ordered',
};
