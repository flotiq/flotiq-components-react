import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

const CardImg = ({ src, alt, additionalClasses = [], additionalContainerClasses = [] }) => {
    const context = useContext(Context);
    let directionClass = '';
    if (context && context.vertical && context.proportionsForVertical && context.proportionsForVertical.img) {
        const { img, breakpoint } = context.proportionsForVertical;
        directionClass = `basis-full ${breakpoint ?? 'md'}:basis-${img}`;
    }
    useEffect(() => {
        if (context && context.vertical && context.proportionsForVertical && context.proportionsForVertical.img) {
            const { img, breakpoint } = context.proportionsForVertical;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            directionClass = `basis-full ${breakpoint ?? 'md'}:basis-${img}`;
        }
    }, [context]);
    return (
        <div className={[directionClass, ...additionalContainerClasses].join(' ')}>
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
