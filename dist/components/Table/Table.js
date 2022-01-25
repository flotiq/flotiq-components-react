function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const Table = ({
  content,
  withHeadings,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("table", _extends({
  className: ['table mt-2 mb-4', ...additionalClasses].join(' ')
}, props), content.map((row, index) => withHeadings && index === 0 ? /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, row.map(column => /*#__PURE__*/React.createElement("th", null, column)))) : /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, row.map(column => /*#__PURE__*/React.createElement("td", {
  className: "text-m"
}, column))))));

Table.propTypes = {
  /**
   * Table contents
   */
  content: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,

  /**
   * Does the table should have headings?
   */
  withHeadings: PropTypes.bool,

  /**
   * Additional classes for table
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Table.defaultProps = {
  withHeadings: false,
  additionalClasses: []
};
export default Table;