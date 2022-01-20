import React from 'react';
import Announcement from '../components/Announcement/Announcement';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Announcement',
    component: Announcement,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
        textAlignment: { control: 'select' },
        textSize: { control: 'select' },
        textColor: { control: 'color' },
        rounded: { control: 'inline-radio' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Announcement {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    ...Announcement.defaultProps,
    content: 'Your content here...',
    // without other, non required properties, storybook should render a good-looking basic module
};
