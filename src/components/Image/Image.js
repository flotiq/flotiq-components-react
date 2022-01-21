import React from 'react';

const Image = ({ url, caption, stretched }) => (
    <>
        <img
            src={url}
            alt={caption}
            className={stretched === 'true'
                ? 'text-content-image-image text-content-image-image__stretched'
                : 'text-content-image-image'}
        />
        {caption && <p className="text-content-image-caption pt-2">{caption}</p>}
    </>
);

export default Image;
