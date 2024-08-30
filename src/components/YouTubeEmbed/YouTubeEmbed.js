import React from 'react';
import PropTypes from 'prop-types';

export const defaults = {
    title: 'Youtube video',
    allowFullScreen: true,
    additionalClasses: [],
};

/**
 * Component for displaying iframe with YouTube video
 */
const YouTubeEmbed = ({
    url,
    title = defaults.title,
    allowFullScreen = defaults.allowFullScreen,
    additionalClasses = defaults.additionalClasses,
    ...props
}) => {
    let safeUrl = url.replace('/watch?v=', '/embed/');
    safeUrl = safeUrl.replace('youtu.be/', 'www.youtube.com/embed/');
    return (
        <div className="height-0 pb-[56.25%] relative">
            <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={safeUrl}
                frameBorder="0"
                allowFullScreen={allowFullScreen}
                title={title}
                className={['absolute', 'w-full', 'h-full', ...additionalClasses].join(' ')}
                {...props}
            />
        </div>
    );
};

export const youTubeEmbedPropTypes = {
    /**
     * YouTube url
     */
    url: PropTypes.string,
    /**
     * Title of iframe
     */
    title: PropTypes.string,
    /**
     * Does the video should allow to be put in fullscreen mode
     */
    allowFullScreen: PropTypes.bool,
    /**
     * Additional classes for embed
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

YouTubeEmbed.propTypes = {
    ...youTubeEmbedPropTypes,
    /**
     * YouTube url
     */
    url: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
