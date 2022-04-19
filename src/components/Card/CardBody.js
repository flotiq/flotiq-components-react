import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';

/**
 * Component for text body of card like component
 */
const CardBody = ({ children, additionalClasses = [], ...props }) => {
    const context = useContext(Context);

    return (
        <div
            className={[
                'px-5',
                'pt-5',
                'pb-2',
                'md:px-6',
                'md:pt-6',
                context.basisClassBody,
                ...additionalClasses,
            ].join(' ')}
            {...props}
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
