import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/nord.css';

import { blocks } from './defaultContent/defaultContent';
import Content, { defaults } from '../components/Content/Content';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const ContentStory =  {
    title: 'Flotiq components/Content',
    component: Content,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

export default ContentStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Content {...args} highlight={highlight} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    blocks,
    ...defaults,
};
