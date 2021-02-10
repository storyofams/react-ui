import React, { FC } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/light.css';
import { BoxProps } from 'rebass/styled-components';
import styled from 'styled-components';

import { Input, Icon } from '~/components';
import { Calendar } from '../Icon/library';

const OPTIONS = {
  altInput: true,
  altFormat: 'd F Y',
  dateFormat: 'Y-m-d',
  monthSelectorType: 'static',
  locale: {
    firstDayOfWeek: 1,
  },
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
        <Input {...inputProps} ref={ref} />
        <Icon
          color="#222222"
          icon={<Calendar />}
          sx={{
            position: 'absolute',
            right: '15px',
            top: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
          }}
        />
      </div>
    )}
  />
);

export const DatePicker = styled(DatePickerComponent)`
  div.flatpickr-weekdays {
    background: ${(p) => p.theme.colors.white};
    padding: 0 24px;
  }
  .flatpickr-weekdays .flatpickr-weekdaycontainer {
    justify-content: space-between;
  }
  span.flatpickr-weekday {
    background: ${(p) => p.theme.colors.white};
    color: ${(p) => p.theme.colors.primary900};
    font-size: 12px;
    line-height: 160%;
    flex-grow: 0;
  }
  div.flatpickr-month {
    background: ${(p) => p.theme.colors.white};
  }
  .flatpickr-day {
    transition: border-color 0.18s ease, background-color 0.18s ease,
      color 0.18s ease;
  }

  .flatpickr-day:hover {
    background-color: ${(p) => p.theme.colors.primary600};
    border-color: ${(p) => p.theme.colors.primary600};
    color: ${(p) => p.theme.colors.white};
  }
  .flatpickr-day.today {
    border-color: ${(p) => p.theme.colors.white};
  }
  .dayContainer {
    padding: 0 24px 24px;
  }
  .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
    left: unset;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 32px;
    width: 32px;
  }
  .flatpickr-current-month input.cur-year {
    font-weight: bold;
  }
  .flatpickr-prev-month {
    background: #e0f2fe;
    border-radius: 50%;
    right: 72px;
    top: 20px;
  }
  .flatpickr-months {
    height: 72px;
  }
  .flatpickr-current-month span.cur-month {
    margin-left: 0;
  }
  .flatpickr-month {
    left: unset;
    padding: 24px;
    height: 24px;
  }
  .flatpickr-current-month {
    width: unset;
    height: unset;
    padding-top: 0;
    left: 24px;
  }
  .flatpickr-next-month {
    background: #e0f2fe;
    border-radius: 50%;
    margin-right: 24px;
    top: 20px;
  }
  .flatpickr-day {
    font-size: 12px;
    color: #3f3f46;
  }
  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover,
  .flatpickr-day.prevMonthDay,
  .flatpickr-day.nextMonthDay,
  .flatpickr-day.notAllowed,
  .flatpickr-day.notAllowed.prevMonthDay,
  .flatpickr-day.notAllowed.nextMonthDay {
    color: #d4d4d8;
  }
  .flatpickr-day.selected,
  .flatpickr-day.startRange,
  .flatpickr-day.endRange,
  .flatpickr-day.selected.inRange,
  .flatpickr-day.startRange.inRange,
  .flatpickr-day.endRange.inRange,
  .flatpickr-day.selected:focus,
  .flatpickr-day.startRange:focus,
  .flatpickr-day.endRange:focus,
  .flatpickr-day.selected:hover,
  .flatpickr-day.startRange:hover,
  .flatpickr-day.endRange:hover,
  .flatpickr-day.selected.prevMonthDay,
  .flatpickr-day.startRange.prevMonthDay,
  .flatpickr-day.endRange.prevMonthDay,
  .flatpickr-day.selected.nextMonthDay,
  .flatpickr-day.startRange.nextMonthDay,
  .flatpickr-day.endRange.nextMonthDay {
    background: ${(p) => p.theme.colors.primary600};
    color: #fff;
    border-color: ${(p) => p.theme.colors.primary600};
  }
  .flatpickr-months .flatpickr-prev-month svg,
  .flatpickr-months .flatpickr-next-month svg {
    fill: #111111;
  }

  .flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-next-month {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 32px;
    width: 32px;
  }
`;

export default DatePicker;
