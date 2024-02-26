"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.borderProps = void 0;
var classSet = {
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
var defaultValue = 'primary';
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

var borderProps = {
  classSet: classSet,
  defaultValue: defaultValue,
  values: Object.keys(classSet)
};
exports.borderProps = borderProps;