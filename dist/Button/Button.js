"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var label = _ref.label,
      size = _ref.size,
      onClick = _ref.onClick;
  var sizeClass = {
    sm: 'px-8 py-3 text-sm',
    md: 'px-12 py-4 text-md',
    lg: 'px-16 py-5 text-lg'
  };
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClick,
    className: ['inline-flex', 'items-center', 'leading-4', 'font-medium', 'rounded-full', 'shadow-sm', 'text-white', 'bg-primary', 'hover:bg-primary-600', 'transition-colors', 'duration-200', 'ease-in-out', 'focus:outline-none', sizeClass[size]].join(' ')
  }, label);
};

exports.Button = Button;
Button.propTypes = {
  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['sm', 'md', 'lg']),

  /**
  * Button contents
  */
  label: _propTypes.default.string.isRequired,

  /**
  * Optional click handler
  */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  onClick: undefined,
  size: 'sm'
};