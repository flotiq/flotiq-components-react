import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from './Context';
/**
 * Component for image in card like component
 */

const CardImg = ({
  src,
  alt,
  additionalClasses = [],
  additionalContainerClasses = []
}) => {
  const context = useContext(Context);
  return /*#__PURE__*/React.createElement("div", {
    className: [context.basisClassImage, ...additionalContainerClasses].join(' ')
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    className: additionalClasses.join(' ')
  }));
};

CardImg.propTypes = {
  /**
   * Image source
   */
  src: PropTypes.string.isRequired,

  /**
   * Alternative text for image
   */
  alt: PropTypes.string,

  /**
   * Additional classes for image
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string),

  /**
   * Additional classes for image container
   */
  additionalContainerClasses: PropTypes.arrayOf(PropTypes.string)
};
CardImg.defaultProps = {
  additionalClasses: [],
  additionalContainerClasses: [],
  alt: false
};
export default CardImg;