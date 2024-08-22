import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    additionalClasses: [],
};

/**
 * Header text of body in card like component
 */
const CardTitle = ({ children, additionalClasses = defaults.additionalClasses, ...props }) => (
    <h2 className={['text-3xl', 'font-semibold', 'leading-10', ...additionalClasses].join(' ')} {...props}>
        {children}
    </h2>
);

CardTitle.propTypes = {
    /**
     * Additional classes for card body
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

export default CardTitle;
