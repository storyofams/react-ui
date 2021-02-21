import React, { FC } from 'react';
import Flatpickr from 'react-flatpickr';
import { BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';

import { Calendar } from '~components/common/Icon/library';
import { Input } from '~components/common/Input';

const OPTIONS = {
  altInput: true,
  altFormat: 'd F Y',
  dateFormat: 'Y-m-d',
  monthSelectorType: 'static',
  locale: {
    firstDayOfWeek: 1,
  },
  prevArrow:
    '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z" fill="currentColor"/></svg>',
  nextArrow:
    '<svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z" fill="currentColor"/></svg>',
};

export interface DatePickerProps extends BoxProps {
  value: string;
  onChange: (val) => void;
  className?: string;
  inputProps?: any;
  name?: string;
}

const DatePickerComponent: FC<DatePickerProps> = ({
  value,
  onChange,
  className,
  inputProps,
}) => (
  <Flatpickr
    value={value}
    onChange={onChange}
    options={OPTIONS}
    className={className}
    onReady={(_, __, flatpickr) => {
      className?.split(' ').forEach((singleClassName) => {
        flatpickr.calendarContainer.classList.add(singleClassName);
      });
    }}
    render={(__, ref) => (
      <div
        style={{ position: 'relative' }}
        data-testid="flatpickr-input-container"
      >
        <Input icon={<Calendar />} {...inputProps} ref={ref} />
      </div>
    )}
  />
);

export const DatePicker = styled(DatePickerComponent)`
  .flatpickr-day {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: ${(p) => p.theme.colors.grey700};
    font-size: ${(p) => p.theme.fontSizes[1.5]}px;
    line-height: ${(p) => p.theme.lineHeights.normal};
    border-width: 5px;

    &.today {
      border-color: ${(p) => p.theme.colors.white};
    }

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      padding-top: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      z-index: -1;
      border-radius: 50%;
      transition: border-color 0.18s ease-in-out, transform 0.18s ease-in-out,
        background-color 0.18s ease-in-out, color 0.18s ease-in-out;
    }

    &.flatpickr-disabled,
    &.flatpickr-disabled:hover,
    &.prevMonthDay,
    &.nextMonthDay,
    &.notAllowed,
    &.notAllowed.prevMonthDay,
    &.notAllowed.nextMonthDay {
      color: ${(p) => p.theme.colors.grey300};
    }

    &.selected,
    &.startRange,
    &.endRange,
    &.selected.inRange,
    &.startRange.inRange,
    &.endRange.inRange,
    &.selected:focus,
    &.startRange:focus,
    &.endRange:focus,
    &.selected:hover,
    &.startRange:hover,
    &.endRange:hover,
    &.selected.prevMonthDay,
    &.startRange.prevMonthDay,
    &.endRange.prevMonthDay,
    &.selected.nextMonthDay,
    &.startRange.nextMonthDay,
    &.endRange.nextMonthDay,
    &:hover {
      background: none;
      color: ${(p) => p.theme.colors.white};
      border-color: ${(p) => p.theme.colors.transparent};

      &::before {
        background: ${(p) => p.theme.colors.primary600};
        border-color: ${(p) => p.theme.colors.primary600};
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .flatpickr-days {
    border: none;
  }

  .dayContainer {
    padding: 0 20px ${(p) => p.theme.space[2]}px;
  }

  .flatpickr-weekday {
    background: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary900};
    font-size: ${(p) => p.theme.fontSizes[1.5]}px;
    line-height: ${(p) => p.theme.lineHeights.high};
  }

  .flatpickr-weekdays {
    background: ${(p) => p.theme.colors.white};
    padding: 0 20px;

    .flatpickr-weekdaycontainer {
      justify-content: space-between;
    }
  }

  .flatpickr-month {
    padding: ${(p) => p.theme.space[3]}px;
    background: ${(p) => p.theme.colors.white};
    height: 72px;
  }

  .flatpickr-current-month {
    width: unset;
    height: unset;
    padding-top: 0;
    left: 24px;
    color: ${(p) => p.theme.colors.grey800};

    input.cur-year {
      font-weight: bold;

      &:hover {
        background: ${(p) => p.theme.colors.white};
      }
    }

    span.cur-month {
      margin-left: 0;

      &:hover {
        background: ${(p) => p.theme.colors.white};
      }
    }

    .numInputWrapper {
      background: none;

      span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        border: none;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        transition: background-color 0.18s ease-in-out;

        &:hover {
          background: ${(p) => p.theme.colors.primary600};

          &::after {
            border-color: ${(p) => p.theme.colors.white};
          }
        }
      }

      .arrowUp::after,
      .arrowDown::after {
        display: inline-block;
        padding: 2px;
        transition: border-color 0.18s ease-in-out;
      }

      .arrowUp::after {
        top: 4px;
        border-bottom: 1px solid;
        border-bottom-color: ${(p) => p.theme.colors.grey900};
        border-right: 1px solid;
        border-right-color: ${(p) => p.theme.colors.grey900};
        transform: rotate(-135deg);
      }

      .arrowDown::after {
        top: unset;
        bottom: 4px;
        border-top: 1px solid;
        border-top-color: ${(p) => p.theme.colors.grey900};
        border-left: 1px solid;
        border-right: none;
        border-left-color: ${(p) => p.theme.colors.grey900};
        transform: rotate(-135deg);
      }
    }
  }

  .flatpickr-months {
    .flatpickr-prev-month.flatpickr-prev-month,
    .flatpickr-next-month.flatpickr-prev-month {
      left: unset;
      justify-content: center;
      align-items: center;
      display: flex;
      height: 32px;
      width: 32px;
    }

    .flatpickr-prev-month.flatpickr-next-month,
    .flatpickr-next-month.flatpickr-next-month {
      justify-content: center;
      align-items: center;
      display: flex;
      height: 32px;
      width: 32px;
    }

    .flatpickr-prev-month,
    .flatpickr-next-month {
      top: 20px;
      background: ${(p) => p.theme.colors.primary100};
      border-radius: 50%;
      transition: background-color 0.18s ease-in-out,
        transform 0.18s ease-in-out;

      svg {
        fill: ${(p) => p.theme.colors.grey900};
        transition: fill 0s ease-in-out;
        width: 12px;
        height: 12px;
      }

      &:hover {
        background: ${(p) => p.theme.colors.primary600};
        transform: scale(1.05);

        svg {
          fill: ${(p) => p.theme.colors.white};
        }
      }
    }

    .flatpickr-prev-month {
      right: 72px;
    }

    .flatpickr-next-month {
      margin-right: ${(p) => p.theme.space[3]}px;
    }
  }

  &.arrowTop {
    &::before {
      border-bottom-color: ${(p) => p.theme.colors.grey100};
    }

    &::after {
      border-bottom-color: ${(p) => p.theme.colors.white};
    }
  }
`;

export default DatePicker;
