import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';

/**
 * Component for displaying product showcase card
 */
const ShowcaseCard = ({ rounded, additionalClasses, ...props }) => (

    <div
        className={[
            'max-w-sm p-6 bg-white hover:shadow-xl transition-all transform duration-300',
            roundedProps.classSet[rounded],
            ...additionalClasses,
        ].join(' ')}
        {...props}
    >
        <div className="h-[300px]" />
    </div>

);

ShowcaseCard.propTypes = {
    /**
     * Is this the rounded card?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    /**
     * Additional classes for card
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
};

ShowcaseCard.defaultProps = {
    rounded: 'lg',
    additionalClasses: [],
};

export default ShowcaseCard;
