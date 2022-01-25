import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = ({ text, alignement, additionalClasses, ...props }) => {
    const alignementClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
    };
    return (
        <p
            className={['text-base py-2', alignementClass[alignement], ...additionalClasses].join(' ')}
            dangerouslySetInnerHTML={{ __html: text }}
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
     * Paragraph alignement
     */
    alignement: PropTypes.oneOf(['left', 'center', 'right']),
    /**
     * Additional classes for paragraph
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Paragraph.defaultProps = {
    alignement: 'left',
    additionalClasses: [],
};

export default Paragraph;
