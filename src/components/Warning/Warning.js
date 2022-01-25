import React from 'react';
import PropTypes from 'prop-types';

const Warning = ({ message, title, additionalClasses, ...props }) => (
    <div className={additionalClasses.join(' ')} {...props}>
        <p>{title}</p>
        <p>{message}</p>
    </div>
);

Warning.propTypes = {
    /**
     * Warning message
     */
    message: PropTypes.string.isRequired,
    /**
     * Warning title
     */
    title: PropTypes.string.isRequired,
    /**
     * Additional classes for warning
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Warning.defaultProps = {
    additionalClasses: [],
};

export default Warning;
