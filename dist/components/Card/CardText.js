"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Standard text part of body in card like component
 */
const CardText = _ref => {
  let {
    children,
    additionalClasses = [],
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("p", _extends({
    className: ['text-base', 'font-light', 'my-4', ...additionalClasses].join(' ')
  }, props), children);
};
CardText.propTypes = {
  /**
   * Additional classes for card text
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
CardText.defaultProps = {
  additionalClasses: []
};
var _default = exports.default = CardText;