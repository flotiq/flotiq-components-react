import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';

export const defaults = {
    caption: null,
    stretched: false,
    rounded: 'none',
    additionalClasses: [],
    captionAdditionalClasses: [],
};

/**
 * Component for displaying images
 */
const Image = ({
    url,
    caption = defaults.caption,
    stretched = defaults.stretched,
    rounded = defaults.rounded,
    additionalClasses = defaults.additionalClasses,
    captionAdditionalClasses = defaults.captionAdditionalClasses,
    ...props
}) => (
    <>
        <img
            src={url}
            alt={caption}
            className={[
                (stretched ? 'w-full' : ''), roundedProps.classSet[rounded], ...additionalClasses,
            ].join(' ')}
            {...props}
        />
        {caption && (
            <p
                className={['pt-2 opacity-70 italic', ...captionAdditionalClasses].join(' ')}
                dangerouslySetInnerHTML={{ __html: caption }}
            />
        )}
    </>
);

Image.propTypes = {
    /**
     * Image url
     */
    url: PropTypes.string.isRequired,
    /**
     * Image caption
     */
    caption: PropTypes.string,
    /**
     * Does image should be stretched
     */
    stretched: PropTypes.bool,
    /**
     * Image roundness?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),
    /**
     * Additional classes for image
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for image caption
     */
    captionAdditionalClasses: PropTypes.arrayOf(PropTypes.string),
};

export default Image;
