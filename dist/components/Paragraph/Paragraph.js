"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paragraphPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["alignment", "additionalClasses", "children"];
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
  alignment: 'left',
  additionalClasses: []
};

/**
 * Component for standard text
 */
const Paragraph = _ref => {
  let {
      alignment = defaults.alignment,
      additionalClasses = defaults.additionalClasses,
      children
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['py-2', alignmentClass[alignment], ...additionalClasses].join(' ')
  }, props), children) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['py-2', alignmentClass[alignment], ...additionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
};
const paragraphPropTypes = exports.paragraphPropTypes = {
  /**
   * Paragraph alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right', 'justify']),
  /**
   * Additional classes for paragraph
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Paragraph.propTypes = _objectSpread({
  /**
   * Paragraph content
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
}, paragraphPropTypes);
var _default = exports.default = Paragraph;