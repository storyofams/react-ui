const formTheme = {
  forms: {
    checkbox: {
      mr: 0.5,
      color: 'primary800',

      'input:checked + &': {
        display: 'block',
      },

      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.6 },
    },

    radio: {
      mr: 0.5,
      color: 'primary800',

      'input:checked + &': {
        display: 'block',
      },

      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.6 },
    },

    input: {
      minHeight: '38px',
      py: 0.75,
      px: 2,
      borderColor: 'grey300',
      borderRadius: 'xs',
      color: 'grey700',
      fontSize: [2, 1.75],
      transition:
        'border-color 0.18s ease-in-out, background-color 0.18s ease-in-out',

      '::placeholder': {
        color: 'grey400',
      },

      '&:hover': { borderColor: 'primary800' },

      '&:active, &:focus': {
        bg: 'primary50',
        borderColor: 'primary800',
      },

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,

        '&:hover': { borderColor: 'grey300' },
      },

      '&[required=""]': {
        bg: 'error50',
        borderColor: 'error600',
        color: 'error600',
      },
    },

    textarea: {
      minHeight: '38px',
      py: 0.75,
      px: 2,
      borderColor: 'grey300',
      borderRadius: 'xs',
      color: 'grey700',
      fontSize: [2, 1.75],
      transition:
        'border-color 0.18s ease-in-out, background-color 0.18s ease-in-out',
      resize: 'vertical',

      '::placeholder': {
        color: 'grey400',
      },

      '&:hover': { borderColor: 'primary800' },

      '&:active, &:focus': {
        bg: 'primary50',
        borderColor: 'primary800',
      },

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6,

        '&:hover': { borderColor: 'grey300' },
      },

      '&[required=""]': {
        bg: 'error50',
        borderColor: 'error600',
        color: 'error600',
      },
    },

    label: {
      fontSize: [2, 1.75],
      lineHeight: 'high',
      fontWeight: 'semiBold',
      color: 'grey700',

      '&[disabled=""]': {
        cursor: 'not-allowed',
        opacity: 0.6,
      },
    },
  },
};

export default formTheme;
