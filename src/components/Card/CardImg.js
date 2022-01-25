import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

const CardImg = ({ src, alt, additionalClasses = [], additionalContainerClasses = [] }) => {
    const context = useContext(Context);

    return (
        <div className={[
            context.basisClassImage,
            ...additionalContainerClasses,
        ].join(' ')}
        >
            <img src={src} alt={alt} className={additionalClasses.join(' ')} />
        </div>
    );
};

CardImg.propTypes = {
    /**
     * Image source
     */
    src: PropTypes.string.isRequired,
    /**
     * Alternative text for image
     */
    alt: PropTypes.string,
    /**
     * Additional classes for image
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for image container
     */
    additionalContainerClasses: PropTypes.arrayOf(PropTypes.string),
};

CardImg.defaultProps = {
    additionalClasses: [],
    additionalContainerClasses: [],
    alt: false,
};

export default CardImg;
