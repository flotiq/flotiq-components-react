"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filePropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Image = _interopRequireWildcard(require("../Image/Image"));
var _Video = _interopRequireWildcard(require("../Video/Video"));
var _Audio = _interopRequireWildcard(require("../Audio/Audio"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
const filePropTypes = exports.filePropTypes = {
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
  extension: _propTypes.default.string,
  /**
   * File name
   */
  fileName: _propTypes.default.string,
  /**
   * Additional props for image components, for more information check Image component
   */
  imageProps: _propTypes.default.shape(_Image.imagePropTypes),
  /**
   * Additional props for video components, for more information check Video component
   */
  videoProps: _propTypes.default.shape(_Video.videoPropTypes),
  /**
   * Additional props for audio components, for more information check Audio component
   */
  audioProps: _propTypes.default.shape(_Audio.audioPropTypes),
  /**
   * Additional classes for file
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
File.propTypes = {
  /**
   * File url
   */
  url: _propTypes.default.string.isRequired,
  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired,
  ...filePropTypes
};
var _default = exports.default = File;