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

export const borderProps = {
  classSet,
  defaultValue,
  values: Object.keys(classSet)
};