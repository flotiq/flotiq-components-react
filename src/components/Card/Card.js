import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardText from './CardText';
import { Context } from './Context';
import { roundedProps } from '../../defaultProps/rounded';

const calcBasisClass = (scale, isHorizontal, breakpoint = 'md') => {
    if (scale && isHorizontal) {
        return `${breakpoint}:fq-basis-${scale}`;
    }
    return '';
};

/**
 * Complex component for displaying card like elements
 */
const Card = ({ children,
    rounded,
    bordered,
    horizontal,
    proportionsForHorizontal,
    additionalClasses,
    ...props }) => {
    const borderedClass = bordered ? 'fq-border fq-border-gray-200' : '';
    const directionClasses = horizontal ? 'fq-flex fq-flex-wrap fq-justify-between fq-align-start' : 'fq-flex-none';

    const context = useMemo(() => ({
        horizontal,
        basisClassImage: calcBasisClass(
            proportionsForHorizontal?.img,
            horizontal,
            proportionsForHorizontal?.breakpoint,
        ),
        basisClassBody: calcBasisClass(
            proportionsForHorizontal?.body,
            horizontal,
            proportionsForHorizontal?.breakpoint,
        ),
    }), [horizontal, proportionsForHorizontal]);

    return (
        <Context.Provider value={context}>
            <div
                className={[
                    directionClasses,
                    'fq-bg-white',
                    'fq-overflow-hidden',
                    roundedProps.classSet[rounded],
                    borderedClass,
                    ...additionalClasses,
                ].join(' ')}
                {...props}
            >
                {children}
            </div>
        </Context.Provider>
    );
};

Card.propTypes = {
    /**
     * Is this the rounded card?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    /**
     * Should the card has a border?
     */
    bordered: PropTypes.bool,
    /**
     * Should the card be horizontal?
     */
    horizontal: PropTypes.bool,
    /**
     * Should the card be horizontal?
     */
    proportionsForHorizontal: PropTypes.shape({
        body: PropTypes.string,
        img: PropTypes.string,
        breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    }),
    /**
     * Additional classes for card
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Card.defaultProps = {
    rounded: 'lg',
    bordered: true,
    horizontal: false,
    additionalClasses: [],
    proportionsForHorizontal: { body: '1/2', img: '1/2', breakpoint: 'md' },
};

export default Object.assign(Card, {
    Body: CardBody,
    Title: CardTitle,
    Img: CardImg,
    Text: CardText,
});
