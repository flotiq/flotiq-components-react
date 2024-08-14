import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

export const defaults = {
    additionalClasses: [],
    additionalContainerClasses: [],
    alt: false,
    imageAdditionalProps: {},
};

/**
 * Component for image in card like component
 */
const CardImg = ({
    src,
    alt = defaults.alt,
    additionalClasses = defaults.additionalClasses,
    additionalContainerClasses = defaults.additionalContainerClasses,
    imageAdditionalProps = defaults.imageAdditionalProps,
    ...props
}) => {
    const context = useContext(Context);

    return (
        <div
            className={[
                context.basisClassImage,
                ...additionalContainerClasses,
            ].join(' ')}
            {...props}
        >
            <img src={src} alt={alt} className={additionalClasses.join(' ')} {...imageAdditionalProps} />
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
    /**
     * Additional props for image
     */
    imageAdditionalProps: PropTypes.shape({}),
};

export default CardImg;
