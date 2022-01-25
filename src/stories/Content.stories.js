import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/nord.css';

import { Content } from '../index';
import { blocks } from './defaultContent/defaultContent';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Content',
    component: Content,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Content {...args} highlight={highlight} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    blocks,
    ...Content.defaultProps,
};
