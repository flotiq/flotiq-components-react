import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

/**
 * Component for image in card like component
 */
const CardImg = ({
    src,
    alt,
    additionalClasses = [],
    additionalContainerClasses = [],
    imageAdditionalProps = {},
    ...props
}) => {
    const context = useContext(Context);

    return (
        <div
            className={[
                'fq-base',
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

CardImg.defaultProps = {
    additionalClasses: [],
    additionalContainerClasses: [],
    alt: false,
    imageAdditionalProps: {},
};

export default CardImg;
