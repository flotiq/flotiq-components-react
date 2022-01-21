import React from 'react';
import Image from '../Image/Image';
import Video from '../Video/Video';
import Audio from '../Audio/Audio';

const File = ({ url, caption, stretched, extension, fileName }) => {
    if (isImage(extension)) {
        return <Image url={url} caption={caption} stretched={stretched} />;
    }
    if (isMovie(extension)) {
        return <Video url={url} caption={caption} stretched={stretched} />;
    }
    if (isAudio(extension)) {
        return <Audio url={url} caption={caption} stretched={stretched} />;
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

export default File;
