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
    ...ShowcaseCard.defaultProps,
};
