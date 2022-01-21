import React from 'react';

const Quote = ({
  text,
  caption
}) => /*#__PURE__*/React.createElement("div", {
  className: "text-content-quote mt-2 mb-4"
}, /*#__PURE__*/React.createElement("p", {
  className: "text-content-quote-quote text-m"
}, text), /*#__PURE__*/React.createElement("p", {
  className: "text-content-quote-caption pt-4"
}, caption));

export default Quote;