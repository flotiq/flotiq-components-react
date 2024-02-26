"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Image = _interopRequireDefault(require("../Image/Image"));

var _Video = _interopRequireDefault(require("../Video/Video"));

var _Audio = _interopRequireDefault(require("../Audio/Audio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var File = function File(_ref) {
  var url = _ref.url,
      caption = _ref.caption,
      stretched = _ref.stretched,
      extension = _ref.extension,
      fileName = _ref.fileName,
      imageProps = _ref.imageProps,
      videoProps = _ref.videoProps,
      audioProps = _ref.audioProps;

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

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("a", {
    href: url
  }, fileName));
};

var isMovie = function isMovie(extension) {
  return ['mp4', 'webm', 'ogv'].indexOf(extension) > -1;
};

var isImage = function isImage(extension) {
  return ['jpg', 'png', 'bmp', 'svg', 'gif', 'webp', 'ico'].indexOf(extension) > -1;
};

var isAudio = function isAudio(extension) {
  return ['mpeg', 'mp3', 'mid', 'ogg', 'oga', 'wav'].indexOf(extension) > -1;
};

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
   * Additional props for image components
   */
  imageProps: _propTypes.default.shape({}),

  /**
   * Additional props for video components
   */
  videoProps: _propTypes.default.shape({}),

  /**
   * Additional props for audio components
   */
  audioProps: _propTypes.default.shape({}),

  /**
   * Additional classes for file
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
File.defaultProps = {
  caption: null,
  stretched: false,
  fileName: '',
  imageProps: {},
  videoProps: {},
  audioProps: {},
  additionalClasses: []
};
var _default = File;
exports.default = _default;