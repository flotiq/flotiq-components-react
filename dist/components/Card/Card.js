function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import CardBody from './CardBody';
import CardTitle from './CardTitle';
import CardImg from './CardImg';
import CardText from './CardText';
import { Context } from './Context';
import { roundedProps } from '../../defaultProps/rounded';

const calcBasisClass = (scale, isHorizontal, breakpoint = 'md') => {
  if (scale && isHorizontal) {
    return `${breakpoint}:basis-${scale}`;
  }

  return '';
};
/**
 * Complex component for displaying card like elements
 */


const Card = ({
  children,
  rounded,
  bordered,
  horizontal,
  proportionsForHorizontal,
  additionalClasses,
  ...props
}) => {
  const borderedClass = bordered ? 'border border-gray-200' : '';
  const directionClasses = horizontal ? 'flex flex-wrap justify-between align-start' : 'flex-none';
  const context = useMemo(() => ({
    horizontal,
    basisClassImage: calcBasisClass(proportionsForHorizontal?.img, horizontal, proportionsForHorizontal?.breakpoint),
    basisClassBody: calcBasisClass(proportionsForHorizontal?.body, horizontal, proportionsForHorizontal?.breakpoint)
  }), [horizontal, proportionsForHorizontal]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: context
  }, /*#__PURE__*/React.createElement("div", _extends({
    className: [directionClasses, 'bg-white', 'overflow-hidden', roundedProps.classSet[rounded], borderedClass, ...additionalClasses].join(' ')
  }, props), children));
};

Card.propTypes = {
  /**
   * Is this the rounded card?
   */
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),

  /**
   * Should the card has a border?
   */
  bordered: PropTypes.bool,

  /**
   * Should the card be horizontal?
   */
  horizontal: PropTypes.bool,

  /**
   * Should the card be horizontal?
   */
  proportionsForHorizontal: PropTypes.shape({
    body: PropTypes.string,
    img: PropTypes.string,
    breakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }),

  /**
   * Additional classes for card
   */
  additionalClasses: PropTypes.arrayOf(PropTypes.string)
};
Card.defaultProps = {
  rounded: 'lg',
  bordered: true,
  horizontal: false,
  additionalClasses: [],
  proportionsForHorizontal: {
    body: '1/2',
    img: '1/2',
    breakpoint: 'md'
  }
};
export default Object.assign(Card, {
  Body: CardBody,
  Title: CardTitle,
  Img: CardImg,
  Text: CardText
});