import React from 'react';

import { Quote } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Quote',
    component: Quote,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Quote {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    text: 'Lorem ipsum',
    caption: 'dolor',
    additionalClasses: [],
};
