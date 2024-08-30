"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = exports.audioPropTypes = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  caption: null,
  additionalClasses: []
};

/**
 * Component for audio files
 */
const Audio = _ref => {
  let {
    url,
    caption = defaults.caption,
    extension,
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['flex flex-col', ...additionalClasses].join(' ')
  }, /*#__PURE__*/_react.default.createElement("audio", _extends({
    controls: true,
    className: "w-full"
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: url,
    type: `audio/${extension}`
  }), "Your browser does not support the audio element."), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: "pt-2 md:pt-5 opacity-70 italic"
  }, caption));
};
const audioPropTypes = exports.audioPropTypes = {
  /**
   * File extension
   */
  extension: _propTypes.default.string,
  /**
   * File caption
   */
  caption: _propTypes.default.string,
  /**
   * Additional classes for audio
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Audio.propTypes = {
  /**
   * File url
   */
  url: _propTypes.default.string.isRequired,
  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,
  ...audioPropTypes
};
var _default = exports.default = Audio;