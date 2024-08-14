import React from 'react';

import Card from '../components/Card/Card';
import { defaults } from '../components/Card/CardTitle';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const CardTitleStory = {
    title: 'Flotiq components/Card/Card Title',
    component: Card.Title,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default CardTitleStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card.Title {...args} />;

export const Title = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Title.args = {
    children: 'Card title',
    ...defaults,
};
