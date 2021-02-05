const formTheme = {
  forms: {
    checkbox: {
      mr: 1,
      color: 'primary800',
      'input:checked + &': {
        display: 'block',
      },
      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.25 },
    },
    input: {
      py: '3/4',
      px: 2,
      fontSize: [3, 2],
      minHeight: '38px',
      color: 'grey700',
      borderColor: 'grey300',
      borderRadius: 'xs',
      bg: 'grey50',
      transition: 'border-color 0.18s ease-in-out,',
      '::placeholder': {
        color: 'grey400',
      },
      '&:hover': { borderColor: 'grey300' },
      '&:active': {
        borderColor: 'primary800',
        bg: 'primary50',
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
    },
    textarea: {
      py: '3/4',
      px: 2,
      fontSize: [3, 2],
      minHeight: '38px',
      color: 'grey900',
      borderColor: 'grey200',
      borderRadius: 'xs',
      transition: 'border-color 0.18s ease-in-out,',
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
      fontSize: 3,
      '&[disabled=""]': {
        cursor: 'not-allowed',
        opacity: 0.25,
      },
    },
    radio: {
      mr: 1,
      color: 'primary800',
      'input:checked + &': {
        display: 'block',
      },
      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 1 },
    },
  },
};

export default formTheme;
