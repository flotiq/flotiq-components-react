import React from 'react';
import PropTypes from 'prop-types';

const YouTubeEmbed = ({
    url,
    width = 640,
    height = 360,
    title = 'Youtube video',
    allowFullScreen = true,
    additionalClasses = [],
}) => {
    const safeUrl = url.replace('/watch?v=', '/embed/');
    return (
        <iframe
            id="ytplayer"
            type="text/html"
            width={width}
            height={height}
            src={safeUrl}
            frameBorder="0"
            allowFullScreen={allowFullScreen}
            title={title}
            className={additionalClasses.join(' ')}
        />
    );
};

YouTubeEmbed.propTypes = {
    /**
     * Level of header
     */
    url: PropTypes.string.isRequired,
    /**
     * Iframe width
     */
    width: PropTypes.number,
    /**
     * Iframe width
     */
    height: PropTypes.number,
    /**
     * Title of iframe
     */
    title: PropTypes.string,
    /**
     * Does the video should allow to be put in fullscreen mode
     */
    allowFullScreen: PropTypes.bool,
    /**
     * Additional classes for button
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

YouTubeEmbed.defaultProps = {
    width: 640,
    height: 360,
    title: 'Youtube video',
    allowFullScreen: true,
    additionalClasses: [],
};

export default YouTubeEmbed;
