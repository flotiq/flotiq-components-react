import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import Delimiter from '../Delimiter/Delimiter';
import Header from '../Header/Header';

const ArrowTopRightIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR'
+ '0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9u'
+ 'ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9I'
+ 'k0zLjA4MzAxIDEyLjkxNjhMMTIuOTE2MyAzLjA4MzUiIHN0cm9rZT0iIzAwODNGQy'
+ 'Igc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1'
+ 'saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMi45MTY1IDEwLjA0MVYzLjA4'
+ 'MzVINS45NTg5OCIgc3Ryb2tlPSIjMDA4M0ZDIiBzdHJva2Utd2lkdGg9IjIiIHN0c'
+ 'm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC'
+ '9zdmc+DQo=';

const LiveDemoIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAi'
+ 'IGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9I'
+ 'mh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDQuMzc0NTFDMy'
+ '43NSA0LjM3NDUxIDEuMjUgMTAuMDAwMSAxLjI1IDEwLjAwMDFDMS4yNSAxMC4wMDAxIDM'
+ 'uNzUgMTUuNjI0NSAxMCAxNS42MjQ1QzE2LjI1IDE1LjYyNDUgMTguNzUgMTAuMDAwMSAx'
+ 'OC43NSAxMC4wMDAxQzE4Ljc1IDEwLjAwMDEgMTYuMjUgNC4zNzQ1MSAxMCA0LjM3NDUxW'
+ 'iIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZW'
+ 'pvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxMy4xMjVDMTEuNzI1OSAxMy4xMjUgMTM'
+ 'uMTI1IDExLjcyNTkgMTMuMTI1IDEwQzEzLjEyNSA4LjI3NDExIDExLjcyNTkgNi44NzUg'
+ 'MTAgNi44NzVDOC4yNzQxMSA2Ljg3NSA2Ljg3NSA4LjI3NDExIDYuODc1IDEwQzYuODc1I'
+ 'DExLjcyNTkgOC4yNzQxMSAxMy4xMjUgMTAgMTMuMTI1WiIgc3Ryb2tlPSJibGFjayIgc3'
+ 'Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3Z'
+ 'nPgo=';

/**
 * Component for displaying product showcase card
 */
const ShowcaseCard = ({
    title,
    excerpt,
    thumbnailSrc,
    thumbnailSrcAlt,
    starterPageUrl,
    demoUrl,
    rounded,
    additionalClasses,
    additionalCategoryClasses,
    additionalLiveDemoClasses,
    category,
    tagIcon,
    footerLinks,
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
            'parent-hover-opacity-anchor',
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
                opacity-[0.6] bg-secondary-500 children-opacity-anchor transition-all transform duration-300"
                />
            </a>
            {category && thumbnailSrc && (
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

            {demoUrl && thumbnailSrc && (
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
                    <img
                        src={LiveDemoIcon}
                        alt="Live Demo"
                        className="ml-2"
                    />
                </a>
            )}

            {tagIcon && thumbnailSrc && (
                <img
                    src={tagIcon}
                    alt="Tag Icon"
                    className="absolute top-5 right-5"
                />
            )}

            {thumbnailSrc && (
                <img
                    src={thumbnailSrc}
                    alt={thumbnailSrcAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
            )}
        </div>
        <a
            href={starterPageUrl}
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:no-underline hover:text-black"
        >
            <div className="ml-1 px-6 pb-6 pt-2">
                <Header level={4}>{title}</Header>
                <p>
                    { excerpt.substring(0, 110) }
                    { excerpt.length >= 110 && '...' }
                </p>
            </div>
        </a>

        <Delimiter variant="light" className="mb-[20px] mx-6" />

        <div className="ml-1 px-6 pb-6 flex flex-wrap justify-between">
            {footerLinks?.map((footer) => (
                <a
                    href={footer.link}
                    className="text-base hover:text-blue-600 font-400
                    inline-flex items-center no-underline hover:no-underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    {footer.text}
                    <img
                        src={ArrowTopRightIcon}
                        alt="Arrow Top Right"
                        className="ml-1"
                    />
                </a>
            ))}
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
