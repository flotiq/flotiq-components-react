import React from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import Video from '../Video/Video';
import Audio from '../Audio/Audio';

const File = ({ url, caption, stretched, extension, fileName, imageProps, videoProps, audioProps }) => {
    if (isImage(extension)) {
        return <Image url={url} caption={caption} stretched={stretched} {...imageProps} />;
    }
    if (isMovie(extension)) {
        return (
            <Video
                url={url}
                caption={caption}
                extension={extension}
                {...videoProps}
            />
        );
    }
    if (isAudio(extension)) {
        return (
            <Audio
                url={url}
                caption={caption}
                extension={extension}
                {...audioProps}
            />
        );
    }
    return (
        <div>
            <a href={url}>{fileName}</a>
        </div>
    );
};

const isMovie = (extension) => ['mp4', 'webm', 'ogv'].indexOf(extension) > -1;

const isImage = (extension) => ['jpg', 'png', 'bmp', 'svg', 'gif', 'webp', 'ico'].indexOf(extension) > -1;

const isAudio = (extension) => ['mpeg', 'mp3', 'mid', 'ogg', 'oga', 'wav'].indexOf(extension) > -1;

File.propTypes = {
    /**
     * File url
     */
    url: PropTypes.string.isRequired,
    /**
     * File caption
     */
    caption: PropTypes.string,
    /**
     * Does image should be stretched
     */
    stretched: PropTypes.bool,
    /**
     * File extension
     */
    extension: PropTypes.string.isRequired,
    /**
     * File name
     */
    fileName: PropTypes.string,
    /**
     * Additional props for image components
     */
    imageProps: PropTypes.shape({}),
    /**
     * Additional props for video components
     */
    videoProps: PropTypes.shape({}),
    /**
     * Additional props for audio components
     */
    audioProps: PropTypes.shape({}),
    /**
     * Additional classes for file
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

File.defaultProps = {
    caption: null,
    stretched: false,
    fileName: '',
    imageProps: {},
    videoProps: {},
    audioProps: {},
    additionalClasses: [],
};

export default File;
