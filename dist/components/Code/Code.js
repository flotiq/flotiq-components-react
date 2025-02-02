"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = exports.codePropTypes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["children", "language", "highlight", "additionalClasses"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const defaults = exports.defaults = {
  language: 'bash',
  additionalClasses: []
};

/**
 * Component for highlighting code.
 * Install highlight.js to make the component looks like in the examples, we use nord.css
 */
const Code = _ref => {
  let {
      children,
      language = defaults.language,
      highlight,
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  (0, _react.useEffect)(() => {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight, language, children]);
  let CodeToDisplay = children;
  let lang = language;
  if (children.indexOf('```') === 0) {
    // eslint-disable-next-line prefer-destructuring
    lang = children.split('```')[1];
    const blocks = children.split('\n');
    blocks.splice(0, 1);
    CodeToDisplay = blocks.join('\n');
  }
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: additionalClasses.join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("pre", null, /*#__PURE__*/_react.default.createElement("code", {
    className: "language-".concat(lang)
  }, CodeToDisplay)));
};
const codePropTypes = exports.codePropTypes = {
  /**
   * Programming language name
   */
  language: _propTypes.default.string,
  /**
   * Additional classes for code
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Code.propTypes = _objectSpread(_objectSpread({}, codePropTypes), {}, {
  /**
   * Code content
   */
  children: _propTypes.default.string.isRequired
});
var _default = exports.default = Code;