import React, { Children, cloneElement, FC, isValidElement } from 'react';
import { BoxProps } from 'rebass';
import { Stack } from '~components/common/Stack';

interface RadioElement {
  onChange?: any;
  value: string;
  checked?: boolean;
}

export interface RadioGroupProps extends Omit<BoxProps, 'onChange'> {
  value?: string | number;
  onChange: (value: string) => void;
}

export const RadioGroup: FC<RadioGroupProps> = ({
  children,
  value,
  onChange,
  ...props
}) => {
  const clones = Children.map(children, (child) => {
    if (!isValidElement<RadioElement>(child)) {
      return child;
    }
    return cloneElement(child, {
      onChange: (e) => onChange(e.target.value),
      checked: child.props.value === value,
    });
  });

  return (
    <Stack flexDirection="column" space={1} role="radiogroup" {...props}>
      {clones}
    </Stack>
  );
};

export default RadioGroup;
