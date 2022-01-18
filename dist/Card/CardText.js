import React from 'react';
import PropTypes from 'prop-types';

const CardText = ({
  children,
  additionalClasses = []
}) => /*#__PURE__*/React.createElement("p", {
  className: ['text-base', 'font-light', 'my-5', ...additionalClasses].join(' ')
}, children);

CardText.propTypes = {
  /**
   * Additional classes for card text
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
CardText.defaultProps = {
  additionalClasses: []
};
export default CardText;