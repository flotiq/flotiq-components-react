"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for listings
 */
const List = _ref => {
  let {
    items,
    style,
    level,
    additionalClasses,
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
List.defaultProps = {
  style: 'unordered',
  level: 1,
  additionalClasses: []
};
var _default = exports.default = List;