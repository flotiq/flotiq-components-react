import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

const CardBody = ({ children, additionalClasses = [] }) => {
    const context = useContext(Context);
    const directionClass = context && context.vertical
        ? 'flex flex-col items-start justify-between basis-full' : '';
    return (
        <div className={[
            'px-5',
            'pt-5',
            'pb-2',
            'md:px-6',
            'md:pt-6',
            directionClass,
            context.basisClassBody,
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
