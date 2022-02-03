import React from 'react';

import { Header } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Header',
    component: Header,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        alignement: { control: 'select' },
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;

export const Level1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level1.args = {
    ...Header.defaultProps,
    text: 'Heading 1',
};

export const Level2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level2.args = {
    ...Header.defaultProps,
    level: 2,
    text: '<p>Heading 2</p>',
    alignement: 'center',
};

export const Level3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level3.args = {
    ...Header.defaultProps,
    level: 3,
    text: 'Heading 3',
    alignement: 'right',
};

export const Level4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level4.args = {
    ...Header.defaultProps,
    level: 4,
    text: 'Heading 4',
};

export const Level5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level5.args = {
    ...Header.defaultProps,
    level: 5,
    text: 'Heading 5',
};

export const Level6 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level6.args = {
    ...Header.defaultProps,
    level: 6,
    text: 'Heading 6',
};
