import React from 'react';

import { YouTubeEmbed } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/YouTube Embed',
    component: YouTubeEmbed,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <YouTubeEmbed {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    url: 'https://www.youtube.com/watch?v=w0JFqbDgKVQ',
    ...YouTubeEmbed.defaultProps,
};
