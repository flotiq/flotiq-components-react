import React from 'react';
import PropTypes from 'prop-types';
import { borderProps } from '../../defaultProps/border';

/**
 * Component for separating content
 */
const Delimiter = ({ variant, style, additionalClasses, ...props }) => {
    const styleClasses = {
        solid: 'fq-border-solid',
        dashed: 'fq-border-dashed',
        dotted: 'fq-border-dotted',
    };

    return (
        <hr
            className={[
                'fq-base',
                'fq-my-2',
                borderProps.classSet[variant],
                styleClasses[style],
                ...additionalClasses,
            ].join(' ')}
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
    style: PropTypes.oneOf(['solid', 'dashed', 'dotted']),
    /**
     * Additional classes for delimiter
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Delimiter.defaultProps = {
    variant: borderProps.defaultValue,
    style: 'solid',
    additionalClasses: [],
};

export default Delimiter;
