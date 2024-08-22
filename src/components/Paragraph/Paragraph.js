import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    alignment: 'left',
    additionalClasses: [],
};

/**
 * Component for standard text
 */
const Paragraph = ({
    alignment = defaults.alignment,
    additionalClasses = defaults.additionalClasses,
    children, ...props
}) => {
    const alignmentClass = {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
        justify: 'text-justify',
    };
    return React.isValidElement(children) ? (
        <div
            className={['py-2', alignmentClass[alignment], ...additionalClasses].join(' ')}
            {...props}
        >
            {children}
        </div>
    ) : (
        <div
            className={['py-2', alignmentClass[alignment], ...additionalClasses].join(' ')}
            dangerouslySetInnerHTML={{ __html: children }}
            {...props}
        />
    );
};

Paragraph.propTypes = {
    /**
     * Paragraph content
     */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    /**
     * Paragraph alignment
     */
    alignment: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
    /**
     * Additional classes for paragraph
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

export default Paragraph;
