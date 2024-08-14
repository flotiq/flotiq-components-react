"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Image = _interopRequireDefault(require("../Image/Image"));
var _Video = _interopRequireDefault(require("../Video/Video"));
var _Audio = _interopRequireDefault(require("../Audio/Audio"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  caption: null,
  stretched: false,
  fileName: '',
  imageProps: {},
  videoProps: {},
  audioProps: {},
  additionalClasses: []
};
const File = _ref => {
  let {
    url,
    caption = defaults.caption,
    stretched = defaults.stretched,
    extension,
    fileName = defaults.fileName,
    imageProps = defaults.imageProps,
    videoProps = defaults.videoProps,
    audioProps = defaults.audioProps,
    additionalClasses = defaults.additionalClasses
  } = _ref;
  if (isImage(extension)) {
    return /*#__PURE__*/_react.default.createElement(_Image.default, _extends({
      url: url,
      caption: caption,
      stretched: stretched
    }, imageProps));
  }
  if (isMovie(extension)) {
    return /*#__PURE__*/_react.default.createElement(_Video.default, _extends({
      url: url,
      caption: caption,
      extension: extension
    }, videoProps));
  }
  if (isAudio(extension)) {
    return /*#__PURE__*/_react.default.createElement(_Audio.default, _extends({
      url: url,
      caption: caption,
      extension: extension
    }, audioProps));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: additionalClasses.join(' ')
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: url
  }, fileName));
};
const isMovie = extension => ['mp4', 'webm', 'ogv'].indexOf(extension) > -1;
const isImage = extension => ['jpg', 'png', 'bmp', 'svg', 'gif', 'webp', 'ico'].indexOf(extension) > -1;
const isAudio = extension => ['mpeg', 'mp3', 'mid', 'ogg', 'oga', 'wav'].indexOf(extension) > -1;
File.propTypes = {
  /**
   * File url
   */
  url: _propTypes.default.string.isRequired,
  /**
   * File caption
   */
  caption: _propTypes.default.string,
  /**
   * Does image should be stretched
   */
  stretched: _propTypes.default.bool,
  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,
  /**
   * File name
   */
  fileName: _propTypes.default.string,
  /**
   * Additional props for image components, for more information check Image component
   */
  imageProps: _Image.default.propTypes,
  /**
   * Additional props for video components, for more information check Video component
   */
  videoProps: _Video.default.propTypes,
  /**
   * Additional props for audio components, for more information check Audio component
   */
  audioProps: _Audio.default.propTypes,
  /**
   * Additional classes for file
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = File;