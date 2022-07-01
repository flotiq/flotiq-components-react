import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import Delimiter from '../Delimiter/Delimiter';
import Header from '../Header/Header';

/**
 * Component for displaying product showcase card
 */
const ShowcaseCard = ({ title, exceptr, src, srcAlt, githubUrl, predefinedCTUrl, rounded, additionalClasses, ...props }) => (

    <div
        className={[
            'max-w-sm p-6 bg-white hover:shadow-xl transition-all transform duration-300',
            roundedProps.classSet[rounded],
            ...additionalClasses,
        ].join(' ')}
        {...props}
    >
        <div className="w-full aspect-w-1 aspect-h-1
         bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8"
        >
            <img
                src={src}
                alt={srcAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
        </div>
        <div className="ml-1">
            <Header level={4}>{title}</Header>
            <p>
                { exceptr.substring(0, 110) }
                { exceptr.length >= 110 && '...' }
            </p>
            <Delimiter variant="light" />
            <a href={githubUrl} className="text-base font-medium mr-5" target="_blank" rel="noreferrer">
                Github
                <span className="text-blue-700 hover:text-blue-600" aria-hidden="true"> &rarr;</span>
            </a>
            <a href={predefinedCTUrl} className="text-base font-medium" target="_blank" rel="noreferrer">
                Start with predefined CT
                <span aria-hidden="true" className="text-blue-700 hover:text-blue-600">&rarr;</span>
            </a>
        </div>
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
