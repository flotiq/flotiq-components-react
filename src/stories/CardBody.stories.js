import React from 'react';

import Card from '../components/Card/Card';
import { Title } from './CardTitle.stories';
import { Text } from './CardText.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Card/Card Body',
    component: Card.Body,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <Card.Body {...args}>
        <div>
            <Title {...Title.args} />
            <Text {...Text.args} />
        </div>
    </Card.Body>
);

export const Body = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body.args = {
    children: 'Test',
    additionalClasses: [],
};
