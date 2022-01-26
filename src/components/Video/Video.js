import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for video files
 */
const Video = ({ url, caption, extension, additionalClasses, ...props }) => (
    <div className={['text-content-image pt-2 pb-2', ...additionalClasses].join(' ')}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video width="100%" controls {...props}>
            <source src={url} type={`video/${extension}`} />
            Your browser does not support the video tag.
        </video>
        <p className="pt-2 opacity-70 italic">{caption}</p>
    </div>
);

Video.propTypes = {
    /**
     * Video url
     */
    url: PropTypes.string.isRequired,
    /**
     * File extension
     */
    extension: PropTypes.string.isRequired,
    /**
     * Video caption
     */
    caption: PropTypes.string,
    /**
     * Additional classes for video
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Video.defaultProps = {
    caption: null,
    additionalClasses: [],
};

export default Video;
