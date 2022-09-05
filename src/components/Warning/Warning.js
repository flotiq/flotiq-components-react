import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for displaying warnings
 */
const Warning = ({ message, title, additionalClasses, ...props }) => (
    <div className={['fq-bg-warning-200 fq-p-6', ...additionalClasses].join(' ')} {...props}>
        <p className="fq-font-bold fq-text-xl fq-text-warning-800">{title}</p>
        <hr className="fq-my-4 fq-border-warning-600" />
        <p className="fq-text-warning-800">{message}</p>
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
