"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Code = _interopRequireDefault(require("../Code/Code"));

var _Delimiter = _interopRequireDefault(require("../Delimiter/Delimiter"));

var _File = _interopRequireDefault(require("../File/File"));

var _Header = _interopRequireDefault(require("../Header/Header"));

var _List = _interopRequireDefault(require("../List/List"));

var _Paragraph = _interopRequireDefault(require("../Paragraph/Paragraph"));

var _Quote = _interopRequireDefault(require("../Quote/Quote"));

var _Table = _interopRequireDefault(require("../Table/Table"));

var _Warning = _interopRequireDefault(require("../Warning/Warning"));

var _YouTubeEmbed = _interopRequireDefault(require("../YouTubeEmbed/YouTubeEmbed"));

var _excluded = ["blocks", "highlight", "headerProps", "paragraphProps", "youTubeEmbedProps", "fileProps", "quoteProps", "tableProps", "codeProps", "warningProps", "delimiterProps", "listProps", "additionalClasses", "standardPadding"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Component for displaying contents of block fields (editor.js)
 */
var Content = function Content(_ref) {
  var blocks = _ref.blocks,
      highlight = _ref.highlight,
      headerProps = _ref.headerProps,
      paragraphProps = _ref.paragraphProps,
      youTubeEmbedProps = _ref.youTubeEmbedProps,
      fileProps = _ref.fileProps,
      quoteProps = _ref.quoteProps,
      tableProps = _ref.tableProps,
      codeProps = _ref.codeProps,
      warningProps = _ref.warningProps,
      delimiterProps = _ref.delimiterProps,
      listProps = _ref.listProps,
      additionalClasses = _ref.additionalClasses,
      standardPadding = _ref.standardPadding,
      props = _objectWithoutProperties(_ref, _excluded);

  (0, _react.useEffect)(function () {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight]);

  var getBlock = function getBlock(block) {
    var _block$tunes, _block$tunes$alignmen, _block$tunes2, _block$tunes2$alignme;

    switch (block.type) {
      case 'header':
        return /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
          level: block.data.level,
          anchor: block.data.anchor,
          alignment: (_block$tunes = block.tunes) === null || _block$tunes === void 0 ? void 0 : (_block$tunes$alignmen = _block$tunes.alignmentTuneTool) === null || _block$tunes$alignmen === void 0 ? void 0 : _block$tunes$alignmen.alignment
        }, headerProps, {
          key: block.id
        }), block.data.text);

      case 'paragraph':
        return /*#__PURE__*/_react.default.createElement(_Paragraph.default, _extends({
          alignment: (_block$tunes2 = block.tunes) === null || _block$tunes2 === void 0 ? void 0 : (_block$tunes2$alignme = _block$tunes2.alignmentTuneTool) === null || _block$tunes2$alignme === void 0 ? void 0 : _block$tunes2$alignme.alignment
        }, paragraphProps, {
          key: block.id
        }), block.data.text);

      case 'list':
        return /*#__PURE__*/_react.default.createElement(_List.default, _extends({
          items: block.data.items,
          style: block.data.style
        }, listProps, {
          key: block.id
        }));

      case 'image':
        return /*#__PURE__*/_react.default.createElement(_File.default, _extends({
          url: block.data.url,
          caption: block.data.caption,
          fileName: block.data.fileName,
          extension: block.data.extension,
          stretched: block.data.stretched
        }, fileProps, {
          key: block.id
        }));

      case 'quote':
        return /*#__PURE__*/_react.default.createElement(_Quote.default, _extends({
          text: block.data.text,
          caption: block.data.caption
        }, quoteProps, {
          key: block.id
        }));

      case 'youtubeEmbed':
        return /*#__PURE__*/_react.default.createElement(_YouTubeEmbed.default, _extends({
          url: block.data.url,
          key: block.id
        }, youTubeEmbedProps));

      case 'table':
        return /*#__PURE__*/_react.default.createElement(_Table.default, _extends({
          content: block.data.withHeadings ? block.data.content.slice(1) : block.data.content,
          headers: block.data.withHeadings ? block.data.content[0] : null
        }, tableProps, {
          key: block.id
        }));

      case 'code':
        return /*#__PURE__*/_react.default.createElement(_Code.default, _extends({}, codeProps, {
          key: block.id
        }), block.data.code);

      case 'warning':
        return /*#__PURE__*/_react.default.createElement(_Warning.default, _extends({
          title: block.data.title,
          message: block.data.message
        }, warningProps, {
          key: block.id
        }));

      case 'delimiter':
        return /*#__PURE__*/_react.default.createElement(_Delimiter.default, delimiterProps);

      default:
        return null;
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: additionalClasses.join(' ')
  }, props), blocks.map(function (block) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: standardPadding,
      key: block.id
    }, getBlock(block));
  }));
};

Content.propTypes = {
  /**
   * Content blocks
   */
  blocks: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,

  /**
   * Additional props for header component
   */
  headerProps: _propTypes.default.shape({}),

  /**
   * Additional props for paragraph component
   */
  paragraphProps: _propTypes.default.shape({}),

  /**
   * Additional props for YouTube embed component
   */
  youTubeEmbedProps: _propTypes.default.shape({}),

  /**
   * Additional props for file components
   */
  fileProps: _propTypes.default.shape({}),

  /**
   * Additional props for quote component
   */
  quoteProps: _propTypes.default.shape({}),

  /**
   * Additional props for table component
   */
  tableProps: _propTypes.default.shape({}),

  /**
   * Additional props for code component
   */
  codeProps: _propTypes.default.shape({}),

  /**
   * Additional props for warning component
   */
  warningProps: _propTypes.default.shape({}),

  /**
   * Additional props for delimiter component
   */
  delimiterProps: _propTypes.default.shape({}),

  /**
   * Additional components for list component
   */
  listProps: _propTypes.default.shape({}),

  /**
   * Standard horizontal padding for block components
   */
  standardPadding: _propTypes.default.string,

  /**
   * Additional classes for content container
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
Content.defaultProps = {
  headerProps: {},
  paragraphProps: {},
  youTubeEmbedProps: {},
  fileProps: {},
  quoteProps: {},
  tableProps: {},
  codeProps: {},
  warningProps: {},
  delimiterProps: {},
  listProps: {},
  standardPadding: 'py-2',
  additionalClasses: []
};
var _default = Content;
exports.default = _default;