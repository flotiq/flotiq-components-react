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
    excerpt: 'The total package with which you can build beautiful, high converting and professional The total package witch you can build',
    thumbnailSrc: 'https://api.flotiq.com/image/0x0/_media-3a62e398-fbe3-46e8-ba5b-05a2690390ae.png',
    thumbnailSrcAlt: 'Kyan blog screenshot',
    githubUrl: 'https://github.com',
    predefinedCTUrl: 'https://google.pl',
    demoUrl: 'https://google.pl',
    category: 'Blog',
    tagIcon: 'https://api.flotiq.com/image/_media-1e61700a-80a9-4e0c-96ef-47fd5b165035.svg', 
    starterPageUrl: 'https://google.pl',
    ...ShowcaseCard.defaultProps,
};
