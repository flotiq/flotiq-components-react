import React from 'react';

import Header, { defaults } from '../components/Header/Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const HeaderStory = {
    title: 'Flotiq components/Header',
    component: Header,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        alignment: { control: 'select' },
    },
};

export default HeaderStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Header {...args} />;

export const Level1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level1.args = {
    ...defaults,
    children: 'Heading 1',
};

export const Level2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level2.args = {
    ...defaults,
    level: 2,
    children: 'What is a <b>CMS</b>',
    alignment: 'center',
};

export const Level3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level3.args = {
    ...defaults,
    level: 3,
    children: 'Heading 3',
    alignment: 'right',
};

export const Level4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level4.args = {
    ...defaults,
    level: 4,
    children: 'Heading 4',
};

export const Level5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level5.args = {
    ...defaults,
    level: 5,
    children: 'Heading 5',
};

export const Level6 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level6.args = {
    ...defaults,
    level: 6,
    children: 'Heading 6',
};
