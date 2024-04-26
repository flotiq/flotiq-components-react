"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roundedProps = void 0;
const classSet = {
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
const defaultValue = 'full';

/**
 * Default settings for rounded props
 * PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
 */
const roundedProps = exports.roundedProps = {
  classSet,
  defaultValue,
  values: Object.keys(classSet)
};