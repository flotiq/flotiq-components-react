"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delimiterPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _border = require("../../defaultProps/border");
const _excluded = ["variant", "style", "additionalClasses"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
const defaults = exports.defaults = {
  variant: _border.borderProps.defaultValue,
  style: 'solid',
  additionalClasses: []
};

/**
 * Component for separating content
 */
const Delimiter = _ref => {
  let {
      variant = defaults.variant,
      style = defaults.style,
      additionalClasses = defaults.additionalClasses
    } = _ref,
    props = _objectWithoutProperties(_ref, _excluded);
  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted'
  };
  return /*#__PURE__*/_react.default.createElement("hr", _extends({
    className: ['my-2', _border.borderProps.classSet[variant], styleClasses[style], ...additionalClasses].join(' ')
  }, props));
};
const delimiterPropTypes = exports.delimiterPropTypes = {
  /**
   * Delimiter variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  /**
   * Delimiter style
   */
  style: _propTypes.default.oneOf(['solid', 'dashed', 'dotted']),
  /**
   * Additional classes for delimiter
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Delimiter.propTypes = delimiterPropTypes;
var _default = exports.default = Delimiter;