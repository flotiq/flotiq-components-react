import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({
  children,
  additionalClasses = []
}) => /*#__PURE__*/React.createElement("h2", {
  className: ['text-3xl', 'font-semibold', 'leading-10', ...additionalClasses].join(' ')
}, children);

CardTitle.propTypes = {
  /**
   * Additional classes for card body
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
CardTitle.defaultProps = {
  additionalClasses: []
};
export default CardTitle;