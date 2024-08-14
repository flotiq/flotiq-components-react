import React from 'react';
import PropTypes from 'prop-types';
import { borderProps } from '../../defaultProps/border';

export const defaults = {
    variant: borderProps.defaultValue,
    additionalClasses: [],
    quoteAdditionalClasses: [],
    captionAdditionalClasses: [],
};

/**
 * Component for quote with caption
 */
const Quote = ({
    text,
    caption,
    variant = defaults.variant,
    additionalClasses = defaults.additionalClasses,
    quoteAdditionalClasses = defaults.quoteAdditionalClasses,
    captionAdditionalClasses = defaults.captionAdditionalClasses,
    ...props
}) => (
    <div className={['flex flex-col italic', ...additionalClasses].join(' ')} {...props}>
        {React.isValidElement(text) ? (
            <div
                className={[
                    'pl-6 md:pl-10 py-4 border-l-4', borderProps.classSet[variant], ...quoteAdditionalClasses,
                ].join(' ')}
            >
                {text}
            </div>
        ) : (
            <div
                className={[
                    'pl-6 md:pl-10 py-4 border-l-4', borderProps.classSet[variant], ...quoteAdditionalClasses,
                ].join(' ')}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        )}
        { caption
            && (
                <p
                    className={[
                        'self-end mt-3 py-1.5 opacity-70',
                        ...captionAdditionalClasses,
                    ].join(' ')}
                >
                    {caption}
                </p>
            )}
    </div>
);

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
     * Additional classes for quote container
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for quote
     */
    quoteAdditionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for quote caption
     */
    captionAdditionalClasses: PropTypes.arrayOf(PropTypes.string),
};

export default Quote;
