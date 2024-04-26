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
 * Component for displaying iframe with YouTube video
 */
const YouTubeEmbed = _ref => {
  let {
    url,
    title,
    allowFullScreen,
    additionalClasses,
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
var _default = exports.default = YouTubeEmbed;