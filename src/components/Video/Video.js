import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ url, caption, additionalClasses, ...props }) => (
    <div className={['text-content-image pt-2 pb-2', ...additionalClasses].join(' ')}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video width="320" height="240" controls {...props}>
            <source src={url} type="video/mp4" />
            <source src={url} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        <p className="text-content-image-caption pt-2">{caption}</p>
    </div>
);

Video.propTypes = {
    /**
     * Video url
     */
    url: PropTypes.string.isRequired,
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
