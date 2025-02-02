"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = exports.audioPropTypes = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["url", "caption", "extension", "additionalClasses"];
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
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: ['flex flex-col', ...additionalClasses].join(' ')
  }, /*#__PURE__*/_react.default.createElement("audio", _extends({
    controls: true,
    className: "w-full"
  }, props), /*#__PURE__*/_react.default.createElement("source", {
    src: url,
    type: "audio/".concat(extension)
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
Audio.propTypes = _objectSpread({
  /**
   * File url
   */
  url: _propTypes.default.string.isRequired,
  /**
   * File extension
   */
  extension: _propTypes.default.string.isRequired
}, audioPropTypes);
var _default = exports.default = Audio;