"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["items", "style", "level", "additionalClasses"];
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
  style: 'unordered',
  level: 1,
  additionalClasses: []
};

/**
 * Component for listings
 */
const List = _ref => {
  let {
      items,
      style = defaults.style,
      level = defaults.level,
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const ListType = style === 'ordered' ? 'ol' : 'ul';
  const listStyleClass = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
  };
  const safeLevel = Math.max(level, 1);
  const marginClass = safeLevel === 1 ? 'ml-0' : 'ml-6';
  return /*#__PURE__*/_react.default.createElement(ListType, _extends({
    className: ['space-y-1', listStyleClass[style], 'list-inside', marginClass, ...additionalClasses].join(' ')
  }, props), items.map(item => /*#__PURE__*/_react.default.createElement(_react.Fragment, {
    key: item.content
  }, /*#__PURE__*/_react.default.isValidElement(item.content) ? /*#__PURE__*/_react.default.createElement("li", null, item.content) : /*#__PURE__*/_react.default.createElement("li", {
    dangerouslySetInnerHTML: {
      __html: item.content
    }
  }), item.items && item.items.length > 0 && /*#__PURE__*/_react.default.createElement(List, {
    items: item.items,
    style: style,
    level: safeLevel + 1
  }))));
};
const Items = {
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
Items.items = _propTypes.default.arrayOf(_propTypes.default.shape(Items));
const listPropTypes = exports.listPropTypes = {
  /**
   * List content
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape(Items)),
  /**
   * List style
   */
  style: _propTypes.default.oneOf(['ordered', 'unordered']),
  /**
   * List level
   */
  level: _propTypes.default.number,
  /**
   * Additional classes for list
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
List.propTypes = _objectSpread(_objectSpread({}, listPropTypes), {}, {
  /**
   * List content
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape(Items)).isRequired
});
var _default = exports.default = List;