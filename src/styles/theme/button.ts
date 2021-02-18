import linkTheme from './link';

const baseStyles = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 'inherit',
  borderRadius: 'sm',
  userSelect: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.18s ease-in-out, box-shadow 0.18s, border-color 0.18s ease-in-out, color 0.18s ease-in-out, opacity 0.18s ease-in-out',
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&:active': { boxShadow: 'none' },
  '&[data-is-loading]': { cursor: 'wait' },
};

const primary = {
  ...baseStyles,
  px: 3,
  py: 1.5,
  bg: 'primary600',
  color: 'primary50',
  fontWeight: 'bold',
  fontSize: 1.5,
  lineHeight: 'medium',

  '&:hover': {
    bg: 'primary700',
    color: 'primary50',
  },

  '&:active': {
    bg: 'primary600',
    boxShadow: '0px 0px 0px 4px #BAE6FD',
    color: 'primary50',
  },

  '&:disabled': { cursor: 'not-allowed', opacity: 0.25 },
};

const secondary = {
  ...baseStyles,
  px: 3,
  py: 1.5,
  bg: 'primary200',
  color: 'primary700',
  fontWeight: 'bold',
  fontSize: 1.5,
  lineHeight: 'medium',

  '&:hover': {
    bg: 'primary300',
    color: 'primary800',
  },

  '&:active': {
    color: 'primary700',
    bg: 'primary200',
    boxShadow: '0px 0px 0px 4px #E0F2FE',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.25,
  },
};

const buttonTheme = {
  buttons: {
    primary: {
      ...primary,

      small: {
        ...primary,
        fontSize: 1.5,
      },

      medium: {
        ...primary,
        fontSize: 2,
        lineHeight: 'medium',
      },

      large: {
        ...primary,
        fontSize: 2.5,
        px: 4,
        lineHeight: 'high',
      },
    },
    secondary: {
      ...secondary,

      small: {
        ...secondary,
        fontSize: 1.5,
      },

      medium: {
        ...secondary,
        fontSize: 2,
        lineHeight: 'medium',
      },

      large: {
        ...secondary,
        fontSize: 2.5,
        px: 4,
        lineHeight: 'high',
      },
    },

    ...linkTheme,
  },
};

export default buttonTheme;
