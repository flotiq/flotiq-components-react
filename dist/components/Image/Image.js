"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _rounded = require("../../defaultProps/rounded");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for displaying images
 */
const Image = _ref => {
  let {
    url,
    caption,
    stretched,
    rounded,
    additionalClasses,
    captionAdditionalClasses,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", _extends({
    src: url,
    alt: caption,
    className: [stretched ? 'w-full' : '', _rounded.roundedProps.classSet[rounded], ...additionalClasses].join(' ')
  }, props)), caption && /*#__PURE__*/_react.default.createElement("p", {
    className: ['pt-2 opacity-70 italic', ...captionAdditionalClasses].join(' '),
    dangerouslySetInnerHTML: {
      __html: caption
    }
  }));
};
Image.propTypes = {
  /**
   * Image url
   */
  url: _propTypes.default.string.isRequired,
  /**
   * Image caption
   */
  caption: _propTypes.default.string,
  /**
   * Does image should be stretched
   */
  stretched: _propTypes.default.bool,
  /**
   * Image roundness?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', 'full']),
  /**
   * Additional classes for image
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for image caption
   */
  captionAdditionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Image.defaultProps = {
  caption: null,
  stretched: false,
  rounded: 'none',
  additionalClasses: [],
  captionAdditionalClasses: []
};
var _default = exports.default = Image;