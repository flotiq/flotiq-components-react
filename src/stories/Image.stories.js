import React from 'react';

import Image, { defaults } from '../components/Image/Image';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const ImageStory = {
    title: 'Flotiq components/Image',
    component: Image,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        rounded: { control: 'inline-radio' },
    },
};

export default ImageStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    url: 'https://api.flotiq.com/image/0x0/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.png',
    ...defaults,
};
