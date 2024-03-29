import React from 'react';
import ReactSelect, { Props } from 'react-select';
import styled, { css, useTheme } from 'styled-components';

const StyledSelect = styled(ReactSelect).attrs({
  className: 'react-select',
  classNamePrefix: 'react-select',
})(
  ({ styledTheme: theme }) => css`
    font-size: ${theme.fontSizes[1.75]}px;

    /* leave font-size 16px for consistency sake, IOS browsers zoom in on inputs if they are below 16px */
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes[2]}px;
    }

    .react-select {
      &__placeholder {
        color: ${theme.colors.grey400};
      }

      &__control {
        transition: border-color 0.18s ease;
        border-radius: ${theme.radii.xs};
        border-color: ${theme.colors.grey300};

        &:hover {
          border-color: ${theme.colors.primary800};
        }

        &--menu-is-open {
          .react-select__dropdown-indicator {
            svg {
              transform: rotate(180deg);
            }
          }
        }

        &--is-disabled {
          cursor: not-allowed;
          opacity: 0.6;
          background: none;

          &:hover {
            border-color: ${theme.colors.grey300};
          }
        }

        &--is-focused {
          background: ${theme.colors.primary50};
          border-color: ${theme.colors.primary800};
          box-shadow: none;

          .react-select__placeholder {
            color: ${theme.colors.white};
          }
        }
      }

      &__dropdown-indicator {
        color: ${theme.colors.primary800};
      }

      &__single-value {
        color: ${theme.colors.grey700};
      }

      &__value-container {
        padding-left: 14px;
      }

      &__indicator-separator {
        display: none;
      }

      &__menu-list {
        padding: ${theme.space[1]}px;
      }

      &__option {
        padding: 0 ${theme.space[0.5]}px;
        margin-bottom: ${theme.space[0.5]}px;
        transition: border-color 0.18s ease-in-out,
          background-color 0.18s ease-in-out, color 0.18s ease-in-out;
        color: ${theme.colors.grey900};
        border-radius: ${theme.radii.xs};
        line-height: 1.5;

        & {
          &--is-selected,
          &--is-focused,
          &--is-active {
            color: ${theme.colors.primary800};
          }
        }
      }
    }
  `,
);

interface SelectProps extends Props {
  theme?: any;
}

const Select = (props: SelectProps) => {
  const theme = useTheme(); // react-select and styled-components both need a theme so it needs to be renamed

  return (
    <StyledSelect
      styledTheme={theme}
      theme={(t) => ({
        ...t,
        colors: {
          ...t.colors,
          primary25: theme.colors.primary50,
          primary50: theme.colors.primary200,
          primary: theme.colors.primary100,
        },
      })}
      {...props}
    />
  );
};

export default Select;
