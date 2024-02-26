"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rounded = require("../../defaultProps/rounded");

var _background = require("../../defaultProps/background");

var _excluded = ["label", "onClick", "variant", "size", "rounded", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      variant = _ref.variant,
      size = _ref.size,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var sizeClass = {
    sm: 'px-8 py-3 text-sm',
    md: 'px-12 py-4 text-base',
    lg: 'px-16 py-5 text-lg'
  };
  var hoverBackgroundClasses = {
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
    className: ['inline-flex', 'items-center', 'leading-4', 'font-medium', _rounded.roundedProps.classSet[rounded], 'shadow-sm', _background.backgroundProps.classSet[variant], hoverBackgroundClasses[variant], 'transition-colors', 'duration-200', 'ease-in-out', 'focus:outline-none', sizeClass[size]].concat(_toConsumableArray(additionalClasses)).join(' ')
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
var _default = Button;
exports.default = _default;