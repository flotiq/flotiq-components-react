import React from 'react';

import { Paragraph } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Paragraph',
    component: Paragraph,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        alignement: { control: 'select' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Paragraph {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum augue vitae rhoncus vehicula.'
        + ' Phasellus aliquam leo eu porta scelerisque. In et vestibulum ex. Aliquam erat volutpat.'
        + ' Nullam vehicula tortor vitae lorem egestas imperdiet.'
        + ' Vestibulum molestie sem mollis, commodo neque vitae, posuere urna.'
        + ' Integer malesuada congue dui vel tincidunt. Nunc dictum diam et nibh ultricies, et luctus lorem porttitor.',
    ...Paragraph.defaultProps,
};
