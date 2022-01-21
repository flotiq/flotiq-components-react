function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardText from './CardText';
import { Context } from './Context';

const Card = ({
  children,
  rounded = true,
  bordered = false,
  vertical = false,
  proportionsForVertical = {
    body: '1/2',
    img: '1/2',
    breakpoint: 'md'
  },
  additionalClasses = [],
  ...props
}) => {
  const roundedClass = rounded ? 'rounded-lg' : 'rounded-none';
  const borderedClass = bordered ? 'border border-gray-200' : '';
  const context = useMemo(() => ({
    vertical,
    proportionsForVertical
  }), [vertical, proportionsForVertical]);
  const directionClasses = vertical ? 'flex flex-wrap lg:flex-nowrap align-start' : 'flex-none';
  useEffect(() => {
    context.vertical = vertical;
    context.proportionsForVertical = proportionsForVertical;
  }, [context, vertical, proportionsForVertical]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: [directionClasses, 'bg-white', 'overflow-hidden', roundedClass, borderedClass, ...additionalClasses].join(' ')
  }, props), children));
};

class ProportionsForVertical {
  body;
  img;
  breakpoint;
}

Card.propTypes = {
  /**
   * Is this the rounded card?
   */
  rounded: PropTypes.bool,

  /**
   * Should the card has a border?
   */
  bordered: PropTypes.bool,

  /**
   * Should the card be vertical?
   */
  vertical: PropTypes.bool,

  /**
   * Should the card be vertical?
   */
  proportionsForVertical: PropTypes.objectOf(ProportionsForVertical),

  /**
   * Additional classes for card
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Card.defaultProps = {
  additionalClasses: [],
  rounded: true,
  bordered: false,
  vertical: false,
  proportionsForVertical: {
    body: '1/2',
    img: '1/2',
    breakpoint: 'md'
  }
};
Card.Body = CardBody;
Card.Title = CardTitle;
Card.Img = CardImg;
Card.Text = CardText;
export default Card;