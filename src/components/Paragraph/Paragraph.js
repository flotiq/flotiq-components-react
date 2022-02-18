import React from 'react';
import PropTypes from 'prop-types';
import { sanitize } from 'isomorphic-dompurify';

/**
 * Component for standard text
 */
const Paragraph = ({ text, alignment, additionalClasses, ...props }) => {
    const alignmentClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    return React.isValidElement(text) ? (
        <p
            className={['py-2', alignmentClass[alignment], ...additionalClasses].join(' ')}
            {...props}
        >
            {text}
        </p>
    ) : (
        <p
            className={['py-2', alignmentClass[alignment], ...additionalClasses].join(' ')}
            dangerouslySetInnerHTML={{ __html: sanitize(text) }}
            {...props}
        />
    );
};

Paragraph.propTypes = {
    /**
     * Paragraph content
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    /**
     * Paragraph alignment
     */
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * Additional classes for paragraph
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Paragraph.defaultProps = {
    alignment: 'left',
    additionalClasses: [],
};

export default Paragraph;
