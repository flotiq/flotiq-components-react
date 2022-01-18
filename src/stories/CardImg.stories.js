import React from 'react';

import { Card } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Card/Card Image',
    component: Card.Img,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card.Img {...args} />;

export const Image = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Image.args = {
    // eslint-disable-next-line max-len
    src: 'https://flotiq.com/blog/static/8050fcb7456bc70ea329293be5f34f40/e3fc1/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.webp',
    alt: 'Test',
    additionalClasses: [],
    additionalContainerClasses: [],
};
