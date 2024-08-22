import React from 'react';

import Card from '../components/Card/Card';
import { defaults } from '../components/Card/CardText';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const CardTextStory = {
    title: 'Flotiq components/Card/Card Text',
    component: Card.Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default CardTextStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card.Text {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ...defaults,
};
