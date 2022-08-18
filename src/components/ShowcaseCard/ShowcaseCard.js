import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import Delimiter from '../Delimiter/Delimiter';
import Header from '../Header/Header';
import LiveDemoIcon from '../../stories/assets/live-demo.svg';
import ArrowTopRightIcon from '../../stories/assets/arrow-top-right.svg';

/**
 * Component for displaying product showcase card
 */
const ShowcaseCard = ({
    title,
    exceptr,
    src,
    srcAlt,
    githubUrl,
    predefinedCTUrl,
    starterPageUrl,
    demoUrl,
    rounded,
    additionalClasses,
    additionalCategoryClasses,
    additionalLiveDemoClasses,
    category,
    tagIcon,
    ...props
}) => (

    <div
        className={[
            'max-w-sm',
            'p-0',
            'bg-white',
            'hover:shadow-xl',
            'transition-all',
            'transform',
            'duration-300',
            'overflow-hidden',
            'parent-hover-display-anchor',
            roundedProps.classSet[rounded],
            ...additionalClasses,
        ].join(' ')}
        {...props}
    >

        <div className="w-full aspect-w-1 aspect-h-1
        bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative"
        >
            <a
                href={starterPageUrl}
                target="_blank"
                rel="noreferrer"
            >
                <div className="absolute w-full top-0 left-0 h-full z-index-1
                opacity-[0.6] bg-secondary children-display-anchor"
                />
            </a>
            {category && src && (
                <span className={[
                    'absolute',
                    'text-white',
                    'text-sm',
                    'bg-primary-600',
                    'px-4',
                    'p-1',
                    'left-5',
                    'top-5',
                    'rounded-[6px]',
                    'color-primary',
                    roundedProps.classSet[rounded],
                    ...additionalCategoryClasses,
                ].join(' ')}
                >
                    {category}
                </span>
            )}

            {demoUrl && src && (
                <a
                    href={demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={[
                        'absolute',
                        'text-black',
                        'text-sm',
                        'bg-white',
                        'px-4',
                        'py-2',
                        'left-5',
                        'bottom-5',
                        'rounded-[40px]',
                        'color-primary',
                        'flex',
                        'items-center',
                        'opacity-[0.5]',
                        'no-underline',
                        'hover:opacity-[1]',
                        'hover:no-underline',
                        'hover:text-black', 
                        ...additionalLiveDemoClasses,
                    ].join(' ')}
                >
                    Live Demo
                    <img src={LiveDemoIcon} alt="Live Demo" className="ml-2" />
                </a>
            )}

            {tagIcon && src && (
                <img
                    src={tagIcon}
                    alt="Tag Icon"
                    className="absolute top-5 right-5"
                />
            )}

            {src && (
                <img
                    src={src}
                    alt={srcAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            )}
        </div>
        <a
            href={starterPageUrl}
            target="_blank"
            rel="noreferrer"
            className='no-underline hover:no-underline'
        >
            <div className="ml-1 px-6 pb-6">
                <Header level={4}>{title}</Header>
                <p>
                    { exceptr.substring(0, 110) }
                    { exceptr.length >= 110 && '...' }
                </p>
            </div>
        </a>
        <div className="ml-1 px-6 pb-6 flex-wrap">
            <Delimiter variant="light" className="mb-[20px]" />
            <a
                href={githubUrl}
                className="text-base hover:text-blue-600 font-400 mr-12 inline-flex items-center no-underline hover:no-underline"
                target="_blank"
                rel="noreferrer"
            >
                Github
                <img
                    src={ArrowTopRightIcon}
                    alt="Arrow Top Right"
                    className="ml-1"
                />
            </a>

            <a
                href={predefinedCTUrl}
                className="text-base hover:text-blue-600 font-400 inline-flex items-center no-underline hover:no-underline"
                target="_blank"
                rel="noreferrer"
            >
                Start with predefined CT
                <img
                    src={ArrowTopRightIcon}
                    alt="Arrow Top Right"
                    className="ml-1"
                />
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
    additionalCategoryClasses: PropTypes.arrayOf(PropTypes.string),
    additionalLiveDemoClasses: PropTypes.arrayOf(PropTypes.string),
};

ShowcaseCard.defaultProps = {
    rounded: 'lg',
    additionalClasses: [],
    additionalCategoryClasses: [],
    additionalLiveDemoClasses: [],
};

export default ShowcaseCard;
