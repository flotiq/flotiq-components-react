import React from 'react';

import { Card } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Card/Card Title',
    component: Card.Title,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card.Title {...args} />;

export const Title = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title.args = {
    children: 'Card title',
    additionalClasses: [],
};
