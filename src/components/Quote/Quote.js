import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ text, caption, variant, additionalClasses, ...props }) => {
    const colorClasses = {
        primary: { text: 'border-primary', caption: 'bg-primary text-white' },
        secondary: { text: 'border-secondary', caption: 'bg-secondary text-white' },
        success: { text: 'border-success', caption: 'bg-success text-white' },
        danger: { text: 'border-danger', caption: 'bg-danger text-white' },
        warning: { text: 'border-warning', caption: 'bg-warning text-black' },
        info: { text: 'border-info', caption: 'bg-info text-black' },
        light: { text: 'border-light', caption: 'bg-light text-black' },
        dark: { text: 'border-dark', caption: 'bg-dark text-white' },
        transparent: { text: 'border-transparent', caption: 'bg-transparent text-black' },
    };
    return (
        <div className={['px-12 md:px-28 flex flex-col', ...additionalClasses].join(' ')} {...props}>
            <p className={['px-8 md:px-12 border-l-4 border-primary', colorClasses[variant].text].join(' ')}>{text}</p>
            <p
                className={[
                    'self-end bg-primary mt-3 mr-12 px-8 py-1.5 rounded text-white',
                    colorClasses[variant].caption,
                ].join(' ')}
            >
                {caption}
            </p>
        </div>
    );
};

Quote.propTypes = {
    /**
     * Quote content
     */
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    /**
     * Quote caption
     */
    caption: PropTypes.string.isRequired,
    /**
     * Quote variant
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
     * Additional classes for quote
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Quote.defaultProps = {
    variant: 'primary',
    additionalClasses: [],
};

export default Quote;
