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
 * Component for displaying warnings
 */
const Warning = _ref => {
  let {
    message,
    title,
    additionalClasses = defaults.additionalClasses,
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
var _default = exports.default = Warning;