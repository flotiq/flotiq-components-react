"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _border = require("../../defaultProps/border");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
    additionalClasses = defaults.additionalClasses,
    ...props
  } = _ref;
  const styleClasses = {
    solid: 'border-solid',
    dashed: 'border-dashed',
    dotted: 'border-dotted'
  };
  return /*#__PURE__*/_react.default.createElement("hr", _extends({
    className: ['my-2', _border.borderProps.classSet[variant], styleClasses[style], ...additionalClasses].join(' ')
  }, props));
};
Delimiter.propTypes = {
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
var _default = exports.default = Delimiter;