import React from 'react';

import Video, { defaults } from '../components/Video/Video';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const VideoStory = {
    title: 'Flotiq components/Video',
    component: Video,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default VideoStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Video {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    url: 'https://api.flotiq.com/image/0x0/_media-768b6c18-5bf4-44aa-8361-3ef6045dc4b4.mp4',
    extension: 'mp4',
    ...defaults,
};
