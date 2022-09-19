import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for standard text
 */
const Paragraph = ({ alignment, additionalClasses, children, ...props }) => {
    const alignmentClass = {
        left: 'fq-text-left',
        center: 'fq-text-center',
        right: 'fq-text-right',
    };
    return React.isValidElement(children) ? (
        <div
            className={[
                'fq-base',
                'fq-py-2',
                alignmentClass[alignment],
                ...additionalClasses,
            ].join(' ')}
            {...props}
        >
            {children}
        </div>
    ) : (
        <div
            className={[
                'fq-base',
                'fq-py-2',
                alignmentClass[alignment],
                ...additionalClasses,
            ].join(' ')}
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
