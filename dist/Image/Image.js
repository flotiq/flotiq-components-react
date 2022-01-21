import React from 'react';

const Image = ({
  url,
  caption,
  stretched
}) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("img", {
  src: url,
  alt: caption,
  className: stretched === 'true' ? 'text-content-image-image text-content-image-image__stretched' : 'text-content-image-image'
}), caption && /*#__PURE__*/React.createElement("p", {
  className: "text-content-image-caption pt-2"
}, caption));

export default Image;