import React from 'react';
import PropTypes from 'prop-types';

/**
 * Standard text part of body in card like component
 */
const CardText = ({ children, additionalClasses = [], ...props }) => (
    <p className={['fq-text-base', 'fq-font-light', 'fq-my-4', ...additionalClasses].join(' ')} {...props}>
        {children}
    </p>
);

CardText.propTypes = {
    /**
     * Additional classes for card text
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

CardText.defaultProps = {
    additionalClasses: [],
};

export default CardText;
