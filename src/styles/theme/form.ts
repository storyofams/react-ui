const formTheme = {
  forms: {
    checkbox: {
      mr: '5.25px',
      color: 'primary800',
      'input:checked + &': {
        display: 'block',
      },
      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.25 },
    },
    input: {
      py: 0.75,
      px: 2,
      fontSize: [2, 1.75],
      minHeight: '38px',
      color: 'grey700',
      borderColor: 'grey300',
      borderRadius: 'xs',
      bg: 'grey50',
      transition: 'border-color 0.18s ease-in-out',
      '::placeholder': {
        color: 'grey400',
      },
      '&:hover': { borderColor: 'grey300' },
      '&:active': {
        borderColor: 'primary800',
        bg: 'primary50',
      },
      '&:focus': {
        borderColor: 'primary800',
      },
      '&:disabled': {
        bg: 'white',
        borderColor: 'grey200',
        color: 'grey700',
        cursor: 'not-allowed',
        opacity: 0.5,
        '::placeholder': {
          color: 'grey700',
        },
      },
      '&[required=""]': {
        bg: 'error50',
        borderColor: 'error600',
        color: 'error600',
      },
      'input:focus': {
        backgroundColor: 'transparent',
      },
    },
    textarea: {
      py: 0.75,
      px: 2,
      fontSize: [2, 1.75],
      minHeight: '38px',
      color: 'grey900',
      borderColor: 'grey200',
      borderRadius: 'xs',
      transition: 'border-color 0.18s ease-in-out',
      resize: 'vertical',
      '::placeholder': {
        color: 'grey200',
      },
      '&:hover': { borderColor: 'grey300' },
      '&:disabled': {
        bg: 'grey200',
        borderColor: 'grey200',
        color: 'grey700',
        cursor: 'not-allowed',
        opacity: 0.5,
        '::placeholder': {
          color: 'grey700',
        },
      },
    },
    label: {
      fontSize: 2,
      lineHeight: 'medium',
      fontWeight: 'semiBold',
      '&[disabled=""]': {
        cursor: 'not-allowed',
        opacity: 0.25,
      },
    },
    radio: {
      mr: '5.25px',
      color: 'primary800',
      'input:checked + &': {
        display: 'block',
      },
      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 1 },
    },
  },
};

export default formTheme;
