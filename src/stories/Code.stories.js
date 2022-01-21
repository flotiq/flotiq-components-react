import React from 'react';
import highlight from 'highlight.js';
import 'highlight.js/styles/nord.css';

import { Code } from '../index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Flotiq components/Code',
    component: Code,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
    },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Code {...args} highlight={highlight} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
    code: "import React, { useEffect } from 'react';\n"
        + "import PropTypes from 'prop-types';\n"
        + 'const Code = ({ code, language, highlight, additionalClasses, ...props }) => {\n'
        + '    useEffect(() => {\n'
        + '        if (highlight) {\n'
        + '            highlight.highlightAll();\n'
        + '        }\n'
        + '    }, [highlight]);\n'
        + '    let CodeToDisplay = code;\n'
        + '    let lang = language;\n'
        + "    if (code.indexOf('```') === 0) {\n"
        + "        lang = code.split('```')[1];\n"
        + "        const blocks = code.split('\\n');\n"
        + '        blocks.splice(0, 1);\n'
        + "        CodeToDisplay = blocks.join('\\n');\n"
        + '    }\n'
        + '    return null;\n'
        + '};\n'
        + 'export default Code;',
    language: 'javascript',
    additionalClasses: [],
};
