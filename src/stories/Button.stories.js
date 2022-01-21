import React from 'react';

import Button from '../components/Button/Button';
import { roundedProps } from '../defaultProps/rounded';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Button',
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { control: 'text' },
        size: { control: 'inline-radio' },
        variant: { control: 'select' },
        rounded: { control: 'inline-radio' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    ...Button.defaultProps,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Button.defaultProps,
    label: 'Button',
    variant: 'secondary',
};

export const Large = Template.bind({});
Large.args = {
    ...Button.defaultProps,
    label: 'Button',
    size: 'lg',
    variant: 'info',
};

export const MediumSquared = Template.bind({});
MediumSquared.args = {
    ...Button.defaultProps,
    label: 'Button',
    variant: 'success',
    rounded: roundedProps.values[0],
};
