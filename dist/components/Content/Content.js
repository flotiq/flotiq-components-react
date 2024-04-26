"use strict";

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
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Component for displaying contents of block fields (editor.js)
 */
const Content = _ref => {
  let {
    blocks,
    highlight,
    headerProps,
    paragraphProps,
    youTubeEmbedProps,
    fileProps,
    quoteProps,
    tableProps,
    codeProps,
    warningProps,
    delimiterProps,
    listProps,
    additionalClasses,
    standardPadding,
    ...props
  } = _ref;
  (0, _react.useEffect)(() => {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight]);
  const getBlock = block => {
    var _block$tunes, _block$tunes2;
    switch (block.type) {
      case 'header':
        return /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
          level: block.data.level,
          anchor: block.data.anchor,
          alignment: (_block$tunes = block.tunes) === null || _block$tunes === void 0 || (_block$tunes = _block$tunes.alignmentTuneTool) === null || _block$tunes === void 0 ? void 0 : _block$tunes.alignment
        }, headerProps, {
          key: block.id
        }), block.data.text);
      case 'paragraph':
        return /*#__PURE__*/_react.default.createElement(_Paragraph.default, _extends({
          alignment: (_block$tunes2 = block.tunes) === null || _block$tunes2 === void 0 || (_block$tunes2 = _block$tunes2.alignmentTuneTool) === null || _block$tunes2 === void 0 ? void 0 : _block$tunes2.alignment
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
          headers: block.data.withHeadings ? block.data.content[0] : []
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
  }, props), blocks.map(block => /*#__PURE__*/_react.default.createElement("div", {
    className: standardPadding,
    key: block.id
  }, getBlock(block))));
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
var _default = exports.default = Content;