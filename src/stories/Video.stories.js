import React from 'react';

import { Video } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Video',
    component: Video,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        alignement: { control: 'select' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Video {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    url: '',
    caption: 'Example video file',
    additionalClasses: [],
};
