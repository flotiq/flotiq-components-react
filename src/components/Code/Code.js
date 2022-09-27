import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Component for highlighting code.
 * Install highlight.js to make the component looks like in the examples, we use nord.css
 */
const Code = ({ children, language, highlight, additionalClasses, ...props }) => {
    useEffect(() => {
        if (highlight) {
            highlight.highlightAll();
        }
    }, [highlight, language, children]);
    let CodeToDisplay = children;
    let lang = language;
    if (children.indexOf('```') === 0) {
        // eslint-disable-next-line prefer-destructuring
        lang = children.split('```')[1];
        const blocks = children.split('\n');
        blocks.splice(0, 1);
        CodeToDisplay = blocks.join('\n');
    }
    return (
        <div
            className={['fq-base', ...additionalClasses].join(' ')}
            {...props}
        >
            <pre>
                <code className={`language-${lang}`}>
                    {CodeToDisplay}
                </code>
            </pre>
        </div>
    );
};

Code.propTypes = {
    /**
     * Code content
     */
    children: PropTypes.string.isRequired,
    /**
     * Programming language name
     */
    language: PropTypes.string,
    /**
     * Additional classes for code
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Code.defaultProps = {
    language: 'bash',
    additionalClasses: [],
};

export default Code;
