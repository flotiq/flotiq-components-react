import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import { backgroundProps } from '../../defaultProps/background';

/**
 * Primary UI component for user interaction
 */
const Button = ({ label,
    onClick,
    variant,
    size,
    rounded,
    additionalClasses,
    ...props }) => {
    const sizeClass = {
        sm: 'fq-px-8 fq-py-3 fq-text-sm',
        md: 'fq-px-12 fq-py-4 fq-text-base',
        lg: 'fq-px-16 fq-py-5 fq-text-lg',
    };
    const hoverBackgroundClasses = {
        primary: 'hover:fq-bg-primary-600',
        secondary: 'hover:fq-bg-secondary-400',
        success: 'hover:fq-bg-success-600',
        danger: 'hover:fq-bg-danger-600',
        warning: 'hover:fq-bg-warning-600',
        info: 'hover:fq-bg-info-600',
        light: 'hover:fq-bg-light-600',
        dark: 'hover:fq-bg-dark-400',
        transparent: '',
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                'fq-inline-flex',
                'fq-items-center',
                'fq-leading-4',
                'fq-font-medium',
                roundedProps.classSet[rounded],
                'fq-shadow-sm',
                backgroundProps.classSet[variant],
                hoverBackgroundClasses[variant],
                'fq-transition-colors',
                'fq-duration-200',
                'fq-ease-in-out',
                'focus:fq-outline-none',
                sizeClass[size],
                ...additionalClasses,
            ].join(' ')}
            {...props}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * Is this the principal call to action on the page?
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
        'transparent',
    ]),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
   * Button contents
   */
    label: PropTypes.string.isRequired,
    /**
     * Is this the rounded button?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    /**
     * Additional classes for button
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: undefined,
    size: 'md',
    additionalClasses: [],
    variant: backgroundProps.defaultValue,
    rounded: roundedProps.defaultValue,
};

export default Button;
