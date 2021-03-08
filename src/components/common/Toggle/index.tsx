import React, { forwardRef } from 'react';
import { Box } from '~components/common/Box';
import { css } from '~lib/css';
import { SystemProps } from '~types/system';

const styles = css({
  position: 'relative',
  display: 'inline-block',
  width: '40px',
  height: '24px',

  '& > input': { opacity: 0, width: '0', height: '0' },

  '& > .slider': {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'primary300',
    border: '1px',
    borderColor: 'primary300',
    transition:
      'background-color 0.18s ease-in-out, border-color 0.18s ease-in-out',
    borderRadius: '24px',
  },

  '& > .slider:before': {
    position: 'absolute',
    content: "''",
    height: '16px',
    width: '16px',
    left: '3px',
    bottom: '3px',
    backgroundColor: 'white',
    transition: 'left 0.18s ease-in-out, right 0.18s ease-in-out',
    borderRadius: '50%',
  },

  '& > input:checked': {
    '& + .slider': {
      backgroundColor: 'primary800',
      borderColor: 'primary800',
    },

    '& + .slider:before': { left: 'unset', right: '3px' },
  },

  '&:hover': {
    '> .slider': {
      borderColor: 'primary800',
    },
    '> input:disabled + .slider': {
      borderColor: 'primary300',
    },
  },

  '& > input:disabled + .slider': {
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

export interface ToggleProps extends Omit<SystemProps, 'onChange'> {
  checked?: boolean;
  disabled?: boolean;
  onChange?(isToggled: boolean): void;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ checked, disabled, onChange, ...props }, ref) => {
    return (
      <Box css={styles} as="label" {...props}>
        <input
          ref={ref}
          onChange={(e) => onChange(e.target.checked)}
          checked={checked}
          disabled={disabled}
          type="checkbox"
          aria-label="toggle"
        />
        <span className="slider" />
      </Box>
    );
  },
);
