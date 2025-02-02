"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.youTubeEmbedPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["url", "title", "allowFullScreen", "additionalClasses"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
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
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
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
YouTubeEmbed.propTypes = _objectSpread(_objectSpread({}, youTubeEmbedPropTypes), {}, {
  /**
   * YouTube url
   */
  url: _propTypes.default.string.isRequired
});
var _default = exports.default = YouTubeEmbed;