"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paragraphPropTypes = exports.defaults = exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  alignment: 'left',
  additionalClasses: []
};

/**
 * Component for standard text
 */
const Paragraph = _ref => {
  let {
    alignment = defaults.alignment,
    additionalClasses = defaults.additionalClasses,
    children,
    ...props
  } = _ref;
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  };
  return /*#__PURE__*/_react.default.isValidElement(children) ? /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['py-2', alignmentClass[alignment], ...additionalClasses].join(' ')
  }, props), children) : /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['py-2', alignmentClass[alignment], ...additionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: children
    }
  }, props));
};
const paragraphPropTypes = exports.paragraphPropTypes = {
  /**
   * Paragraph alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right', 'justify']),
  /**
   * Additional classes for paragraph
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Paragraph.propTypes = {
  /**
   * Paragraph content
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  ...paragraphPropTypes
};
var _default = exports.default = Paragraph;