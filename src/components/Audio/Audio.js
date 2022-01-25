import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({ url, caption, additionalClasses, ...props }) => (
    <div className={['flex flex-col', ...additionalClasses].join(' ')}>
        {caption && <p className="pb-2 md:pb-5">{caption}</p>}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls className="w-full" {...props}>
            <source src={url} type="audio/ogg" />
            <source src={url} type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
    </div>
);

Audio.propTypes = {
    /**
     * File url
     */
    url: PropTypes.string.isRequired,
    /**
     * File caption
     */
    caption: PropTypes.string,
    /**
     * Additional classes for audio
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Audio.defaultProps = {
    caption: '',
    additionalClasses: [],
};

export default Audio;
