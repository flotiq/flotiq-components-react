import React from 'react';
import PropTypes from 'prop-types';

import { roundedProps } from '../../defaultProps/rounded';
import { borderProps } from '../../defaultProps/border';
import { backgroundProps } from '../../defaultProps/background';

/**
 * Component for pagination navigation
 */
const Pagination = ({ variant = 'primary',
    borderVariant,
    size,
    rounded,
    additionalClasses,
    activeAdditionalClasses,
    prevNextAdditionalClasses,
    containerAdditionalClasses,
    prev,
    next,
    baseUrl,
    page,
    numOfPages }) => {
    const sizeClass = {
        sm: 'fq-w-6 fq-h-6 md:fq-w-8 md:fq-h-8 fq-text-sm',
        md: 'fq-w-8 fq-h-8 md:fq-w-10 md:fq-h-10 fq-text-sm md:fq-text-base',
        lg: 'fq-w-10 fq-h-10 md:fq-w-12 md:fq-h-12 fq-text-md md:fq-text-lg',
    };
    const sizeClassPrevNext = {
        sm: 'fq-w-16 fq-h-6 md:fq-w-20 md:fq-h-8 fq-text-sm',
        md: 'fq-w-20 fq-h-8 md:fq-w-24 md:fq-h-10 fq-text-sm md:fq-text-base',
        lg: 'fq-w-24 fq-h-10 md:fq-w-28 md:fq-h-12 fq-text-md md:fq-text-lg',
    };
    const bgClasses = {
        primary: 'fq-bg-white hover:fq-bg-primary fq-text-black hover:fq-text-white',
        secondary: 'fq-bg-white hover:fq-bg-secondary fq-text-black hover:fq-text-white',
        info: 'fq-bg-white hover:fq-bg-info fq-text-black',
        light: 'fq-bg-white hover:fq-bg-light fq-text-black',
        dark: 'fq-bg-white hover:fq-bg-dark fq-text-black hover:fq-text-white',
        transparent: 'fq-bg-transparent fq-text-black',
    };
    const borderClasses = {
        primary: ['fq-border', borderProps.classSet[borderVariant], 'hover:fq-border-primary'].join(' '),
        secondary: ['fq-border', borderProps.classSet[borderVariant], 'hover:fq-border-secondary'].join(' '),
        info: ['fq-border', borderProps.classSet[borderVariant], 'hover:fq-border-info'].join(' '),
        light: ['fq-border', borderProps.classSet[borderVariant], 'hover:fq-border-light'].join(' '),
        dark: ['fq-border', borderProps.classSet[borderVariant], 'hover:fq-border-dark'].join(' '),
        transparent: ['fq-border', borderProps.classSet[borderVariant], 'hover:fq-border-transparent'].join(' '),
    };
    const activeBorderClasses = {
        primary: 'fq-border fq-border-primary',
        secondary: 'fq-border fq-border-secondary',
        info: 'fq-border fq-border-info',
        light: 'fq-border fq-border-light',
        dark: 'fq-border fq-border-dark',
        transparent: 'fq-border fq-border-transparent',
    };

    const safePage = Math.min(Math.max(page, 1), numOfPages);

    return (
        <div className={[
            'fq-px-1',
            'fq-py-3',
            'fq-flex',
            'fq-items-center',
            'fq-justify-between',
            'sm:fq-px-6',
            'fq-mt-10',
            ...containerAdditionalClasses,
        ].join(' ')}
        >
            <div className="fq-flex-1 fq-flex fq-items-center fq-justify-center">
                <nav className="fq-relative fq-z-0 fq-inline-flex fq-space-x-2" aria-label="Pagination">
                    { safePage > 1 && (
                        <>
                            <a
                                href={safePage > 2 ? `${baseUrl}${safePage - 1}` : baseUrl}
                                className={[
                                    'fq-relative',
                                    'fq-inline-flex',
                                    'fq-items-center',
                                    'fq-justify-center',
                                    sizeClassPrevNext[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'fq-leading-6',
                                    'fq-font-medium',
                                    ...prevNextAdditionalClasses,
                                ].join(' ')}
                            >
                                {prev}
                            </a>
                            <a
                                href={baseUrl}
                                className={[
                                    'fq-relative',
                                    'fq-items-center',
                                    'fq-justify-center',
                                    sizeClass[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'fq-leading-6',
                                    'fq-font-medium',
                                    safePage <= 2 ? 'fq-inline-flex' : 'fq-hidden',
                                    'md:fq-inline-flex',
                                    ...additionalClasses,
                                ].join(' ')}
                            >
                                1
                            </a>
                            { safePage > 4 && (
                                <span
                                    className={[
                                        'fq-relative',
                                        'fq-items-center',
                                        'fq-justify-center',
                                        sizeClass[size],
                                        bgClasses[variant],
                                        borderClasses[variant],
                                        roundedProps.classSet[rounded],
                                        'fq-leading-6',
                                        'fq-font-medium',
                                        'fq-hidden',
                                        'md:fq-inline-flex',
                                        ...additionalClasses,
                                    ].join(' ')}
                                >
                                    ...
                                </span>
                            )}
                        </>
                    )}

                    { safePage > 3 && (
                        <a
                            href={`${baseUrl}${safePage - 2}`}
                            className={[
                                'fq-relative',
                                'fq-items-center',
                                'fq-justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'fq-leading-6',
                                'fq-font-medium',
                                'fq-hidden',
                                'md:fq-inline-flex',
                                ...additionalClasses,
                            ].join(' ')}
                        >
                            {safePage - 2}
                        </a>
                    )}
                    { safePage > 2 && (
                        <a
                            href={`${baseUrl}${safePage - 1}`}
                            className={[
                                'fq-relative',
                                'fq-inline-flex',
                                'fq-items-center',
                                'fq-justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'fq-leading-6',
                                'fq-font-medium',
                                ...additionalClasses,
                            ].join(' ')}
                        >
                            {safePage - 1}
                        </a>
                    )}
                    <span
                        aria-current="page"
                        className={[
                            'fq-relative',
                            'fq-inline-flex',
                            'fq-items-center',
                            'fq-justify-center',
                            sizeClass[size],
                            backgroundProps.classSet[variant],
                            activeBorderClasses[variant],
                            roundedProps.classSet[rounded],
                            'fq-leading-6',
                            'fq-font-medium',
                            ...activeAdditionalClasses,
                        ].join(' ')}
                    >
                        {safePage}
                    </span>
                    {safePage < numOfPages - 1 && (
                        <a
                            href={`${baseUrl}${safePage + 1}`}
                            className={[
                                'fq-relative',
                                'fq-inline-flex',
                                'fq-items-center',
                                'fq-justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'fq-leading-6',
                                'fq-font-medium',
                                ...additionalClasses,
                            ].join(' ')}
                        >
                            {safePage + 1}
                        </a>
                    )}
                    {page < numOfPages - 2 && (
                        <a
                            href={`${baseUrl}${safePage + 2}`}
                            className={[
                                'fq-relative',
                                'fq-items-center',
                                'fq-justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'fq-leading-6',
                                'fq-font-medium',
                                'fq-hidden',
                                'md:fq-inline-flex',
                                ...additionalClasses,
                            ].join(' ')}
                        >
                            {safePage + 2}
                        </a>
                    )}

                    { safePage < numOfPages && (
                        <>
                            {safePage < numOfPages - 3 && (
                                <span
                                    className={[
                                        'fq-relative',
                                        'fq-items-center',
                                        'fq-justify-center',
                                        sizeClass[size],
                                        bgClasses[variant],
                                        borderClasses[variant],
                                        roundedProps.classSet[rounded],
                                        'fq-leading-6',
                                        'fq-font-medium',
                                        'fq-hidden',
                                        'md:fq-inline-flex',
                                        ...additionalClasses,
                                    ].join(' ')}
                                >
                                    ...
                                </span>
                            )}
                            <a
                                href={`${baseUrl}${numOfPages}`}
                                className={[
                                    'fq-relative',
                                    'fq-items-center',
                                    'fq-justify-center',
                                    sizeClass[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'fq-leading-6',
                                    'fq-font-medium',
                                    safePage >= numOfPages - 1 ? 'fq-inline-flex' : 'fq-hidden',
                                    'md:fq-inline-flex',
                                    ...additionalClasses,
                                ].join(' ')}
                            >
                                {numOfPages}
                            </a>
                            <a
                                href={`${baseUrl}${safePage + 1}`}
                                className={[
                                    'fq-relative',
                                    'fq-inline-flex',
                                    'fq-items-center',
                                    'fq-justify-center',
                                    sizeClassPrevNext[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'fq-leading-6',
                                    'fq-font-medium',
                                    ...prevNextAdditionalClasses,
                                ].join(' ')}
                            >
                                {next}
                            </a>
                        </>
                    )}
                </nav>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    /**
     * Color variant
     */
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'light',
        'dark',
        'transparent',
    ]),
    /**
     * Color variant for border
     */
    borderVariant: PropTypes.oneOf([
        'primary',
        'secondary',
        'info',
        'light',
        'dark',
        'transparent',
        'black',
        'white',
    ]),
    /**
     * How large should the button be?
     */
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    /**
     * Active page number
     */
    page: PropTypes.number.isRequired,
    /**
     * Number of pages
     */
    numOfPages: PropTypes.number.isRequired,
    /**
     * Is this the rounded button?
     */
    rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
    /**
     * Text or component for previous button
     */
    prev: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Text or component for next button
     */
    next: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    /**
     * Base url of pagination
     */
    baseUrl: PropTypes.string,
    /**
     * Additional classes for pagination box
     */
    additionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for active pagination box
     */
    activeAdditionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for prev and next pagination box
     */
    prevNextAdditionalClasses: PropTypes.arrayOf(PropTypes.string),
    /**
     * Additional classes for pagination container
     */
    containerAdditionalClasses: PropTypes.arrayOf(PropTypes.string),
};

Pagination.defaultProps = {
    size: 'md',
    variant: 'primary',
    borderVariant: 'primary',
    rounded: roundedProps.defaultValue,
    prev: 'Previous',
    next: 'Next',
    baseUrl: '/',
    additionalClasses: [],
    activeAdditionalClasses: [],
    prevNextAdditionalClasses: [],
    containerAdditionalClasses: [],
};

export default Pagination;
