import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/nord.css';

import { Code } from '../index';
import CustomDocsPage from './CodeDocsPage.mdx';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
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

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Code {...args} highlight={highlight} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    code: 'const example = "Flotiq is great!"',
    language: 'javascript',
    ...Code.defaultProps,
};
