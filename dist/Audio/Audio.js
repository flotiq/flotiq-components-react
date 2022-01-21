import React from 'react';
import PropTypes from 'prop-types';

const Audio = ({
  url,
  caption,
  additionalClasses = []
}) => /*#__PURE__*/React.createElement("div", {
  className: ['flex flex-col', ...additionalClasses].join(' ')
}, caption && /*#__PURE__*/React.createElement("p", {
  className: "pb-25 md:pb-5"
}, caption), /*#__PURE__*/React.createElement("audio", {
  controls: true,
  className: "w-full"
}, /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "audio/ogg"
}), /*#__PURE__*/React.createElement("source", {
  src: url,
  type: "audio/mpeg"
}), "Your browser does not support the audio element."));

Audio.propTypes = {
  /**
   * Header contents
   */
  url: PropTypes.string.isRequired,

  /**
   * Header anchor
   */
  caption: PropTypes.string,

  /**
   * Additional classes for button
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Audio.defaultProps = {
  caption: '',
  additionalClasses: []
};
export default Audio;