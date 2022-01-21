import React from 'react';

const Video = ({ url, caption }) => (
    <div className="text-content-image pt-2 pb-2">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video width="320" height="240" controls>
            <source src={url} type="video/mp4" />
            <source src={url} type="video/ogg" />
            Your browser does not support the video tag.
        </video>
        <p className="text-content-image-caption pt-2">{caption}</p>
    </div>
);

export default Video;
