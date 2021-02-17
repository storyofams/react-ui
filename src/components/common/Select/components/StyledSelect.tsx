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
        color: ${theme.colors.grey400};
      }

      &__control {
        transition: border-color 0.18s ease;
        border-radius: ${theme.radii.xs};
        border-color: ${theme.colors.grey200};

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
          opacity: 0.25;

          .react-select__placeholder {
            color: ${theme.colors.grey700};
          }
        }

        &--is-focused {
          background: ${theme.colors.primary50};
          border-color: ${theme.colors.primary800};
          box-shadow: none;

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

      &__menu-list {
        padding: ${theme.space[1]}px;
      }

      &__option {
        padding: 0 ${theme.space['1/2']}px;
        margin-bottom: ${theme.space['1/2']}px;
        transition: border-color 0.18s ease-in-out,
          background-color 0.18s ease-in-out, color 0.18s ease-in-out;
        color: ${theme.colors.grey900};
        border-radius: ${theme.radii.xs};
        line-height: 1.5;

        & {
          &--is-selected,
          &--is-focused {
            background-color: ${theme.colors.primary50};
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
