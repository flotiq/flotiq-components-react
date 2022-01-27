function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import PropTypes from 'prop-types';
/**
 * Component for audio files
 */

const Audio = ({
  url,
  caption,
  extension,
  additionalClasses,
  ...props
}) => /*#__PURE__*/React.createElement("div", {
  className: ['flex flex-col', ...additionalClasses].join(' ')
}, /*#__PURE__*/React.createElement("audio", _extends({
  controls: true,
  className: "w-full"
}, props), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: `audio/${extension}`
}), "Your browser does not support the audio element."), caption && /*#__PURE__*/React.createElement("p", {
  className: "pt-2 md:pt-5 opacity-70 italic"
}, caption));

Audio.propTypes = {
  /**
   * File url
   */
  url: PropTypes.string.isRequired,

  /**
   * File extension
   */
  extension: PropTypes.string.isRequired,

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
  caption: null,
  additionalClasses: []
};
export default Audio;