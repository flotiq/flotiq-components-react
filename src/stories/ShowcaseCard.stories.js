import React from 'react';

import ShowcaseCard from '../components/ShowcaseCard/ShowcaseCard';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/ShowcaseCard',
    component: ShowcaseCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
    <ShowcaseCard {...args} />
);

export const Standard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standard.args = {
    title: 'Kyan - blog screenshot',
    // eslint-disable-next-line max-len
    exceptr: 'The total package with which you can build beautiful, high converting and professional The total package witch you can build',
    src: 'https://api.flotiq.com/image/0x0/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.png',
    githubUrl: 'https://github.com',
    predefinedCTUrl: 'https://google.pl',
    srcAlt: 'Kyan blog screenshot',
    ...ShowcaseCard.defaultProps,
};
