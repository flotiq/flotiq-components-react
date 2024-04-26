"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rounded = require("../../defaultProps/rounded");
var _background = require("../../defaultProps/background");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Announcement = _ref => {
  let {
    variant,
    backgroundColor,
    textAlignment,
    textSize,
    textColor,
    content,
    additionalClasses,
    rounded,
    ...props
  } = _ref;
  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    none: ''
  };
  const fontSize = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-large',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
    none: ''
  };
  const style = {};
  if (backgroundColor) {
    style.backgroundColor = backgroundColor;
  }
  if (textColor) {
    style.color = textColor;
  }
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['px-12 py-6', _background.backgroundProps.classSet[variant], _rounded.roundedProps.classSet[rounded], alignment[textAlignment], fontSize[textSize], ...additionalClasses].join(' '),
    style: style
  }, props), content);
};
Announcement.propTypes = {
  /**
   * What color variant to use?
   */
  variant: _propTypes.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'transparent']),
  /**
  * What background color to use? Background color will override variant colors
  */
  backgroundColor: _propTypes.default.string,
  /**
  * Text alignment
  */
  textAlignment: _propTypes.default.oneOf(['left', 'center', 'right']),
  /**
  * Text size
  */
  textSize: _propTypes.default.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl']),
  /**
   * What text color to use?  Text color will override variant colors
   */
  textColor: _propTypes.default.string,
  /**
  * Announcement content
  */
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired,
  /**
   * Border radius
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  /**
   * Additional classes for button
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Announcement.defaultProps = {
  variant: _background.backgroundProps.defaultValue,
  backgroundColor: null,
  textAlignment: null,
  textSize: 'base',
  textColor: null,
  rounded: 'lg',
  additionalClasses: []
};
var _default = exports.default = Announcement;