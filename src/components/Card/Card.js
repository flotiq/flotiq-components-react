import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardText from './CardText';
import { Context } from './Context';
import { roundedProps } from '../../defaultProps/rounded';

const calcBasisClass = (scale, isVertical, breakpoint = 'md') => {
    if (scale && isVertical) {
        return `${breakpoint}:basis-${scale}`;
    }
    return '';
};

/**
 * Complex component for displaying card like elements
 */
const Card = ({ children,
    rounded,
    bordered,
    vertical,
    proportionsForVertical,
    additionalClasses,
    ...props }) => {
    const borderedClass = bordered ? 'border border-gray-200' : '';
    const directionClasses = vertical ? 'flex flex-wrap justify-between align-start' : 'flex-none';

    const context = useMemo(() => ({
        vertical,
        basisClassImage: calcBasisClass(proportionsForVertical?.img, vertical, proportionsForVertical?.breakpoint),
        basisClassBody: calcBasisClass(proportionsForVertical?.body, vertical, proportionsForVertical?.breakpoint),
    }), [vertical, proportionsForVertical]);

    return (
        <Context.Provider value={context}>
            <div
                className={[
                    directionClasses,
                    'bg-white',
                    'overflow-hidden',
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
     * Should the card be vertical?
     */
    vertical: PropTypes.bool,
    /**
     * Should the card be vertical?
     */
    proportionsForVertical: PropTypes.shape({
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
    vertical: false,
    additionalClasses: [],
    proportionsForVertical: { body: '1/2', img: '1/2', breakpoint: 'md' },
};

export default Object.assign(Card, {
    Body: CardBody,
    Title: CardTitle,
    Img: CardImg,
    Text: CardText,
});
