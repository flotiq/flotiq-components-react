"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  additionalClasses: []
};

/**
 * Standard text part of body in card like component
 */
const CardText = _ref => {
  let {
    children,
    additionalClasses = defaults.additionalClasses,
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
var _default = exports.default = CardText;