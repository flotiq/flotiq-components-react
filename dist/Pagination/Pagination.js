import React from 'react';
import PropTypes from 'prop-types';
/**
 * Primary UI component for user interaction
 */

const Pagination = ({
  variant = 'primary',
  borderVariant = 'black',
  size = 'md',
  rounded = 'md',
  additionalClasses = [],
  activeAdditionalClasses = [],
  prevNextAdditionalClasses = [],
  containerAdditionalClasses = [],
  prev = 'Previous',
  next = 'Next',
  baseUrl = '/',
  page = 1,
  numOfPages = 1
}) => {
  const sizeClass = {
    sm: 'w-6 h-6 md:w-8 md:h-8 text-sm',
    md: 'w-8 h-8 md:w-10 md:h-10 text-sm md:text-base',
    lg: 'w-10 h-10 md:w-12 md:h-12 text-md md:text-lg'
  };
  const sizeClass2 = {
    sm: 'w-16 h-6 md:w-20 md:h-8 text-sm',
    md: 'w-20 h-8 md:w-24 md:h-10 text-sm md:text-base',
    lg: 'w-24 h-10 md:w-28 md:h-12 text-md md:text-lg'
  };
  const bgClasses = {
    primary: 'bg-white hover:bg-primary text-black hover:text-white',
    secondary: 'bg-white hover:bg-secondary text-black hover:text-white',
    info: 'bg-white hover:bg-info text-black',
    light: 'bg-white hover:bg-light text-black',
    dark: 'bg-white hover:bg-dark text-black hover:text-white',
    transparent: 'bg-transparent text-black'
  };
  const activeBgClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    info: 'bg-info text-black',
    light: 'bg-light text-black',
    dark: 'bg-dark text-white',
    transparent: 'bg-transparent text-black'
  };
  const borderVariantClasses = {
    primary: 'border border-primary',
    secondary: 'border border-secondary',
    info: 'border border-info',
    light: 'border border-light',
    dark: 'border border-dark',
    transparent: 'border border-transparent',
    black: 'border border-black',
    white: 'border border-white'
  };
  const borderClasses = {
    primary: ['border', borderVariantClasses[borderVariant], 'hover:border-primary'].join(' '),
    secondary: ['border', borderVariantClasses[borderVariant], 'hover:border-secondary'].join(' '),
    info: ['border', borderVariantClasses[borderVariant], 'hover:border-info'].join(' '),
    light: ['border', borderVariantClasses[borderVariant], 'hover:border-light'].join(' '),
    dark: ['border', borderVariantClasses[borderVariant], 'hover:border-dark'].join(' '),
    transparent: ['border', borderVariantClasses[borderVariant], 'hover:border-transparent'].join(' ')
  };
  const activeBorderClasses = {
    primary: 'border border-primary',
    secondary: 'border border-secondary',
    info: 'border border-info',
    light: 'border border-light',
    dark: 'border border-dark',
    transparent: 'border border-transparent'
  };
  const roundedClass = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full'
  };
  const safePage = Math.min(Math.max(page, 1), numOfPages);
  return /*#__PURE__*/React.createElement("div", {
    className: ['bg-white', 'px-1', 'py-3', 'flex', 'items-center', 'justify-between', 'sm:px-6', 'mt-10', ...containerAdditionalClasses].join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "relative z-0 inline-flex space-x-2",
    "aria-label": "Pagination"
  }, safePage > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("a", {
    href: safePage > 2 ? `${baseUrl}${safePage - 1}` : baseUrl,
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass2[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', ...prevNextAdditionalClasses].join(' ')
  }, prev), /*#__PURE__*/React.createElement("a", {
    href: baseUrl,
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', safePage <= 2 ? 'inline-flex' : 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, "1"), safePage > 4 && /*#__PURE__*/React.createElement("span", {
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, "...")), safePage > 3 && /*#__PURE__*/React.createElement("a", {
    href: `${baseUrl}${safePage - 2}`,
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, safePage - 2), safePage > 2 && /*#__PURE__*/React.createElement("a", {
    href: `${baseUrl}${safePage - 1}`,
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', ...additionalClasses].join(' ')
  }, safePage - 1), /*#__PURE__*/React.createElement("span", {
    "aria-current": "page",
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], activeBgClasses[variant], activeBorderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', ...activeAdditionalClasses].join(' ')
  }, safePage), safePage < numOfPages - 1 && /*#__PURE__*/React.createElement("a", {
    href: `${baseUrl}${safePage + 1}`,
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', ...additionalClasses].join(' ')
  }, safePage + 1), page < numOfPages - 2 && /*#__PURE__*/React.createElement("a", {
    href: `${baseUrl}${safePage + 2}`,
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, safePage + 2), safePage < numOfPages && /*#__PURE__*/React.createElement(React.Fragment, null, safePage < numOfPages - 3 && /*#__PURE__*/React.createElement("span", {
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, "..."), /*#__PURE__*/React.createElement("a", {
    href: `${baseUrl}${numOfPages}`,
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', safePage >= numOfPages - 1 ? 'inline-flex' : 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, numOfPages), /*#__PURE__*/React.createElement("a", {
    href: `${baseUrl}${safePage + 1}`,
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass2[size], bgClasses[variant], borderClasses[variant], roundedClass[rounded], 'leading-6', 'font-normal', ...prevNextAdditionalClasses].join(' ')
  }, next)))));
};

Pagination.propTypes = {
  /**
   * Color variant
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent']),

  /**
   * Color variant for border
   */
  borderVariant: PropTypes.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent', 'black', 'white']),

  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg']),

  /**
   * Active page number
   */
  page: PropTypes.number,

  /**
   * Number of pages
   */
  numOfPages: PropTypes.number,

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
  containerAdditionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Pagination.defaultProps = {
  size: 'md',
  variant: 'primary',
  borderVariant: 'black',
  rounded: 'md',
  page: 1,
  numOfPages: 1,
  prev: 'Previous',
  next: 'Next',
  baseUrl: '/',
  additionalClasses: [],
  activeAdditionalClasses: [],
  prevNextAdditionalClasses: [],
  containerAdditionalClasses: []
};
export default Pagination;