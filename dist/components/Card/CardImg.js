"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Context = require("./Context");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
  additionalClasses: [],
  additionalContainerClasses: [],
  alt: false,
  imageAdditionalProps: {}
};

/**
 * Component for image in card like component
 */
const CardImg = _ref => {
  let {
    src,
    alt = defaults.alt,
    additionalClasses = defaults.additionalClasses,
    additionalContainerClasses = defaults.additionalContainerClasses,
    imageAdditionalProps = defaults.imageAdditionalProps,
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
var _default = exports.default = CardImg;