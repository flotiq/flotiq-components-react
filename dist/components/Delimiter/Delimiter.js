"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _border = require("../../defaultProps/border");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for separating content
 */
const Delimiter = _ref => {
  let {
    variant,
    style,
    additionalClasses,
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
Delimiter.defaultProps = {
  variant: _border.borderProps.defaultValue,
  style: 'solid',
  additionalClasses: []
};
var _default = exports.default = Delimiter;