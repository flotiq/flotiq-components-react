"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
const _excluded = ["children", "additionalClasses"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const defaults = exports.defaults = {
  additionalClasses: []
};

/**
 * Header text of body in card like component
 */
const CardTitle = _ref => {
  let {
      children,
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("h2", _extends({
    className: ['text-3xl', 'font-semibold', 'leading-10', ...additionalClasses].join(' ')
  }, props), children);
};
CardTitle.propTypes = {
  /**
   * Additional classes for card body
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = CardTitle;