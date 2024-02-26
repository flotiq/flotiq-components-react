"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

var _excluded = ["children", "rounded", "bordered", "horizontal", "proportionsForHorizontal", "additionalClasses"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var calcBasisClass = function calcBasisClass(scale, isHorizontal) {
  var breakpoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'md';

  if (scale && isHorizontal) {
    return "".concat(breakpoint, ":basis-").concat(scale);
  }

  return '';
};
/**
 * Complex component for displaying card like elements
 */


var Card = function Card(_ref) {
  var children = _ref.children,
      rounded = _ref.rounded,
      bordered = _ref.bordered,
      horizontal = _ref.horizontal,
      proportionsForHorizontal = _ref.proportionsForHorizontal,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var borderedClass = bordered ? 'border border-gray-200' : '';
  var directionClasses = horizontal ? 'flex flex-wrap justify-between align-start' : 'flex-none';
  var context = (0, _react.useMemo)(function () {
    return {
      horizontal: horizontal,
      basisClassImage: calcBasisClass(proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.img, horizontal, proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.breakpoint),
      basisClassBody: calcBasisClass(proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.body, horizontal, proportionsForHorizontal === null || proportionsForHorizontal === void 0 ? void 0 : proportionsForHorizontal.breakpoint)
    };
  }, [horizontal, proportionsForHorizontal]);
  return /*#__PURE__*/_react.default.createElement(_Context.Context.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: [directionClasses, 'bg-white', 'overflow-hidden', _rounded.roundedProps.classSet[rounded], borderedClass].concat(_toConsumableArray(additionalClasses)).join(' ')
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

var _default = Object.assign(Card, {
  Body: _CardBody.default,
  Title: _CardTitle.default,
  Img: _CardImg.default,
  Text: _CardText.default
});

exports.default = _default;