import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

const CardBody = ({ children, additionalClasses = [] }) => {
    const context = useContext(Context);
    const directionClass = context && context.vertical
        ? 'flex flex-col items-start justify-between basis-full' : '';
    let basisClass = '';
    if (context && context.vertical && context.proportionsForVertical && context.proportionsForVertical.body) {
        const { body, breakpoint } = context.proportionsForVertical;
        basisClass = ` ${breakpoint ?? 'md'}:basis-${body}`;
    }
    useEffect(() => {
        if (context && context.vertical && context.proportionsForVertical && context.proportionsForVertical.img) {
            const { body, breakpoint } = context.proportionsForVertical;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            basisClass = ` ${breakpoint ?? 'md'}:basis-${body}`;
        }
    }, [context]);
    return (
        <div className={[
            'px-5',
            'pt-5',
            'pb-2',
            'md:px-6',
            'md:pt-6',
            directionClass,
            basisClass,
            ...additionalClasses,
        ].join(' ')}
        >
            {children}
        </div>

    );
};

CardBody.propTypes = {
    /**
     * Additional classes for card body
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

CardBody.defaultProps = {
    additionalClasses: [],
};

export default CardBody;
