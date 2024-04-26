"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rounded = require("../../defaultProps/rounded");
var _border = require("../../defaultProps/border");
var _background = require("../../defaultProps/background");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * Component for pagination navigation
 */
const Pagination = _ref => {
  let {
    variant = 'primary',
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
    numOfPages
  } = _ref;
  const sizeClass = {
    sm: 'w-6 h-6 md:w-8 md:h-8 text-sm',
    md: 'w-8 h-8 md:w-10 md:h-10 text-sm md:text-base',
    lg: 'w-10 h-10 md:w-12 md:h-12 text-md md:text-lg'
  };
  const sizeClassPrevNext = {
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
  const borderClasses = {
    primary: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-primary'].join(' '),
    secondary: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-secondary'].join(' '),
    info: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-info'].join(' '),
    light: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-light'].join(' '),
    dark: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-dark'].join(' '),
    transparent: ['border', _border.borderProps.classSet[borderVariant], 'hover:border-transparent'].join(' ')
  };
  const activeBorderClasses = {
    primary: 'border border-primary',
    secondary: 'border border-secondary',
    info: 'border border-info',
    light: 'border border-light',
    dark: 'border border-dark',
    transparent: 'border border-transparent'
  };
  const safePage = Math.min(Math.max(page, 1), numOfPages);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['px-1', 'py-3', 'flex', 'items-center', 'justify-between', 'sm:px-6', 'mt-10', ...containerAdditionalClasses].join(' ')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "flex-1 flex items-center justify-center"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: "relative z-0 inline-flex space-x-2",
    "aria-label": "Pagination"
  }, safePage > 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("a", {
    href: safePage > 2 ? "".concat(baseUrl).concat(safePage - 1) : baseUrl,
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClassPrevNext[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', ...prevNextAdditionalClasses].join(' ')
  }, prev), /*#__PURE__*/_react.default.createElement("a", {
    href: baseUrl,
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', safePage <= 2 ? 'inline-flex' : 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, "1"), safePage > 4 && /*#__PURE__*/_react.default.createElement("span", {
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, "...")), safePage > 3 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage - 2),
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, safePage - 2), safePage > 2 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage - 1),
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', ...additionalClasses].join(' ')
  }, safePage - 1), /*#__PURE__*/_react.default.createElement("span", {
    "aria-current": "page",
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], _background.backgroundProps.classSet[variant], activeBorderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', ...activeAdditionalClasses].join(' ')
  }, safePage), safePage < numOfPages - 1 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 1),
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', ...additionalClasses].join(' ')
  }, safePage + 1), page < numOfPages - 2 && /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 2),
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, safePage + 2), safePage < numOfPages && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, safePage < numOfPages - 3 && /*#__PURE__*/_react.default.createElement("span", {
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, "..."), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(numOfPages),
    className: ['relative', 'items-center', 'justify-center', sizeClass[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', safePage >= numOfPages - 1 ? 'inline-flex' : 'hidden', 'md:inline-flex', ...additionalClasses].join(' ')
  }, numOfPages), /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(baseUrl).concat(safePage + 1),
    className: ['relative', 'inline-flex', 'items-center', 'justify-center', sizeClassPrevNext[size], bgClasses[variant], borderClasses[variant], _rounded.roundedProps.classSet[rounded], 'leading-6', 'font-medium', ...prevNextAdditionalClasses].join(' ')
  }, next)))));
};
Pagination.propTypes = {
  /**
   * Color variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent']),
  /**
   * Color variant for border
   */
  borderVariant: _propTypes.default.oneOf(['primary', 'secondary', 'info', 'light', 'dark', 'transparent', 'black', 'white']),
  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  /**
   * Active page number
   */
  page: _propTypes.default.number.isRequired,
  /**
   * Number of pages
   */
  numOfPages: _propTypes.default.number.isRequired,
  /**
   * Is this the rounded button?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  /**
   * Text or component for previous button
   */
  prev: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  /**
   * Text or component for next button
   */
  next: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  /**
   * Base url of pagination
   */
  baseUrl: _propTypes.default.string,
  /**
   * Additional classes for pagination box
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for active pagination box
   */
  activeAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for prev and next pagination box
   */
  prevNextAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for pagination container
   */
  containerAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Pagination.defaultProps = {
  size: 'md',
  variant: 'primary',
  borderVariant: 'primary',
  rounded: _rounded.roundedProps.defaultValue,
  prev: 'Previous',
  next: 'Next',
  baseUrl: '/',
  additionalClasses: [],
  activeAdditionalClasses: [],
  prevNextAdditionalClasses: [],
  containerAdditionalClasses: []
};
var _default = exports.default = Pagination;