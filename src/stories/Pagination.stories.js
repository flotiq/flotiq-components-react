import React from 'react';
import Pagination from '../components/Pagination/Pagination';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Pagination',
    component: Pagination,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        rounded: { control: 'inline-radio' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Pagination {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    size: 'md',
    variant: 'primary',
    borderVariant: 'black',
    rounded: 'md',
    page: 1,
    numOfPages: 10,
    prev: 'Previous',
    next: 'Next',
    baseUrl: '/',
    additionalClasses: [],
    activeAdditionalClasses: [],
    prevNextAdditionalClasses: [],
    containerAdditionalClasses: [],
};
