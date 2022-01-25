import React from 'react';
import PropTypes from 'prop-types';

const Delimiter = ({ variant, style, additionalClasses, ...props }) => {
    const colorClasses = {
        primary: 'border-primary',
        secondary: 'border-secondary',
        success: 'border-success',
        danger: 'border-danger',
        warning: 'border-warning',
        info: 'border-info',
        light: 'border-light',
        dark: 'border-dark',
    };

    const styleClasses = {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
        double: 'border-double',
    };

    return (
        <hr
            className={['my-2', colorClasses[variant], styleClasses[style], ...additionalClasses].join(' ')}
            {...props}
        />
    );
};

Delimiter.propTypes = {
    /**
     * Delimiter variant
     */
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
    ]),
    /**
     * Delimiter style
     */
    style: PropTypes.oneOf(['solid', 'dashed', 'dotted', 'double']),
    /**
     * Additional classes for delimiter
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Delimiter.defaultProps = {
    variant: 'primary',
    style: 'solid',
    additionalClasses: [],
};

export default Delimiter;
