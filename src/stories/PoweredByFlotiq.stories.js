import React from 'react';

import PoweredByFlotiq, { defaults } from '../components/PoweredByFlotiq/PoweredByFlotiq';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const PoweredByFlotiqStory = {
    title: 'Flotiq components/Powered by Flotiq',
    component: PoweredByFlotiq,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default PoweredByFlotiqStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <PoweredByFlotiq {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    ...defaults,
};

export const Badge = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Badge.args = {
    ...defaults,
    badge: true,
};
