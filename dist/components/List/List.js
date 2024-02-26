"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _excluded = ["items", "style", "level", "additionalClasses"];

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

/**
 * Component for listings
 */
var List = function List(_ref) {
  var items = _ref.items,
      style = _ref.style,
      level = _ref.level,
      additionalClasses = _ref.additionalClasses,
      props = _objectWithoutProperties(_ref, _excluded);

  var ListType = style === 'ordered' ? 'ol' : 'ul';
  var listStyleClass = {
    ordered: 'list-decimal',
    unordered: 'list-disc'
  };
  var safeLevel = Math.max(level, 1);
  var marginClass = safeLevel === 1 ? 'ml-0' : 'ml-6';
  return /*#__PURE__*/_react.default.createElement(ListType, _extends({
    className: ['space-y-1', listStyleClass[style], 'list-inside', marginClass].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), items.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: item.content
    }, /*#__PURE__*/_react.default.isValidElement(item.content) ? /*#__PURE__*/_react.default.createElement("li", null, item.content) : /*#__PURE__*/_react.default.createElement("li", {
      dangerouslySetInnerHTML: {
        __html: item.content
      }
    }), item.items && item.items.length > 0 && /*#__PURE__*/_react.default.createElement(List, {
      items: item.items,
      style: style,
      level: safeLevel + 1
    }));
  }));
};

var Items = {
  content: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]).isRequired
};
Items.items = _propTypes.default.arrayOf(_propTypes.default.shape(Items));
List.propTypes = {
  /**
   * List content
   */
  items: _propTypes.default.arrayOf(_propTypes.default.shape(Items)).isRequired,

  /**
   * List style
   */
  style: _propTypes.default.oneOf(['ordered', 'unordered']),

  /**
   * List level
   */
  level: _propTypes.default.number,

  /**
   * Additional classes for list
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
List.defaultProps = {
  style: 'unordered',
  level: 1,
  additionalClasses: []
};
var _default = List;
exports.default = _default;