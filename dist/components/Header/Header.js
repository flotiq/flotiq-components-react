"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.headerPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["level", "children", "anchor", "alignment", "additionalClasses", "h1AdditionalClasses", "h2AdditionalClasses", "h3AdditionalClasses", "h4AdditionalClasses", "h5AdditionalClasses", "h6AdditionalClasses"];
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
  level: 1,
  anchor: '',
  alignment: 'left',
  additionalClasses: [],
  h1AdditionalClasses: [],
  h2AdditionalClasses: [],
  h3AdditionalClasses: [],
  h4AdditionalClasses: [],
  h5AdditionalClasses: [],
  h6AdditionalClasses: []
};

/**
 * Component for headings
 */
const Header = _ref => {
  let {
      level = defaults.level,
      children,
      anchor = defaults.anchor,
      alignment = defaults.alignment,
      additionalClasses = defaults.additionalClasses,
      h1AdditionalClasses = defaults.h1AdditionalClasses,
      h2AdditionalClasses = defaults.h2AdditionalClasses,
      h3AdditionalClasses = defaults.h3AdditionalClasses,
      h4AdditionalClasses = defaults.h4AdditionalClasses,
      h5AdditionalClasses = defaults.h5AdditionalClasses,
      h6AdditionalClasses = defaults.h6AdditionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const safeLevel = Math.min(Math.max(level, 1), 6);
  const HeaderToRender = "h".concat(safeLevel);
  const sizeClass = {
    1: ['text-4xl font-bold pt-6 pb-3', ...h1AdditionalClasses].join(' '),
    2: ['text-3xl font-bold pt-5 pb-2.5', ...h2AdditionalClasses].join(' '),
    3: ['text-2xl font-bold pt-4 pb-2', ...h3AdditionalClasses].join(' '),
    4: ['text-xl font-bold pt-3 pb-1.5', ...h4AdditionalClasses].join(' '),
    5: ['text-lg font-bold pt-2 pb-1', ...h5AdditionalClasses].join(' '),
    6: ['text-base font-bold pt-1', ...h6AdditionalClasses].join(' ')
  };
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' '),
    id: anchor
  }, props), children) : /*#__PURE__*/_react.default.createElement(HeaderToRender, _extends({
    className: [sizeClass[safeLevel], alignmentClass[alignment], ...additionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: children
    },
    id: anchor
  }, props));
};
const headerPropTypes = exports.headerPropTypes = {
  /**
   * Level of header
   */
  level: _propTypes.default.number,
  /**
   * Header anchor
   */
  anchor: _propTypes.default.string,
  /**
   * Header alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right']),
  /**
   * Additional classes for header (all levels)
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for level 1 header
   */
  h1AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for level 2 header
   */
  h2AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for level 3 header
   */
  h3AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for level 4 header
   */
  h4AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for level 5 header
   */
  h5AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for level 6 header
   */
  h6AdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Header.propTypes = _objectSpread({
  /**
   * Header contents
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
}, headerPropTypes);
var _default = exports.default = Header;