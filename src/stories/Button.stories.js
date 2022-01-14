import React from 'react';

import { Button } from '../components';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { control: 'text' },
        size: { control: 'inline-radio' },
        variant: { control: 'select' },
        rounded: { control: 'boolean' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    label: 'Button',
    variant: 'primary',
    rounded: true,
    additionalClasses: [],
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
    variant: 'secondary',
    rounded: true,
    additionalClasses: [],
};

export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: 'lg',
    variant: 'info',
    rounded: true,
    additionalClasses: [],
};

export const MediumSquared = Template.bind({});
MediumSquared.args = {
    label: 'Button',
    size: 'md',
    variant: 'success',
    rounded: false,
    additionalClasses: [],
};
