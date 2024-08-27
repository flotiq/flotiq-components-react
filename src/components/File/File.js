import React from 'react';
import PropTypes from 'prop-types';
import Image, { imagePropTypes } from '../Image/Image';
import Video, { videoPropTypes } from '../Video/Video';
import Audio, { audioPropTypes } from '../Audio/Audio';

export const defaults = {
    caption: null,
    stretched: false,
    fileName: '',
    imageProps: {},
    videoProps: {},
    audioProps: {},
    additionalClasses: [],
};

const File = ({
    url,
    caption = defaults.caption,
    stretched = defaults.stretched,
    extension,
    fileName = defaults.fileName,
    imageProps = defaults.imageProps,
    videoProps = defaults.videoProps,
    audioProps = defaults.audioProps,
    additionalClasses = defaults.additionalClasses,
}) => {
    if (isImage(extension)) {
        return <Image
            url={url}
            caption={caption}
            stretched={stretched}
            {...imageProps}
        />;
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
        <div className={additionalClasses.join(' ')}>
            <a href={url}>{fileName}</a>
        </div>
    );
};

const isMovie = (extension) => ['mp4', 'webm', 'ogv'].indexOf(extension) > -1;

const isImage = (extension) => ['jpg', 'png', 'bmp', 'svg', 'gif', 'webp', 'ico'].indexOf(extension) > -1;

const isAudio = (extension) => ['mpeg', 'mp3', 'mid', 'ogg', 'oga', 'wav'].indexOf(extension) > -1;

export const filePropTypes = {
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
    extension: PropTypes.string,
    /**
     * File name
     */
    fileName: PropTypes.string,
    /**
     * Additional props for image components, for more information check Image component
     */
    imageProps: PropTypes.shape(imagePropTypes),
    /**
     * Additional props for video components, for more information check Video component
     */
    videoProps: PropTypes.shape(videoPropTypes),
    /**
     * Additional props for audio components, for more information check Audio component
     */
    audioProps: PropTypes.shape(audioPropTypes),
    /**
     * Additional classes for file
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

File.propTypes = {
    /**
     * File url
     */
    url: PropTypes.string.isRequired,
    /**
     * File extension
     */
    extension: PropTypes.string.isRequired,
    ...filePropTypes,
};

export default File;
