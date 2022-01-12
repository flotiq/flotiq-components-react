import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, rounded = '2xl', ...props }) => {
    const mode = primary ? 'bg-blue-900' : 'bg-red-900';
    const borderRadius = { '2xl': 'rounded-2xl', xl: 'rounded-xl' };
    return (
        <button
            type="button"
            className={[
                'mt-20', borderRadius[rounded], 'storybook-button', `storybook-button--${size}`, mode,
            ].join(' ')}
            style={backgroundColor && { backgroundColor }}
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
    primary: PropTypes.bool,
    /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
    /**
   * How large should the button be?
   */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
   * Button contents
   */
    label: PropTypes.string.isRequired,
    /**
     * Border radius
     */
    rounded: PropTypes.oneOf(['xl', '2xl']),
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    rounded: '2xl',
    onClick: undefined,
};
