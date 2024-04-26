"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rounded = require("../../defaultProps/rounded");
var _background = require("../../defaultProps/background");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Primary UI component for user interaction
 */
const Button = _ref => {
  let {
    label,
    onClick,
    variant,
    size,
    rounded,
    additionalClasses,
    ...props
  } = _ref;
  const sizeClass = {
    sm: 'px-8 py-3 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-16 py-5 text-lg'
  };
  const hoverBackgroundClasses = {
    primary: 'hover:bg-primary-600',
    secondary: 'hover:bg-secondary-400',
    success: 'hover:bg-success-600',
    danger: 'hover:bg-danger-600',
    warning: 'hover:bg-warning-600',
    info: 'hover:bg-info-600',
    light: 'hover:bg-light-600',
    dark: 'hover:bg-dark-400',
    transparent: ''
  };
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    className: ['inline-flex', 'items-center', 'leading-4', 'font-medium', _rounded.roundedProps.classSet[rounded], 'shadow-sm', _background.backgroundProps.classSet[variant], hoverBackgroundClasses[variant], 'transition-colors', 'duration-200', 'ease-in-out', 'focus:outline-none', sizeClass[size], ...additionalClasses].join(' ')
  }, props), label);
};
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),
  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),
  /**
  * Button contents
  */
  label: _propTypes.default.string.isRequired,
  /**
   * Is this the rounded button?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  /**
   * Additional classes for button
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
  * Optional click handler
  */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  onClick: undefined,
  size: 'md',
  additionalClasses: [],
  variant: _background.backgroundProps.defaultValue,
  rounded: _rounded.roundedProps.defaultValue
};
var _default = exports.default = Button;