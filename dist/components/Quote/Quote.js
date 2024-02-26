"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _border = require("../../defaultProps/border");

var _excluded = ["text", "caption", "variant", "additionalClasses", "quoteAdditionalClasses", "captionAdditionalClasses"];

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
 * Component for quote with caption
 */
var Quote = function Quote(_ref) {
  var text = _ref.text,
      caption = _ref.caption,
      variant = _ref.variant,
      additionalClasses = _ref.additionalClasses,
      quoteAdditionalClasses = _ref.quoteAdditionalClasses,
      captionAdditionalClasses = _ref.captionAdditionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['flex flex-col italic'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.isValidElement(text) ? /*#__PURE__*/_react.default.createElement("div", {
    className: ['pl-6 md:pl-10 py-4 border-l-4', _border.borderProps.classSet[variant]].concat(_toConsumableArray(quoteAdditionalClasses)).join(' ')
  }, text) : /*#__PURE__*/_react.default.createElement("div", {
    className: ['pl-6 md:pl-10 py-4 border-l-4', _border.borderProps.classSet[variant]].concat(_toConsumableArray(quoteAdditionalClasses)).join(' '),
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['self-end mt-3 py-1.5 opacity-70'].concat(_toConsumableArray(captionAdditionalClasses)).join(' ')
  }, caption));
};

Quote.propTypes = {
  /**
   * Quote content
   */
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,

  /**
   * Quote caption
   */
  caption: _propTypes.default.string.isRequired,

  /**
   * Quote variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),

  /**
   * Additional classes for quote container
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for quote
   */
  quoteAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for quote caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Quote.defaultProps = {
  variant: _border.borderProps.defaultValue,
  additionalClasses: [],
  quoteAdditionalClasses: [],
  captionAdditionalClasses: []
};
var _default = Quote;
exports.default = _default;