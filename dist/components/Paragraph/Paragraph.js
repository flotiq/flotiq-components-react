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
 * Component for standard text
 */
const Paragraph = _ref => {
  let {
    alignment,
    additionalClasses,
    children,
    ...props
  } = _ref;
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
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
Paragraph.propTypes = {
  /**
   * Paragraph content
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  /**
   * Paragraph alignment
   */
  alignment: _propTypes.default.oneOf(['left', 'center', 'right']),
  /**
   * Additional classes for paragraph
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Paragraph.defaultProps = {
  alignment: 'left',
  additionalClasses: []
};
var _default = exports.default = Paragraph;