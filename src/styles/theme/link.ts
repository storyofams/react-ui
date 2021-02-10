const linkTheme = {
  link: {
    position: 'relative',
    transition:
      'border-color 0.18s ease-in-out, color 0.18s ease-in-out, box-shadow 0.18s ease-in-out, opacity 0.18s ease-in-out, background-color 0.18s ease-in-out',
    cursor: 'pointer',
    '&:hover': { opacity: 0.7 },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },

    '&::before': {
      content: JSON.stringify(''),
      position: 'absolute',
      bottom: 0,
      left: '50%',
      right: '50%',
      height: '2px',
      bg: 'primary700',
      transition: 'background-color 0.2s, left 0.2s, right 0.2s',
    },
    '&:hover, &:active': {
      '&::before': {
        left: 0,
        right: 0,
      },
    },
  },
};

export default linkTheme;
