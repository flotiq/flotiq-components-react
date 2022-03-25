import React from 'react';
import PropTypes from 'prop-types';

/**
 * Header text of body in card like component
 */
const CardTitle = ({ children, additionalClasses = [], ...props }) => (
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

CardTitle.defaultProps = {
    additionalClasses: [],
};

export default CardTitle;
