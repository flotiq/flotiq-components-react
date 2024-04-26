"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CardBody = _interopRequireDefault(require("./CardBody"));
var _CardTitle = _interopRequireDefault(require("./CardTitle"));
var _CardImg = _interopRequireDefault(require("./CardImg"));
var _CardText = _interopRequireDefault(require("./CardText"));
var _Context = require("./Context");
var _rounded = require("../../defaultProps/rounded");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const calcBasisClass = function (scale, isHorizontal) {
  let breakpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'md';
  if (scale && isHorizontal) {
    return "".concat(breakpoint, ":basis-").concat(scale);
  }
  return '';
};

/**
 * Complex component for displaying card like elements
 */
const Card = _ref => {
  let {
    children,
    rounded,
    bordered,
    horizontal,
    proportionsForHorizontal,
    additionalClasses,
    ...props
  } = _ref;
  const borderedClass = bordered ? 'border border-gray-200' : '';
  const directionClasses = horizontal ? 'flex flex-wrap justify-between align-start' : 'flex-none';
  const context = (0, _react.useMemo)(() => ({
    horizontal,
    basisClassImage: calcBasisClass(proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.img, horizontal, proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.breakpoint),
    basisClassBody: calcBasisClass(proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.body, horizontal, proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.breakpoint)
  }), [horizontal, proportionsForHorizontal]);
  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: [directionClasses, 'bg-white', 'overflow-hidden', _rounded.roundedProps.classSet[rounded], borderedClass, ...additionalClasses].join(' ')
  }, props), children));
};
Card.propTypes = {
  /**
   * Is this the rounded card?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg']),
  /**
   * Should the card has a border?
   */
  bordered: _propTypes.default.bool,
  /**
   * Should the card be horizontal?
   */
  horizontal: _propTypes.default.bool,
  /**
   * Should the card be horizontal?
   */
  proportionsForHorizontal: _propTypes.default.shape({
    body: _propTypes.default.string,
    img: _propTypes.default.string,
    breakpoint: _propTypes.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),
  /**
   * Additional classes for card
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Card.defaultProps = {
  rounded: 'lg',
  bordered: true,
  horizontal: false,
  additionalClasses: [],
  proportionsForHorizontal: {
    body: '1/2',
    img: '1/2',
    breakpoint: 'md'
  }
};
var _default = exports.default = Object.assign(Card, {
  Body: _CardBody.default,
  Title: _CardTitle.default,
  Img: _CardImg.default,
  Text: _CardText.default
});