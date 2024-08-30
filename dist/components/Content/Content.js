"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaults = exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Code = _interopRequireWildcard(require("../Code/Code"));
var _Delimiter = _interopRequireWildcard(require("../Delimiter/Delimiter"));
var _File = _interopRequireWildcard(require("../File/File"));
var _Header = _interopRequireWildcard(require("../Header/Header"));
var _List = _interopRequireWildcard(require("../List/List"));
var _Paragraph = _interopRequireWildcard(require("../Paragraph/Paragraph"));
var _Quote = _interopRequireWildcard(require("../Quote/Quote"));
var _Table = _interopRequireWildcard(require("../Table/Table"));
var _Warning = _interopRequireWildcard(require("../Warning/Warning"));
var _YouTubeEmbed = _interopRequireWildcard(require("../YouTubeEmbed/YouTubeEmbed"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const defaults = exports.defaults = {
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

/**
 * Component for displaying contents of block fields (editor.js)
 */
const Content = _ref => {
  let {
    blocks,
    highlight,
    headerProps = defaults.headerProps,
    paragraphProps = defaults.paragraphProps,
    youTubeEmbedProps = defaults.youTubeEmbedProps,
    fileProps = defaults.fileProps,
    quoteProps = defaults.quoteProps,
    tableProps = defaults.tableProps,
    codeProps = defaults.codeProps,
    warningProps = defaults.warningProps,
    delimiterProps = defaults.delimiterProps,
    listProps = defaults.listProps,
    additionalClasses = defaults.additionalClasses,
    standardPadding = defaults.standardPadding,
    ...props
  } = _ref;
  (0, _react.useEffect)(() => {
    if (highlight) {
      highlight.highlightAll();
    }
  }, [highlight]);
  const getBlock = block => {
    switch (block.type) {
      case 'header':
        return /*#__PURE__*/_react.default.createElement(_Header.default, _extends({
          level: block.data.level,
          anchor: block.data.anchor,
          alignment: block.tunes?.alignmentTuneTool?.alignment
        }, headerProps, {
          key: block.id
        }), block.data.text);
      case 'paragraph':
        return /*#__PURE__*/_react.default.createElement(_Paragraph.default, _extends({
          alignment: block.tunes?.alignmentTuneTool?.alignment
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
          stretched: !!block.data.stretched
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
   * Additional props for header component, for more information check Header component
   */
  headerProps: _propTypes.default.shape(_Header.headerPropTypes),
  /**
   * Additional props for paragraph component, for more information check Paragraph component
   */
  paragraphProps: _propTypes.default.shape(_Paragraph.paragraphPropTypes),
  /**
   * Additional props for YouTube embed component, for more information check YouTubeEmbed component
   */
  youTubeEmbedProps: _propTypes.default.shape(_YouTubeEmbed.youTubeEmbedPropTypes),
  /**
   * Additional props for file components, for more information check File component
   */
  fileProps: _propTypes.default.shape(_File.filePropTypes),
  /**
   * Additional props for quote component, for more information check Quote components
   */
  quoteProps: _propTypes.default.shape(_Quote.quotePropTypes),
  /**
   * Additional props for table component, for more information check Table component
   */
  tableProps: _propTypes.default.shape(_Table.tablePropTypes),
  /**
   * Additional props for code component, for more information check Code component
   */
  codeProps: _propTypes.default.shape(_Code.codePropTypes),
  /**
   * Additional props for warning component, for more information check Warning component
   */
  warningProps: _propTypes.default.shape(_Warning.warningPropTypes),
  /**
   * Additional props for delimiter component, for more information check Delimiter component
   */
  delimiterProps: _propTypes.default.shape(_Delimiter.delimiterPropTypes),
  /**
   * Additional components for list component, for more information check List component
   */
  listProps: _propTypes.default.shape(_List.listPropTypes),
  /**
   * Standard horizontal padding for block components
   */
  standardPadding: _propTypes.default.string,
  /**
   * Additional classes for content container
   */
  additionalClasses: _propTypes.default.arrayOf(_propTypes.default.string)
};
var _default = exports.default = Content;