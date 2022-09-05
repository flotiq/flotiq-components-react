import React from 'react';
import PropTypes from 'prop-types';
import { borderProps } from '../../defaultProps/border';

/**
 * Component for quote with caption
 */
const Quote = ({
    text, caption, variant, additionalClasses, quoteAdditionalClasses, captionAdditionalClasses, ...props
}) => (
    <div className={['fq-flex fq-flex-col fq-italic', ...additionalClasses].join(' ')} {...props}>
        {React.isValidElement(text) ? (
            <div
                className={[
                    'fq-pl-6 md:fq-pl-10 fq-py-4 fq-border-l-4',
                    borderProps.classSet[variant],
                    ...quoteAdditionalClasses,
                ].join(' ')}
            >
                {text}
            </div>
        ) : (
            <div
                className={[
                    'fq-pl-6 md:fq-pl-10 fq-py-4 fq-border-l-4',
                    borderProps.classSet[variant],
                    ...quoteAdditionalClasses,
                ].join(' ')}
                dangerouslySetInnerHTML={{ __html: text }}
            />
        )}
        { caption
            && (
                <p
                    className={[
                        'fq-self-end fq-mt-3 fq-py-1.5 fq-opacity-70',
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

Quote.defaultProps = {
    variant: borderProps.defaultValue,
    additionalClasses: [],
    quoteAdditionalClasses: [],
    captionAdditionalClasses: [],
};

export default Quote;
