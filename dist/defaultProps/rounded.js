"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundedProps = void 0;
var classSet = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  '4xl': 'rounded-4xl',
  full: 'rounded-full'
};
var defaultValue = 'full';
/**
 * Default settings for rounded props
 * PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
 */

var roundedProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.roundedProps = roundedProps;