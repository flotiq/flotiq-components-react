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

export const roundedProps = {
  classSet,
  defaultValue,
  values: Object.keys(classSet)
};