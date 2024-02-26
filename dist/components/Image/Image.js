"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rounded = require("../../defaultProps/rounded");

var _excluded = ["url", "caption", "stretched", "rounded", "additionalClasses", "captionAdditionalClasses"];

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
 * Component for displaying images
 */
var Image = function Image(_ref) {
  var url = _ref.url,
      caption = _ref.caption,
      stretched = _ref.stretched,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      captionAdditionalClasses = _ref.captionAdditionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", _extends({
    src: url,
    alt: caption,
    className: [stretched ? 'w-full' : '', _rounded.roundedProps.classSet[rounded]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props)), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['pt-2 opacity-70 italic'].concat(_toConsumableArray(captionAdditionalClasses)).join(' '),
    dangerouslySetInnerHTML: {
      __html: caption
    }
  }));
};

Image.propTypes = {
  /**
   * Image url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * Image caption
   */
  caption: _propTypes.default.string,

  /**
   * Does image should be stretched
   */
  stretched: _propTypes.default.bool,

  /**
   * Image roundness?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),

  /**
   * Additional classes for image
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for image caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Image.defaultProps = {
  caption: null,
  stretched: false,
  rounded: 'none',
  additionalClasses: [],
  captionAdditionalClasses: []
};
var _default = Image;
exports.default = _default;