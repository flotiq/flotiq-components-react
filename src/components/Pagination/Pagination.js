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
        sm: 'w-6 h-6 md:w-8 md:h-8 text-sm',
        md: 'w-8 h-8 md:w-10 md:h-10 text-sm md:text-base',
        lg: 'w-10 h-10 md:w-12 md:h-12 text-md md:text-lg',
    };
    const sizeClassPrevNext = {
        sm: 'w-16 h-6 md:w-20 md:h-8 text-sm',
        md: 'w-20 h-8 md:w-24 md:h-10 text-sm md:text-base',
        lg: 'w-24 h-10 md:w-28 md:h-12 text-md md:text-lg',
    };
    const bgClasses = {
        primary: 'bg-white hover:bg-primary text-black hover:text-white',
        secondary: 'bg-white hover:bg-secondary text-black hover:text-white',
        info: 'bg-white hover:bg-info text-black',
        light: 'bg-white hover:bg-light text-black',
        dark: 'bg-white hover:bg-dark text-black hover:text-white',
        transparent: 'bg-transparent text-black',
    };
    const borderClasses = {
        primary: ['border', borderProps.classSet[borderVariant], 'hover:border-primary'].join(' '),
        secondary: ['border', borderProps.classSet[borderVariant], 'hover:border-secondary'].join(' '),
        info: ['border', borderProps.classSet[borderVariant], 'hover:border-info'].join(' '),
        light: ['border', borderProps.classSet[borderVariant], 'hover:border-light'].join(' '),
        dark: ['border', borderProps.classSet[borderVariant], 'hover:border-dark'].join(' '),
        transparent: ['border', borderProps.classSet[borderVariant], 'hover:border-transparent'].join(' '),
    };
    const activeBorderClasses = {
        primary: 'border border-primary',
        secondary: 'border border-secondary',
        info: 'border border-info',
        light: 'border border-light',
        dark: 'border border-dark',
        transparent: 'border border-transparent',
    };

    const safePage = Math.min(Math.max(page, 1), numOfPages);

    return (
        <div className={[
            'fq-base',
            'px-1',
            'py-3',
            'flex',
            'items-center',
            'justify-between',
            'sm:px-6',
            'mt-10',
            ...containerAdditionalClasses,
        ].join(' ')}
        >
            <div className="flex-1 flex items-center justify-center">
                <nav className="relative z-0 inline-flex space-x-2" aria-label="Pagination">
                    { safePage > 1 && (
                        <>
                            <a
                                href={safePage > 2 ? `${baseUrl}${safePage - 1}` : baseUrl}
                                className={[
                                    'relative',
                                    'inline-flex',
                                    'items-center',
                                    'justify-center',
                                    sizeClassPrevNext[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'leading-6',
                                    'font-medium',
                                    ...prevNextAdditionalClasses,
                                ].join(' ')}
                            >
                                {prev}
                            </a>
                            <a
                                href={baseUrl}
                                className={[
                                    'relative',
                                    'items-center',
                                    'justify-center',
                                    sizeClass[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'leading-6',
                                    'font-medium',
                                    safePage <= 2 ? 'inline-flex' : 'hidden',
                                    'md:inline-flex',
                                    ...additionalClasses,
                                ].join(' ')}
                            >
                                1
                            </a>
                            { safePage > 4 && (
                                <span
                                    className={[
                                        'relative',
                                        'items-center',
                                        'justify-center',
                                        sizeClass[size],
                                        bgClasses[variant],
                                        borderClasses[variant],
                                        roundedProps.classSet[rounded],
                                        'leading-6',
                                        'font-medium',
                                        'hidden',
                                        'md:inline-flex',
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
                                'relative',
                                'items-center',
                                'justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'leading-6',
                                'font-medium',
                                'hidden',
                                'md:inline-flex',
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
                                'relative',
                                'inline-flex',
                                'items-center',
                                'justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'leading-6',
                                'font-medium',
                                ...additionalClasses,
                            ].join(' ')}
                        >
                            {safePage - 1}
                        </a>
                    )}
                    <span
                        aria-current="page"
                        className={[
                            'relative',
                            'inline-flex',
                            'items-center',
                            'justify-center',
                            sizeClass[size],
                            backgroundProps.classSet[variant],
                            activeBorderClasses[variant],
                            roundedProps.classSet[rounded],
                            'leading-6',
                            'font-medium',
                            ...activeAdditionalClasses,
                        ].join(' ')}
                    >
                        {safePage}
                    </span>
                    {safePage < numOfPages - 1 && (
                        <a
                            href={`${baseUrl}${safePage + 1}`}
                            className={[
                                'relative',
                                'inline-flex',
                                'items-center',
                                'justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'leading-6',
                                'font-medium',
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
                                'relative',
                                'items-center',
                                'justify-center',
                                sizeClass[size],
                                bgClasses[variant],
                                borderClasses[variant],
                                roundedProps.classSet[rounded],
                                'leading-6',
                                'font-medium',
                                'hidden',
                                'md:inline-flex',
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
                                        'relative',
                                        'items-center',
                                        'justify-center',
                                        sizeClass[size],
                                        bgClasses[variant],
                                        borderClasses[variant],
                                        roundedProps.classSet[rounded],
                                        'leading-6',
                                        'font-medium',
                                        'hidden',
                                        'md:inline-flex',
                                        ...additionalClasses,
                                    ].join(' ')}
                                >
                                    ...
                                </span>
                            )}
                            <a
                                href={`${baseUrl}${numOfPages}`}
                                className={[
                                    'relative',
                                    'items-center',
                                    'justify-center',
                                    sizeClass[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'leading-6',
                                    'font-medium',
                                    safePage >= numOfPages - 1 ? 'inline-flex' : 'hidden',
                                    'md:inline-flex',
                                    ...additionalClasses,
                                ].join(' ')}
                            >
                                {numOfPages}
                            </a>
                            <a
                                href={`${baseUrl}${safePage + 1}`}
                                className={[
                                    'relative',
                                    'inline-flex',
                                    'items-center',
                                    'justify-center',
                                    sizeClassPrevNext[size],
                                    bgClasses[variant],
                                    borderClasses[variant],
                                    roundedProps.classSet[rounded],
                                    'leading-6',
                                    'font-medium',
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
