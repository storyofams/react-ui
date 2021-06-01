import { ReactNode } from 'react';

import { default as _styled } from 'styled-components';
import { variant } from 'styled-system';

type OptionProps = {
  baseStyles?: { [key: string]: string | number | { [key: string]: any } };
  variants?: { [key: string]: { [key: string]: any } };
};

const transformVariants = (newVariants, defaultVariants) => {
  return [
    ...Object.keys(newVariants),
    ...Object.keys(defaultVariants).filter(
      (f) => Object.keys(newVariants).indexOf(f) === -1,
    ),
  ].map((variantKey) =>
    variant({
      prop: variantKey,
      variants: {
        ...defaultVariants?.[variantKey],
        ...newVariants?.[variantKey],
      },
    }),
  );
};

export const styled = (component: string | ReactNode, options: OptionProps) => {
  const { variants, baseStyles } = options;

  return _styled(component as any).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => defaultValidatorFn(prop),
  })`
    ${baseStyles}
    ${transformVariants(variants, (component as any)?.config)}
  `;
};
