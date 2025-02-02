"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rounded = require("../../defaultProps/rounded");
var _background = require("../../defaultProps/background");
const _excluded = ["label", "onClick", "variant", "size", "rounded", "additionalClasses"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const defaults = exports.defaults = {
  onClick: undefined,
  size: 'md',
  additionalClasses: [],
  variant: _background.backgroundProps.defaultValue,
  rounded: _rounded.roundedProps.defaultValue
};

/**
 * Primary UI component for user interaction
 */
const Button = _ref => {
  let {
      label,
      onClick = defaults.onClick,
      variant = defaults.variant,
      size = defaults.size,
      rounded = defaults.rounded,
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
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
var _default = exports.default = Button;