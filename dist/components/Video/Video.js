"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for video files
 */
const Video = _ref => {
  let {
    url,
    caption,
    extension,
    additionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['text-content-image pt-2 pb-2', ...additionalClasses].join(' ')
  }, /*#__PURE__*/_react.default.createElement("video", _extends({
    width: "100%",
    controls: true
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: url,
    type: "video/".concat(extension)
  }), "Your browser does not support the video tag."), /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-2 opacity-70 italic"
  }, caption));
};
Video.propTypes = {
  /**
   * Video url
   */
  url: _propTypes.default.string.isRequired,
  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,
  /**
   * Video caption
   */
  caption: _propTypes.default.string,
  /**
   * Additional classes for video
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Video.defaultProps = {
  caption: null,
  additionalClasses: []
};
var _default = exports.default = Video;