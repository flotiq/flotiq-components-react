import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';

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
        sm: 'px-8 py-3 text-sm',
        md: 'px-12 py-4 text-base',
        lg: 'px-16 py-5 text-lg',
    };
    const bgClasses = {
        primary: 'bg-primary hover:bg-primary-600 text-white',
        secondary: 'bg-secondary hover:bg-secondary-400 text-white',
        success: 'bg-success hover:bg-success-600 text-white',
        danger: 'bg-danger hover:bg-danger-600 text-white',
        warning: 'bg-warning hover:bg-warning-600 text-black',
        info: 'bg-info hover:bg-info-600 text-black',
        light: 'bg-light hover:bg-light-600 text-black',
        dark: 'bg-dark hover:bg-dark-400 text-white',
        transparent: 'bg-transparent text-black',
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={[
                'inline-flex',
                'items-center',
                'leading-4',
                'font-medium',
                roundedProps.classSet[rounded],
                'shadow-sm',
                bgClasses[variant],
                'transition-colors',
                'duration-200',
                'ease-in-out',
                'focus:outline-none',
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
    variant: 'primary',
    rounded: roundedProps.defaultValue,
};

export default Button;
