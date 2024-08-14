import React from 'react';

import YouTubeEmbed, { defaults } from '../components/YouTubeEmbed/YouTubeEmbed';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const YouTubeEmbedStory = {
    title: 'Flotiq components/YouTube Embed',
    component: YouTubeEmbed,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default YouTubeEmbedStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <YouTubeEmbed {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    url: 'https://www.youtube.com/watch?v=w0JFqbDgKVQ',
    ...defaults,
};
