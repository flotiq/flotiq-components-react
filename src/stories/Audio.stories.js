import React from 'react';

import Audio, { defaults } from '../components/Audio/Audio';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const AudioStory = {
    title: 'Flotiq components/Audio',
    component: Audio,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default AudioStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Audio {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    url: 'https://api.flotiq.com/file/_media-4e30edc8-d1b5-45a1-842a-80f5e8467121.mp3',
    extension: 'mp3',
    ...defaults,
};
