"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.imagePropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rounded = require("../../defaultProps/rounded");
const _excluded = ["url", "caption", "stretched", "rounded", "additionalClasses", "captionAdditionalClasses"];
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
  stretched: false,
  rounded: 'none',
  additionalClasses: [],
  captionAdditionalClasses: []
};

/**
 * Component for displaying images
 */
const Image = _ref => {
  let {
      url,
      caption = defaults.caption,
      stretched = defaults.stretched,
      rounded = defaults.rounded,
      additionalClasses = defaults.additionalClasses,
      captionAdditionalClasses = defaults.captionAdditionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", _extends({
    src: url,
    alt: caption,
    className: [stretched ? 'w-full' : '', _rounded.roundedProps.classSet[rounded], ...additionalClasses].join(' ')
  }, props)), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['pt-2 opacity-70 italic', ...captionAdditionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: caption
    }
  }));
};
const imagePropTypes = exports.imagePropTypes = {
  /**
   * Image url
   */
  url: _propTypes.default.string,
  /**
   * Image caption
   */
  caption: _propTypes.default.string,
  /**
   * Does image should be stretched
   */
  stretched: _propTypes.default.bool,
  /**
   * Image roundness?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),
  /**
   * Additional classes for image
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for image caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Image.propTypes = _objectSpread(_objectSpread({}, imagePropTypes), {}, {
  /**
   * Image url
   */
  url: _propTypes.default.string.isRequired
});
var _default = exports.default = Image;