"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["url", "title", "allowFullScreen", "additionalClasses"];

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
 * Component for displaying iframe with YouTube video
 */
var YouTubeEmbed = function YouTubeEmbed(_ref) {
  var url = _ref.url,
      title = _ref.title,
      allowFullScreen = _ref.allowFullScreen,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var safeUrl = url.replace('/watch?v=', '/embed/');
  safeUrl = safeUrl.replace('youtu.be/', 'www.youtube.com/embed/');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "height-0 pb-[56.25%] relative"
  }, /*#__PURE__*/_react.default.createElement("iframe", _extends({
    id: "ytplayer",
    type: "text/html",
    width: "640",
    height: "360",
    src: safeUrl,
    frameBorder: "0",
    allowFullScreen: allowFullScreen,
    title: title,
    className: ['absolute', 'w-full', 'h-full'].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props)));
};

YouTubeEmbed.propTypes = {
  /**
   * YouTUbe url
   */
  url: _propTypes.default.string.isRequired,

  /**
   * Title of iframe
   */
  title: _propTypes.default.string,

  /**
   * Does the video should allow to be put in fullscreen mode
   */
  allowFullScreen: _propTypes.default.bool,

  /**
   * Additional classes for embed
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
YouTubeEmbed.defaultProps = {
  title: 'Youtube video',
  allowFullScreen: true,
  additionalClasses: []
};
var _default = YouTubeEmbed;
exports.default = _default;