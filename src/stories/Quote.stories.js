import React from 'react';

import { Quote } from '../index';
import { defaults } from '../components/Quote/Quote';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const QuoteStory = {
    title: 'Flotiq components/Quote',
    component: Quote,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default QuoteStory;

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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
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
    ...defaults,
    variant: 'transparent',
};
