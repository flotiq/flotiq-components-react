function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({
  url,
  caption,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", {
  className: ['flex flex-col', ...additionalClasses].join(' ')
}, caption && /*#__PURE__*/React.createElement("p", {
  className: "pb-2 md:pb-5"
}, caption), /*#__PURE__*/React.createElement("audio", _extends({
  controls: true,
  className: "w-full"
}, props), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "audio/ogg"
}), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "audio/mpeg"
}), "Your browser does not support the audio element."));

Audio.propTypes = {
  /**
   * File url
   */
  url: PropTypes.string.isRequired,

  /**
   * File caption
   */
  caption: PropTypes.string,

  /**
   * Additional classes for audio
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Audio.defaultProps = {
  caption: '',
  additionalClasses: []
};
export default Audio;