import React, { FC } from 'react';
import ReactSelect, { Props } from 'react-select';
import styled, { css, useTheme } from 'styled-components';

const StyledSelect = styled(ReactSelect).attrs({
  className: 'react-select',
  classNamePrefix: 'react-select',
})(
  ({ styledTheme: theme }) => css`
    font-size: ${theme.fontSizes[2]};

    /* leave font-size 16px for consistency sake, IOS browsers zoom in on inputs if they are below 16px */
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes[3]};
    }

    .react-select {
      &__placeholder {
        color: ${theme.colors.grey200};
      }

      &__control {
        transition: border-color 0.18s ease;
        border-radius: ${theme.radii.xs};
        border-color: ${theme.colors.grey200};
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04),
          0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);

        &:hover {
          border-color: ${theme.colors.grey300};
        }

        &--menu-is-open {
          .react-select__dropdown-indicator {
            svg {
              transform: rotate(180deg);
            }
          }
        }

        &--is-disabled {
          background: ${theme.colors.white};
          cursor: not-allowed;
          opacity: 0.25;

          .react-select__placeholder {
            color: ${theme.colors.grey700};
          }
        }
        &--is-focused {
          background: ${theme.colors.primary50};
          border-color: ${theme.colors.primary800};

          .react-select__placeholder {
            color: ${theme.colors.grey700};
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

      &__option {
        transition: border-color 0.18s ease, background-color 0.18s ease;
        color: ${theme.colors.grey900};

        &:hover {
          background-color: ${theme.colors.primary50};
          color: ${theme.colors.primary800};
        }

        &.option--is-selected {
          background-color: ${theme.colors.primary500};
        }
      }
    }
  `,
);

interface SelectProps extends Props {
  theme?: any;
}

const Select: FC<SelectProps> = (props) => {
  const theme = useTheme(); // react-select and styled-components both need a theme so it needs to be renamed

  return (
    <StyledSelect
      styledTheme={theme}
      theme={(t) => ({
        ...t,
        colors: {
          ...t.colors,
          primary25: theme.colors.primary500,
          primary50: theme.colors.primary500,
          primary: theme.colors.primary500,
        },
      })}
      {...props}
    />
  );
};

export default Select;
