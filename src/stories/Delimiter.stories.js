import React from 'react';

import Delimiter, { defaults } from '../components/Delimiter/Delimiter';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const DelimiterStory = {
    title: 'Flotiq components/Delimiter',
    component: Delimiter,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default DelimiterStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Delimiter {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    ...defaults,
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    ...defaults,
    variant: 'secondary',
    style: 'dashed',
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
    ...defaults,
    variant: 'success',
    style: 'dotted',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
    ...defaults,
    variant: 'danger',
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
    ...defaults,
    variant: 'warning',
};

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
    ...defaults,
    variant: 'info',
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
    ...defaults,
    variant: 'light',
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
    ...defaults,
    variant: 'dark',
};
