"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Context = require("./Context");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for image in card like component
 */
const CardImg = _ref => {
  let {
    src,
    alt,
    additionalClasses = [],
    additionalContainerClasses = [],
    imageAdditionalProps = {},
    ...props
  } = _ref;
  const context = (0, _react.useContext)(_Context.Context);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: [context.basisClassImage, ...additionalContainerClasses].join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("img", _extends({
    src: src,
    alt: alt,
    className: additionalClasses.join(' ')
  }, imageAdditionalProps)));
};
CardImg.propTypes = {
  /**
   * Image source
   */
  src: _propTypes.default.string.isRequired,
  /**
   * Alternative text for image
   */
  alt: _propTypes.default.string,
  /**
   * Additional classes for image
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional classes for image container
   */
  additionalContainerClasses: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Additional props for image
   */
  imageAdditionalProps: _propTypes.default.shape({})
};
CardImg.defaultProps = {
  additionalClasses: [],
  additionalContainerClasses: [],
  alt: false,
  imageAdditionalProps: {}
};
var _default = exports.default = CardImg;