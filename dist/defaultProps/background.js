"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundProps = void 0;
const classSet = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  success: 'bg-success text-white',
  danger: 'bg-danger text-white',
  warning: 'bg-warning text-black',
  info: 'bg-info text-black',
  light: 'bg-light text-black',
  dark: 'bg-dark text-white',
  transparent: 'bg-transparent'
};
const defaultValue = 'primary';

/**
 * Default settings for backgroundColor props
 * PropTypes.oneOf([
 *         'primary',
 *         'secondary',
 *         'success',
 *         'danger',
 *         'warning',
 *         'info',
 *         'light',
 *         'dark',
 *         'transparent',
 *     ])
 */
const backgroundProps = exports.backgroundProps = {
  classSet,
  defaultValue,
  values: Object.keys(classSet)
};