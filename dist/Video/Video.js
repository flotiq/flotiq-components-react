import React from 'react';

const Video = ({
  url,
  caption
}) => /*#__PURE__*/React.createElement("div", {
  className: "text-content-image pt-2 pb-2"
}, /*#__PURE__*/React.createElement("video", {
  width: "320",
  height: "240",
  controls: true
}, /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "video/mp4"
}), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "video/ogg"
}), "Your browser does not support the video tag."), /*#__PURE__*/React.createElement("p", {
  className: "text-content-image-caption pt-2"
}, caption));

export default Video;