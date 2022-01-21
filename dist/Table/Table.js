import React from 'react';

const Table = ({
  content,
  withHeadings
}) => /*#__PURE__*/React.createElement("table", {
  className: "table text-content-table mt-2 mb-4"
}, content.map((row, index) => withHeadings && index === 0 ? /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, row.map(column => /*#__PURE__*/React.createElement("th", null, column)))) : /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, row.map(column => /*#__PURE__*/React.createElement("td", {
  className: "text-m"
}, column))))));

export default Table;