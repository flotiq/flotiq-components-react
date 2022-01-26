import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';

/**
 * Component for displaying images
 */
const Image = ({ url, caption, stretched, rounded, additionalClasses, ...props }) => (
    <>
        <img
            src={url}
            alt={caption}
            className={[stretched ? 'w-full' : '', roundedProps.classSet[rounded], ...additionalClasses].join(' ')}
            {...props}
        />
        {caption && <p className="pt-2 opacity-70 italic">{caption}</p>}
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
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    /**
     * Additional classes for image
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Image.defaultProps = {
    caption: null,
    stretched: false,
    rounded: 'none',
    additionalClasses: [],
};

export default Image;
