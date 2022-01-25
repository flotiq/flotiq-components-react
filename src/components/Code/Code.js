import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Code = ({ code, language, highlight, additionalClasses, ...props }) => {
    useEffect(() => {
        if (highlight) {
            highlight.highlightAll();
        }
    }, [highlight]);
    let CodeToDisplay = code;
    let lang = language;
    if (code.indexOf('```') === 0) {
        // eslint-disable-next-line prefer-destructuring
        lang = code.split('```')[1];
        const blocks = code.split('\n');
        blocks.splice(0, 1);
        CodeToDisplay = blocks.join('\n');
    }
    return (
        <div
            className={additionalClasses.join(' ')}
            {...props}
        >
            <pre>
                <code
                    dangerouslySetInnerHTML={{ __html: CodeToDisplay }}
                    className={`language-${lang}`}
                />
            </pre>
        </div>
    );
};

Code.propTypes = {
    /**
     * Code content
     */
    code: PropTypes.string.isRequired,
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
