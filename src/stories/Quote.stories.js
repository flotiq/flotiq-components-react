import React from 'react';

import { Quote } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Quote',
    component: Quote,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Quote {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'secondary',
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'success',
};

export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Danger.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'danger',
};

export const Warning = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Warning.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'warning',
};

export const Info = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Info.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'info',
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'light',
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'dark',
};

export const Transparent = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Transparent.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    caption: 'lorem',
    ...Quote.defaultProps,
    variant: 'transparent',
};
