"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.youTubeEmbedPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  title: 'Youtube video',
  allowFullScreen: true,
  additionalClasses: []
};

/**
 * Component for displaying iframe with YouTube video
 */
const YouTubeEmbed = _ref => {
  let {
    url,
    title = defaults.title,
    allowFullScreen = defaults.allowFullScreen,
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
  let safeUrl = url.replace('/watch?v=', '/embed/');
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
    className: ['absolute', 'w-full', 'h-full', ...additionalClasses].join(' ')
  }, props)));
};
const youTubeEmbedPropTypes = exports.youTubeEmbedPropTypes = {
  /**
   * YouTube url
   */
  url: _propTypes.default.string,
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
YouTubeEmbed.propTypes = {
  ...youTubeEmbedPropTypes,
  /**
   * YouTube url
   */
  url: _propTypes.default.string.isRequired
};
var _default = exports.default = YouTubeEmbed;