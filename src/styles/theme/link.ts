const baseStyles = {
  position: 'relative',
  display: 'inline',
  px: 0,
  py: 0,
  fontSize: 'inherit',
  lineHeight: 'inherit',
  borderRadius: 'sm',
  userSelect: 'none',
  cursor: 'pointer',
  transition: 'color 0.18s ease-in-out, opacity 0.18s ease-in-out',
};

const underline = {
  ...baseStyles,
  color: 'grey900',
  fontWeight: 'medium',

  '&::before': {
    content: JSON.stringify(''),
    position: 'absolute',
    bottom: '-2px',
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

const linkTheme = {
  link: {
    ...baseStyles,
    color: 'grey700',

    '&:hover, &:active': {
      color: 'primary700',
    },

    underline: {
      ...underline,
    },
  },
};

export default linkTheme;
