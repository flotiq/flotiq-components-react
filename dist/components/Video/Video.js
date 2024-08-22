"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  caption: null,
  additionalClasses: []
};

/**
 * Component for video files
 */
const Video = _ref => {
  let {
    url,
    caption = defaults.caption,
    extension,
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['text-content-image pt-2 pb-2', ...additionalClasses].join(' ')
  }, /*#__PURE__*/_react.default.createElement("video", _extends({
    width: "100%",
    controls: true
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: url,
    type: `video/${extension}`
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
var _default = exports.default = Video;