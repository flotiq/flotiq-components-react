import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component for audio files
 */
const Audio = ({ url, caption, extension, additionalClasses, ...props }) => (
    <div className={['fq-base flex flex-col', ...additionalClasses].join(' ')}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio controls className="w-full" {...props}>
            <source src={url} type={`audio/${extension}`} />
            Your browser does not support the audio element.
        </audio>
        {caption && <p className="pt-2 md:pt-5 opacity-70 italic">{caption}</p>}
    </div>
);

Audio.propTypes = {
    /**
     * File url
     */
    url: PropTypes.string.isRequired,
    /**
     * File extension
     */
    extension: PropTypes.string.isRequired,
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
    caption: null,
    additionalClasses: [],
};

export default Audio;
