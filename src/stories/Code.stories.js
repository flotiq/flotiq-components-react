import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/nord.css';

import CustomDocsPage from './Code.mdx';
import Code, { defaults } from '../components/Code/Code';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const CodeStory = {
    title: 'Flotiq components/Code',
    component: Code,
    parameters: {
        docs: {
            page: CustomDocsPage,
        },
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};
export default CodeStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Code {...args} highlight={highlight} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    children: 'const example = "Flotiq is great!"',
    ...defaults,
    language: 'javascript',
};
