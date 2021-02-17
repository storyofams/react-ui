const formTheme = {
  forms: {
    checkbox: {
      mr: '1/2',
      color: 'primary800',

      'input:checked + &': {
        display: 'block',
      },

      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.25 },
    },

    radio: {
      mr: '1/2',
      color: 'primary800',

      'input:checked + &': {
        display: 'block',
      },

      'input:disabled ~ &': { cursor: 'not-allowed', opacity: 0.25 },
    },

    input: {
      minHeight: '38px',
      py: '3/4',
      px: 2,
      borderColor: 'grey300',
      borderRadius: 'xs',
      color: 'grey700',
      fontSize: [3, 2],
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
      minHeight: '38px',
      py: '3/4',
      px: 2,
      borderColor: 'grey300',
      borderRadius: 'xs',
      color: 'grey700',
      fontSize: [3, 2],
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

    label: {
      fontSize: 3,
      lineHeight: 1.5,
      fontWeight: 'semiBold',
      color: 'grey700',

      '&[disabled=""]': {
        cursor: 'not-allowed',
        opacity: 0.25,
      },
    },
  },
};

export default formTheme;
