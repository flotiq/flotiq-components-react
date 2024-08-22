import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    additionalClasses: [],
};

/**
 * Standard text part of body in card like component
 */
const CardText = ({ children, additionalClasses = defaults.additionalClasses, ...props }) => (
    <p className={['text-base', 'font-light', 'my-4', ...additionalClasses].join(' ')} {...props}>
        {children}
    </p>
);

CardText.propTypes = {
    /**
     * Additional classes for card text
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

export default CardText;
