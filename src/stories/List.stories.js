import React from 'react';

import { List } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/List',
    component: List,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        style: { control: 'inline-radio' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <List {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    items: [{
        content: 'Lorem ipsum',
        items: [
            {
                content: 'Lorem ipsum',
                items: [
                    {
                        content: 'Lorem ipsum',
                        items: [
                            {
                                content: 'Lorem ipsum',
                                items: [
                                    {
                                        content: 'Lorem ipsum',
                                        items: [
                                            {
                                                content: 'Lorem ipsum',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    }, {
        content: 'Dolor sit amet',
    }, {
        content: 'Donec condimentum augue vitae rhoncus vehicula',
    }],
    style: 'unordered',
    additionalClasses: [],
};
