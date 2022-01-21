import React from 'react';

import { Header } from '../components';

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
    level: 1,
    text: 'Heading 1',
    alignement: 'left',
    additionalClasses: [],
};

export const Level2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level2.args = {
    level: 2,
    text: 'Heading 2',
    alignement: 'center',
    additionalClasses: [],
};

export const Level3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level3.args = {
    level: 3,
    text: 'Heading 3',
    alignement: 'right',
    additionalClasses: [],
};

export const Level4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level4.args = {
    level: 4,
    text: 'Heading 4',
    alignement: 'left',
    additionalClasses: [],
};

export const Level5 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level5.args = {
    level: 5,
    text: 'Heading 5',
    alignement: 'left',
    additionalClasses: [],
};

export const Level6 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Level6.args = {
    level: 6,
    text: 'Heading 6',
    alignement: 'left',
    additionalClasses: [],
};
