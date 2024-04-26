"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderProps = void 0;
const classSet = {
  primary: 'border-primary',
  secondary: 'border-secondary',
  success: 'border-success',
  danger: 'border-danger',
  warning: 'border-warning',
  info: 'border-info',
  light: 'border-light',
  dark: 'border-dark',
  transparent: 'border-transparent'
};
const defaultValue = 'primary';

/**
 * Default settings for borderColor props
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
const borderProps = exports.borderProps = {
  classSet,
  defaultValue,
  values: Object.keys(classSet)
};