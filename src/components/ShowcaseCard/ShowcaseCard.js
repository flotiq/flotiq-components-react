import React from 'react';
import PropTypes from 'prop-types';
import { roundedProps } from '../../defaultProps/rounded';
import Delimiter from '../Delimiter/Delimiter';
import Header from '../Header/Header';
import Paragraph from '../Paragraph/Paragraph';

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
    titleLevel = 5,
    excerpt,
    thumbnailSrc,
    thumbnailSrcAlt,
    cardUrl,
    demoUrl,
    rounded,
    additionalClasses,
    additionalCategoryClasses,
    additionalLiveDemoClasses,
    additionalExcerptClasses,
    additionalHeaderClasses,
    additionalFooterLinkClasses,
    category,
    tagIcon,
    footerLinks,
    ...props
}) => (

    <div
        className={[
            'fq-max-w-sm',
            'fq-p-0',
            'fq-bg-white',
            'hover:fq-shadow-xl',
            'fq-transition-all',
            'fq-transform',
            'fq-duration-300',
            'fq-overflow-hidden',
            'fq-parent-hover-opacity-anchor',
            'fq-flex',
            'fq-flex-col',
            roundedProps.classSet[rounded],
            ...additionalClasses,
        ].join(' ')}
        {...props}
    >

        <div className="fq-w-full fq-aspect-w-1 fq-aspect-h-1
        fq-bg-gray-200 fq-overflow-hidden xl:fq-aspect-w-7 xl:fq-aspect-h-8 fq-relative"
        >
            <a
                href={cardUrl}
                rel="noreferrer"
            >
                <div className="fq-absolute fq-w-full fq-top-0 fq-left-0 fq-h-full fq-z-index-1
                    fq-opacity-[0.6] fq-bg-secondary-500 fq-children-opacity-anchor fq-transition-all
                    fq-transform fq-duration-300"
                />
            </a>
            {category && thumbnailSrc && (
                <span className={[
                    'fq-absolute',
                    'fq-text-white',
                    'fq-text-sm',
                    'fq-bg-primary-600',
                    'fq-px-4',
                    'fq-p-1',
                    'fq-left-5',
                    'fq-top-5',
                    'fq-rounded-[6px]',
                    'fq-color-primary',
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
                        'fq-absolute',
                        'fq-text-black',
                        'fq-text-sm',
                        'fq-bg-white',
                        'fq-px-4',
                        'fq-py-2',
                        'fq-left-5',
                        'fq-bottom-5',
                        'fq-rounded-[40px]',
                        'fq-color-primary',
                        'fq-flex',
                        'fq-items-center',
                        'fq-opacity-[0.5]',
                        'fq-no-underline',
                        'hover:fq-opacity-[1]',
                        'hover:fq-no-underline',
                        'hover:fq-text-black',
                        ...additionalFooterLinkClasses,
                    ].join(' ')}
                >
                    Live Demo
                    <img
                        src={LiveDemoIcon}
                        alt="Live Demo"
                        className="fq-ml-2"
                    />
                </a>
            )}

            {tagIcon && thumbnailSrc && (
                <img
                    src={tagIcon}
                    alt="Tag Icon"
                    className="fq-absolute fq-top-5 fq-right-5 fq-max-h-[30px]"
                />
            )}

            {thumbnailSrc && (
                <img
                    src={thumbnailSrc}
                    alt={thumbnailSrcAlt}
                    className="fq-w-full fq-h-full fq-object-center fq-object-cover group-hover:fq-opacity-75"
                />
            )}
        </div>

        <a
            href={cardUrl}
            rel="noreferrer"
            className="fq-grow fq-no-underline hover:fq-no-underline hover:fq-text-black"
        >
            <div className="fq-ml-1 fq-px-6 fq-pb-6 fq-pt-2">
                <Header level={titleLevel} additionalClasses={[...additionalHeaderClasses].join(' ')}>
                    {title}
                </Header>
                <Paragraph
                    className={['fq-text-sm', ...additionalExcerptClasses].join(' ')}
                >
                    <>
                        {excerpt.substring(0, 110)}
                        {excerpt?.length >= 110 ? '...' : ''}
                    </>
                </Paragraph>
            </div>
        </a>

        {footerLinks?.length > 0 && (
            <>
                <Delimiter variant="light" className="fq-mb-[20px] fq-mx-6" />
                <div className="fq-ml-1 fq-px-6 fq-pb-6 fq-flex fq-flex-wrap fq-justify-between">
                    {footerLinks?.map((footer) => (
                        <a
                            href={footer.link}
                            className={[
                                'fq-text-sm',
                                'hover:fq-text-blue-600',
                                'fq-font-400',
                                'fq-inline-flex',
                                'fq-items-center',
                                'fq-no-underline',
                                'hover:fq-no-underline',
                                ...additionalExcerptClasses,
                            ].join(' ')}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {footer.text}
                            <img
                                src={ArrowTopRightIcon}
                                alt="Arrow Top Right"
                                className="fq-ml-1"
                            />
                        </a>
                    ))}
                </div>
            </>
        )}

    </div>

);

const Footers = {
    link: PropTypes.string,
    text: PropTypes.string,
};

ShowcaseCard.propTypes = {
    /**
     * Title contents
     */
    title: PropTypes.string,
    /**
     * Title variant
     */
    titleLevel: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    /**
     * Excerpt contents
     */
    excerpt: PropTypes.string,
    /**
     * Image url
     */
    thumbnailSrc: PropTypes.string,
    /**
     * Image alt text
     */
    thumbnailSrcAlt: PropTypes.string,
    /**
     * Demo url
     */
    demoUrl: PropTypes.string,
    /**
     * Category contents
     */
    category: PropTypes.string,
    /**
     * Tag icon url
     */
    tagIcon: PropTypes.string,
    /**
     * Card url
     */
    cardUrl: PropTypes.string,
    /**
     * Footer content
     */
    footerLinks: PropTypes.arrayOf(PropTypes.shape(Footers)),
    /**
     * Is this the rounded card?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
    /**
     * Additional classes for card
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for category
     */
    additionalCategoryClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for Live Demo button
     */
    additionalLiveDemoClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for excerpt
     */
    additionalExcerptClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for header
     */
    additionalHeaderClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for footer link
     */
    additionalFooterLinkClasses: PropTypes.arrayOf(PropTypes.string),
};

ShowcaseCard.defaultProps = {
    title: undefined,
    titleLevel: '5',
    excerpt: undefined,
    thumbnailSrc: undefined,
    thumbnailSrcAlt: undefined,
    demoUrl: undefined,
    category: undefined,
    tagIcon: undefined,
    cardUrl: undefined,
    footerLinks: undefined,
    rounded: 'lg',
    additionalClasses: [],
    additionalCategoryClasses: [],
    additionalLiveDemoClasses: [],
    additionalExcerptClasses: [],
    additionalHeaderClasses: [],
    additionalFooterLinkClasses: [],
};

export default ShowcaseCard;
