import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, size, onClick }) => {
    const sizeClass = {
        sm: 'px-8 py-3 text-sm',
        md: 'px-12 py-4 text-md',
        lg: 'px-16 py-5 text-lg',
    };

    return (
        <button
            type="button"
            onClick={onClick}
            className={`
                inline-flex
                items-center
                ${sizeClass[size]}
                leading-4
                font-medium
                rounded-full
                shadow-sm
                text-white
                bg-primary
                hover:bg-primary-600
                transition-colors
                duration-200
                ease-in-out
                focus:outline-none`}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
   * Button contents
   */
    label: PropTypes.string.isRequired,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    onClick: undefined,
    size: 'sm',
};
