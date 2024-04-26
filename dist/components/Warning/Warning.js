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
 * Component for displaying warnings
 */
const Warning = _ref => {
  let {
    message,
    title,
    additionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['bg-warning-200 p-6', ...additionalClasses].join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("p", {
    className: "font-bold text-xl text-warning-800"
  }, title), /*#__PURE__*/_react.default.createElement("hr", {
    className: "my-4 border-warning-600"
  }), /*#__PURE__*/_react.default.createElement("p", {
    className: "text-warning-800"
  }, message));
};
Warning.propTypes = {
  /**
   * Warning message
   */
  message: _propTypes.default.string.isRequired,
  /**
   * Warning title
   */
  title: _propTypes.default.string.isRequired,
  /**
   * Additional classes for warning
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Warning.defaultProps = {
  additionalClasses: []
};
var _default = exports.default = Warning;