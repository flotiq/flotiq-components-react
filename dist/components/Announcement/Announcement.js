"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rounded = require("../../defaultProps/rounded");

var _background = require("../../defaultProps/background");

var _excluded = ["variant", "backgroundColor", "textAlignment", "textSize", "textColor", "content", "additionalClasses", "rounded"];

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

var Announcement = function Announcement(_ref) {
  var variant = _ref.variant,
      backgroundColor = _ref.backgroundColor,
      textAlignment = _ref.textAlignment,
      textSize = _ref.textSize,
      textColor = _ref.textColor,
      content = _ref.content,
      additionalClasses = _ref.additionalClasses,
      rounded = _ref.rounded,
      props = _objectWithoutProperties(_ref, _excluded);

  var alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    none: ''
  };
  var fontSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-large',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
    none: ''
  };
  var style = {};

  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  if (textColor) {
    style.color = textColor;
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['px-12 py-6', _background.backgroundProps.classSet[variant], _rounded.roundedProps.classSet[rounded], alignment[textAlignment], fontSize[textSize]].concat(_toConsumableArray(additionalClasses)).join(' '),
    style: style
  }, props), content);
};

Announcement.propTypes = {
  /**
   * What color variant to use?
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
  * What background color to use? Background color will override variant colors
  */
  backgroundColor: _propTypes.default.string,

  /**
  * Text alignment
  */
  textAlignment: _propTypes.default.oneOf(['left', 'center', 'right']),

  /**
  * Text size
  */
  textSize: _propTypes.default.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),

  /**
   * What text color to use?  Text color will override variant colors
   */
  textColor: _propTypes.default.string,

  /**
  * Announcement content
  */
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Border radius
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),

  /**
   * Additional classes for button
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Announcement.defaultProps = {
  variant: _background.backgroundProps.defaultValue,
  backgroundColor: null,
  textAlignment: null,
  textSize: 'base',
  textColor: null,
  rounded: 'lg',
  additionalClasses: []
};
var _default = Announcement;
exports.default = _default;