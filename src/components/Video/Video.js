import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    caption: null,
    additionalClasses: [],
};

/**
 * Component for video files
 */
const Video = ({
    url,
    caption = defaults.caption,
    extension,
    additionalClasses = defaults.additionalClasses,
    ...props
}) => (
    <div className={['text-content-image pt-2 pb-2', ...additionalClasses].join(' ')}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video width="100%" controls {...props}>
            <source src={url} type={`video/${extension}`} />
            Your browser does not support the video tag.
        </video>
        <p className="pt-2 opacity-70 italic">{caption}</p>
    </div>
);

export const videoPropTypes = {
    /**
     * Video url
     */
    url: PropTypes.string,
    /**
     * File extension
     */
    extension: PropTypes.string,
    /**
     * Video caption
     */
    caption: PropTypes.string,
    /**
     * Additional classes for video
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Video.propTypes = {
    ...videoPropTypes,
    /**
     * Video url
     */
    url: PropTypes.string.isRequired,
    /**
     * File extension
     */
    extension: PropTypes.string.isRequired,
};

export default Video;
