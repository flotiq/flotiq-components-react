"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
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
List.propTypes = {
  /**
   * List content
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape(Items)).isRequired,
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
var _default = exports.default = List;