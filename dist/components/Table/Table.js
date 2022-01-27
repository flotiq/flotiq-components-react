function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * Multi-column multi-row table component
 */

const Table = ({
  content,
  headers,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("table", _extends({
  className: ['w-full border-collapse mt-2 mb-4 border border-light', ...additionalClasses].join(' ')
}, props), headers.length > 0 && /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, headers.map(column => /*#__PURE__*/React.createElement("th", {
  className: "border border-light p-3"
}, column)))), /*#__PURE__*/React.createElement("tbody", null, content.map(row => /*#__PURE__*/React.createElement("tr", null, row.map(column => /*#__PURE__*/React.createElement("td", {
  className: "border border-light p-3"
}, column))))));

Table.propTypes = {
  /**
   * Table contents
   */
  content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element]))).isRequired,

  /**
   * Array of headers
   */
  headers: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.element])),

  /**
   * Additional classes for table
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Table.defaultProps = {
  headers: [],
  additionalClasses: []
};
export default Table;