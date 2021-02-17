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
  py: '6/4',
  bg: 'primary600',
  color: 'primary50',
  fontWeight: 'bold',
  fontSize: 1,
  lineHeight: '130%',

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
  py: '6/4',
  bg: 'primary200',
  color: 'primary700',
  fontWeight: 'bold',
  fontSize: 1,
  lineHeight: '130%',

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

const underline = {
  ...baseStyles,
  px: 0,
  pt: 0,
  pb: '1/4',
  color: 'grey900',
  fontWeight: 'medium',
  fontSize: 'inherit',
  lineHeight: 'inherit',

  '&::before': {
    content: JSON.stringify(''),
    position: 'absolute',
    bottom: 0,
    left: '50%',
    right: '50%',
    height: '2px',
    bg: 'primary700',
    transition: 'left 0.18s ease-in-out, right 0.18s ease-in-out',
  },

  '&:hover, &:active': {
    color: 'primary700',

    '&::before': {
      left: 0,
      right: 0,
    },
  },
};

const buttonTheme = {
  buttons: {
    primary: {
      ...primary,

      small: {
        ...primary,
        fontSize: 1,
      },

      medium: {
        ...primary,
        fontSize: 3,
        lineHeight: 'medium',
      },

      large: {
        ...primary,
        fontSize: 5,
        px: 4,
        lineHeight: 'high',
      },
    },

    secondary: {
      ...secondary,

      small: {
        ...secondary,
        fontSize: 1,
      },

      medium: {
        ...secondary,
        fontSize: 3,
        lineHeight: 'medium',
      },

      large: {
        ...secondary,
        fontSize: 5,
        px: 4,
        lineHeight: 'high',
      },
    },

    link: {
      ...baseStyles,
      px: 0,
      py: 0,
      color: 'grey700',
      fontSize: 'inherit',
      lineHeight: 'inherit',

      '&:hover, &:active': {
        color: 'primary700',
      },

      underline: {
        ...underline,
      },
    },
  },
};

export default buttonTheme;
