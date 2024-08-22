import React from 'react';
import Pagination, { defaults } from '../components/Pagination/Pagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const PaginationStory = {
    title: 'Flotiq components/Pagination',
    component: Pagination,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        rounded: { control: 'inline-radio' },
    },
};

export default PaginationStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    ...defaults,
    page: 1,
    numOfPages: 10,
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...defaults,
    page: 1,
    numOfPages: 10,
    variant: 'secondary',
    borderVariant: 'secondary',
};
