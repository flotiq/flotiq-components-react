import React from 'react';
import PropTypes from 'prop-types';
import '../index.css';

export const Announcement = ({
    backgroundColor,
    textAlignment,
    textSize,
    color,
    content,
    // additionalClasses = [],
    rounded = 'xl',
    ...props }) => {
    const borderRadius = { '2xl': 'rounded-2xl', xl: 'rounded-xl', none: '' };
    const alignment = { left: 'text-left', center: 'text-center', right: 'text-right', none: '' };
    const fontSize = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-large',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
        none: '',
    };
    return (
        <div
            className={[
                'px-12 py-6', borderRadius[rounded], alignment[textAlignment], fontSize[textSize],
            ].join(' ')}
            style={(backgroundColor && { backgroundColor }) || (color && { color })}
            {...props}
        >
            {content}
        </div>
    );
};

Announcement.propTypes = {
    /**
   * What background color to use
   */
    backgroundColor: PropTypes.string,
    /**
   * Text alignment
   */
    textAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /**
   * Text size
   */
    textSize: PropTypes.oneOf([
        'xs',
        'sm',
        'base',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
    ]),
    /**
     * What text color to use
     */
    color: PropTypes.string,
    /**
   * Announcement content
   */
    content: PropTypes.string.isRequired,
    /**
     * Border radius
     */
    rounded: PropTypes.oneOf(['xl', '2xl']),
};

Announcement.defaultProps = {
    backgroundColor: null,
    textAlignment: null,
    textSize: 'base',
    color: null,
    rounded: 'xl',
};

export default Announcement;
