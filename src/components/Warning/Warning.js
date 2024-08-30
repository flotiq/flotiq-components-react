import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    additionalClasses: [],
};

/**
 * Component for displaying warnings
 */
const Warning = ({ message, title, additionalClasses = defaults.additionalClasses, ...props }) => (
    <div className={['bg-warning-200 p-6', ...additionalClasses].join(' ')} {...props}>
        <p className="font-bold text-xl text-warning-800">{title}</p>
        <hr className="my-4 border-warning-600" />
        <p className="text-warning-800">{message}</p>
    </div>
);

export const warningPropTypes = {
    /**
     * Warning message
     */
    message: PropTypes.string,
    /**
     * Warning title
     */
    title: PropTypes.string,
    /**
     * Additional classes for warning
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Warning.propTypes = {
    ...warningPropTypes,
    /**
     * Warning message
     */
    message: PropTypes.string.isRequired,
    /**
     * Warning title
     */
    title: PropTypes.string.isRequired,
};

export default Warning;
