const baseStyles = {
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: 'inherit',
  fontWeight: 'regular',
  borderRadius: 'sm',
  userSelect: 'none',
  cursor: 'pointer',
  transition:
    'background-color 0.18s, box-shadow 0.18s, border-color 0.18s, color 0.18s',
  '&:disabled': { cursor: 'not-allowed', opacity: 0.5 },
  '&:active': { boxShadow: 'none' },
  '&[data-is-loading]': { cursor: 'wait' },
};

const primary = {
  px: 3,
  py: '6/4',
  color: 'primary50',
  bg: 'primary600',
  borderColor: 'primary600',
  boxShadow: 'sm',
  transition:
    'border-color 0.18s ease-in-out,background-color 0.18s ease-in-out, color 0.18s ease-in-out',

  lineHeight: '130%',
  '&:hover': {
    color: 'primary50',
    bg: 'primary700',
    borderColor: 'primary700',
  },

  ...baseStyles,
  '&:active': {
    color: 'primary50',
    bg: 'primary600',
    boxShadow: ' inset 0px 0px 0px 4px #BAE6FD',
  },
  '&:disabled': { cursor: 'not-allowed', bg: 'primary600', opacity: 0.25 },
  fontWeight: 'bold',
  fontSize: '12px',
};

const outline = {
  px: 5,
  py: '6/4',
  color: 'grey900',
  bg: 'transparent',
  border: '1px',
  borderColor: 'grey900',
  boxShadow: 'sm',
  transition: 'background-color 0.18s ease-in-out, color 0.18s ease-in-out',
  '&:hover, &:active': {
    color: 'white',
    bg: 'grey900',
  },
  ...baseStyles,
};

const secondary = {
  px: 5,
  py: '6/4',
  color: 'primary700',
  bg: 'primary200',
  borderColor: 'primary200',
  boxShadow: 'sm',
  lineHeight: '130%',
  transition:
    'border-color 0.18s ease-in-out,background-color 0.18s ease-in-out, color 0.18s ease-in-out',
  '&:hover': {
    color: 'primary800',
    bg: 'primary300',
    borderColor: 'primary300',
  },

  ...baseStyles,
  '&:active': {
    color: 'primary700',
    bg: 'primary200',
    boxShadow: ' inset 0px 0px 0px 4px #E0F2FE',
  },
  '&:disabled': {
    cursor: 'not-allowed',
    color: 'primary700',
    bg: 'primary200',
    opacity: 0.25,
  },
  fontWeight: 'bold',
  fontSize: '12px',
};
const underline = {
  px: 0,
  pt: 0,
  pb: 1,
  color: 'grey900',
  bg: 'transparent',
  borderColor: 'transparent',
  '&::before': {
    content: JSON.stringify(''),
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '2px',
    bg: 'primary500',
    transition: 'background-color 0.2s, left 0.2s, right 0.2s',
  },
  '&:hover, &:active': {
    color: 'primary500',
    '&::before': {
      left: '50%',
      right: '50%',
    },
  },
  ...baseStyles,
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
    outline: {
      ...outline,
      small: {
        ...outline,
        fontSize: 1,
      },
      medium: {
        ...outline,
        fontSize: 3,
        lineHeight: 'medium',
      },
      large: {
        ...outline,
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
    underline: {
      ...underline,
      small: {
        ...underline,
        fontSize: 1,
      },
      medium: {
        ...underline,
        fontSize: 3,
        lineHeight: 'medium',
      },
      large: {
        ...underline,
        fontSize: 5,
        px: 4,
        lineHeight: 'high',
      },
    },
    link: {
      menu: {
        ...baseStyles,
        fontWeight: 'medium',
        fontSize: 3,
        lineHeight: '150%',
        color: 'grey700',
        transition:
          'text-decoration 0.18s ease-in-out, color 0.18s ease-in-out',
        '&:hover': {
          color: 'primary700',
          textDecoration: 'underline',
        },

        '&:active': {
          color: 'primary700',
        },
      },
      category: {
        fontSize: 2,
        lineHeight: '100%',
        color: 'grey700',
        ...baseStyles,
        transition: 'color 0.18s ease-in-out',

        '&:hover, &:active': {
          color: 'primary700',
        },
      },
    },
  },
};

export default buttonTheme;
