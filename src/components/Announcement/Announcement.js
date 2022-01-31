import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import { backgroundProps } from '../../defaultProps/background';

const Announcement = ({ variant,
    backgroundColor,
    textAlignment,
    textSize,
    textColor,
    content,
    additionalClasses,
    rounded,
    ...props }) => {
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
    const style = {};
    if (backgroundColor) { style.backgroundColor = backgroundColor; }
    if (textColor) { style.color = textColor; }
    return (
        <div
            className={[
                'px-12 py-6',
                backgroundProps.classSet[variant],
                roundedProps.classSet[rounded],
                alignment[textAlignment],
                fontSize[textSize],
                ...additionalClasses,
            ].join(' ')}
            style={style}
            {...props}
        >
            {content}
        </div>
    );
};

Announcement.propTypes = {
    /**
     * What color variant to use?
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
   * What background color to use? Background color will override variant colors
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
     * What text color to use?  Text color will override variant colors
     */
    textColor: PropTypes.string,
    /**
   * Announcement content
   */
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    /**
     * Border radius
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    /**
     * Additional classes for button
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Announcement.defaultProps = {
    variant: backgroundProps.defaultValue,
    backgroundColor: null,
    textAlignment: null,
    textSize: 'base',
    textColor: null,
    rounded: 'lg',
    additionalClasses: [],
};

export default Announcement;
