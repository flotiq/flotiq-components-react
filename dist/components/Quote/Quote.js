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
  additionalClasses: [],
  quoteAdditionalClasses: [],
  captionAdditionalClasses: []
};

/**
 * Component for quote with caption
 */
const Quote = _ref => {
  let {
    text,
    caption,
    variant = defaults.variant,
    additionalClasses = defaults.additionalClasses,
    quoteAdditionalClasses = defaults.quoteAdditionalClasses,
    captionAdditionalClasses = defaults.captionAdditionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['flex flex-col italic', ...additionalClasses].join(' ')
  }, props), /*#__PURE__*/_react.default.isValidElement(text) ? /*#__PURE__*/_react.default.createElement("div", {
    className: ['pl-6 md:pl-10 py-4 border-l-4', _border.borderProps.classSet[variant], ...quoteAdditionalClasses].join(' ')
  }, text) : /*#__PURE__*/_react.default.createElement("div", {
    className: ['pl-6 md:pl-10 py-4 border-l-4', _border.borderProps.classSet[variant], ...quoteAdditionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['self-end mt-3 py-1.5 opacity-70', ...captionAdditionalClasses].join(' ')
  }, caption));
};
Quote.propTypes = {
  /**
   * Quote content
   */
  text: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  /**
   * Quote caption
   */
  caption: _propTypes.default.string.isRequired,
  /**
   * Quote variant
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),
  /**
   * Additional classes for quote container
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for quote
   */
  quoteAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for quote caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = Quote;