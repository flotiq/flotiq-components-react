import React from 'react';

import Warning, { defaults } from '../components/Warning/Warning';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const WarningStory = {
    title: 'Flotiq components/Warning',
    component: Warning,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default WarningStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Warning {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    title: 'WARNING',
    message: 'Lorem ipsum dolor sit amet',
    ...defaults,
};
