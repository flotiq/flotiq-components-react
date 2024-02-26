"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rounded = require("../../defaultProps/rounded");

var _Delimiter = _interopRequireDefault(require("../Delimiter/Delimiter"));

var _Header = _interopRequireDefault(require("../Header/Header"));

var _Paragraph = _interopRequireDefault(require("../Paragraph/Paragraph"));

var _excluded = ["title", "titleLevel", "excerpt", "thumbnailSrc", "thumbnailSrcAlt", "cardUrl", "demoUrl", "rounded", "additionalClasses", "additionalCategoryClasses", "additionalLiveDemoClasses", "additionalExcerptClasses", "additionalHeaderClasses", "additionalFooterLinkClasses", "category", "tagIcon", "footerLinks"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ArrowTopRightIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR' + '0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9u' + 'ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9I' + 'k0zLjA4MzAxIDEyLjkxNjhMMTIuOTE2MyAzLjA4MzUiIHN0cm9rZT0iIzAwODNGQy' + 'Igc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1' + 'saW5lam9pbj0icm91bmQiLz4NCjxwYXRoIGQ9Ik0xMi45MTY1IDEwLjA0MVYzLjA4' + 'MzVINS45NTg5OCIgc3Ryb2tlPSIjMDA4M0ZDIiBzdHJva2Utd2lkdGg9IjIiIHN0c' + 'm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPg0KPC' + '9zdmc+DQo=';
var LiveDemoIcon = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAi' + 'IGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9I' + 'mh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwIDQuMzc0NTFDMy' + '43NSA0LjM3NDUxIDEuMjUgMTAuMDAwMSAxLjI1IDEwLjAwMDFDMS4yNSAxMC4wMDAxIDM' + 'uNzUgMTUuNjI0NSAxMCAxNS42MjQ1QzE2LjI1IDE1LjYyNDUgMTguNzUgMTAuMDAwMSAx' + 'OC43NSAxMC4wMDAxQzE4Ljc1IDEwLjAwMDEgMTYuMjUgNC4zNzQ1MSAxMCA0LjM3NDUxW' + 'iIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZW' + 'pvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMCAxMy4xMjVDMTEuNzI1OSAxMy4xMjUgMTM' + 'uMTI1IDExLjcyNTkgMTMuMTI1IDEwQzEzLjEyNSA4LjI3NDExIDExLjcyNTkgNi44NzUg' + 'MTAgNi44NzVDOC4yNzQxMSA2Ljg3NSA2Ljg3NSA4LjI3NDExIDYuODc1IDEwQzYuODc1I' + 'DExLjcyNTkgOC4yNzQxMSAxMy4xMjUgMTAgMTMuMTI1WiIgc3Ryb2tlPSJibGFjayIgc3' + 'Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3Z' + 'nPgo=';
/**
 * Component for displaying product showcase card
 */

var ShowcaseCard = function ShowcaseCard(_ref) {
  var title = _ref.title,
      _ref$titleLevel = _ref.titleLevel,
      titleLevel = _ref$titleLevel === void 0 ? 5 : _ref$titleLevel,
      excerpt = _ref.excerpt,
      thumbnailSrc = _ref.thumbnailSrc,
      thumbnailSrcAlt = _ref.thumbnailSrcAlt,
      cardUrl = _ref.cardUrl,
      demoUrl = _ref.demoUrl,
      rounded = _ref.rounded,
      additionalClasses = _ref.additionalClasses,
      additionalCategoryClasses = _ref.additionalCategoryClasses,
      additionalLiveDemoClasses = _ref.additionalLiveDemoClasses,
      additionalExcerptClasses = _ref.additionalExcerptClasses,
      additionalHeaderClasses = _ref.additionalHeaderClasses,
      additionalFooterLinkClasses = _ref.additionalFooterLinkClasses,
      category = _ref.category,
      tagIcon = _ref.tagIcon,
      footerLinks = _ref.footerLinks,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: ['max-w-sm', 'p-0', 'bg-white', 'hover:shadow-xl', 'transition-all', 'transform', 'duration-300', 'overflow-hidden', 'parent-hover-opacity-anchor', 'flex', 'flex-col', _rounded.roundedProps.classSet[rounded]].concat(_toConsumableArray(additionalClasses)).join(' ')
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "w-full aspect-w-1 aspect-h-1\r bg-gray-200 overflow-hidden xl:aspect-w-7 xl:aspect-h-8 relative"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: cardUrl,
    rel: "noreferrer",
    "aria-label": "Card Url"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "absolute w-full top-0 left-0 h-full z-index-1\r opacity-[0.6] bg-secondary-500 children-opacity-anchor transition-all transform duration-300"
  })), category && thumbnailSrc && /*#__PURE__*/_react.default.createElement("span", {
    className: ['absolute', 'text-white', 'text-sm', 'bg-primary-600', 'px-4', 'p-1', 'left-5', 'top-5', 'rounded-[6px]', 'color-primary', _rounded.roundedProps.classSet[rounded]].concat(_toConsumableArray(additionalCategoryClasses)).join(' ')
  }, category), demoUrl && thumbnailSrc && /*#__PURE__*/_react.default.createElement("a", {
    href: demoUrl,
    target: "_blank",
    rel: "noreferrer",
    className: ['absolute', 'text-black', 'text-sm', 'bg-white', 'px-4', 'py-2', 'left-5', 'bottom-5', 'rounded-[40px]', 'color-primary', 'flex', 'items-center', 'opacity-[0.5]', 'no-underline', 'hover:opacity-[1]', 'hover:no-underline', 'hover:text-black'].concat(_toConsumableArray(additionalFooterLinkClasses)).join(' ')
  }, "Live Demo", /*#__PURE__*/_react.default.createElement("img", {
    src: LiveDemoIcon,
    alt: "Live Demo",
    className: "ml-2"
  })), tagIcon && thumbnailSrc && /*#__PURE__*/_react.default.createElement("img", {
    src: tagIcon,
    alt: "Tag Icon",
    className: "absolute top-5 right-5 max-h-[30px]"
  }), thumbnailSrc && /*#__PURE__*/_react.default.createElement("img", {
    src: thumbnailSrc,
    alt: thumbnailSrcAlt,
    className: "w-full h-full object-center object-cover group-hover:opacity-75"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: cardUrl,
    rel: "noreferrer",
    className: "grow no-underline hover:no-underline hover:text-black"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-1 px-6 pb-6 pt-2"
  }, /*#__PURE__*/_react.default.createElement(_Header.default, {
    level: titleLevel,
    additionalClasses: _toConsumableArray(additionalHeaderClasses).join(' ')
  }, title), /*#__PURE__*/_react.default.createElement(_Paragraph.default, {
    className: ['text-sm'].concat(_toConsumableArray(additionalExcerptClasses)).join(' ')
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, excerpt.substring(0, 110), (excerpt === null || excerpt === void 0 ? void 0 : excerpt.length) >= 110 ? '...' : '')))), (footerLinks === null || footerLinks === void 0 ? void 0 : footerLinks.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Delimiter.default, {
    variant: "light",
    className: "mb-[20px] mx-6"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "ml-1 px-6 pb-6 flex flex-wrap justify-between"
  }, footerLinks === null || footerLinks === void 0 ? void 0 : footerLinks.map(function (footer) {
    return /*#__PURE__*/_react.default.createElement("a", {
      href: footer.link,
      className: ['text-sm', 'hover:text-blue-600', 'font-400', 'inline-flex', 'items-center', 'no-underline', 'hover:no-underline'].concat(_toConsumableArray(additionalExcerptClasses)).join(' '),
      target: "_blank",
      rel: "noreferrer"
    }, footer.text, /*#__PURE__*/_react.default.createElement("img", {
      src: ArrowTopRightIcon,
      alt: "Arrow Top Right",
      className: "ml-1"
    }));
  }))));
};

var Footers = {
  link: _propTypes.default.string,
  text: _propTypes.default.string
};
ShowcaseCard.propTypes = {
  /**
   * Title contents
   */
  title: _propTypes.default.string,

  /**
   * Title variant
   */
  titleLevel: _propTypes.default.oneOf([1, 2, 3, 4, 5, 6]),

  /**
   * Excerpt contents
   */
  excerpt: _propTypes.default.string,

  /**
   * Image url
   */
  thumbnailSrc: _propTypes.default.string,

  /**
   * Image alt text
   */
  thumbnailSrcAlt: _propTypes.default.string,

  /**
   * Demo url
   */
  demoUrl: _propTypes.default.string,

  /**
   * Category contents
   */
  category: _propTypes.default.string,

  /**
   * Tag icon url
   */
  tagIcon: _propTypes.default.string,

  /**
   * Card url
   */
  cardUrl: _propTypes.default.string,

  /**
   * Footer content
   */
  footerLinks: _propTypes.default.arrayOf(_propTypes.default.shape(Footers)),

  /**
   * Is this the rounded card?
   */
  rounded: _propTypes.default.oneOf(['none', 'sm', 'md', 'lg']),

  /**
   * Additional classes for card
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for category
   */
  additionalCategoryClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for Live Demo button
   */
  additionalLiveDemoClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for excerpt
   */
  additionalExcerptClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for header
   */
  additionalHeaderClasses: _propTypes.default.arrayOf(_propTypes.default.string),

  /**
   * Additional classes for footer link
   */
  additionalFooterLinkClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
ShowcaseCard.defaultProps = {
  title: undefined,
  titleLevel: '5',
  excerpt: undefined,
  thumbnailSrc: undefined,
  thumbnailSrcAlt: undefined,
  demoUrl: undefined,
  category: undefined,
  tagIcon: undefined,
  cardUrl: undefined,
  footerLinks: undefined,
  rounded: 'lg',
  additionalClasses: [],
  additionalCategoryClasses: [],
  additionalLiveDemoClasses: [],
  additionalExcerptClasses: [],
  additionalHeaderClasses: [],
  additionalFooterLinkClasses: []
};
var _default = ShowcaseCard;
exports.default = _default;