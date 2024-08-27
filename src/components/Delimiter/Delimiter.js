import React from 'react';
import PropTypes from 'prop-types';
import { borderProps } from '../../defaultProps/border';

export const defaults = {
    variant: borderProps.defaultValue,
    style: 'solid',
    additionalClasses: [],
};

/**
 * Component for separating content
 */
const Delimiter = ({
    variant = defaults.variant,
    style = defaults.style,
    additionalClasses = defaults.additionalClasses,
    ...props
}) => {
    const styleClasses = {
        solid: 'border-solid',
        dashed: 'border-dashed',
        dotted: 'border-dotted',
    };

    return (
        <hr
            className={['my-2', borderProps.classSet[variant], styleClasses[style], ...additionalClasses].join(' ')}
            {...props}
        />
    );
};

export const delimiterPropTypes = {
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
    style: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
    /**
     * Additional classes for delimiter
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Delimiter.propTypes = delimiterPropTypes;

export default Delimiter;
