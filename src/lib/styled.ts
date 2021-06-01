import { default as _styled } from 'styled-components';
import { variant } from 'styled-system';

type OptionProps = {
  baseStyles?: { [key: string]: string | number | { [key: string]: any } };
  variants?: { [key: string]: { [key: string]: any } };
};

const mergeVariants = (keys, newVariants, defaultVariants) =>
  keys.map((variantKey) =>
    variant({
      prop: variantKey,
      variants: {
        ...defaultVariants?.[variantKey],
        ...newVariants?.[variantKey],
      },
    }),
  );

export const styled = <Component extends unknown>(
  component: Component,
  { variants, baseStyles }: OptionProps,
): Component => {
  const variantKeys: any[] = [
    ...Object.keys(variants),
    ...Object.keys((component as any)?.config).filter(
      (variantKey) => Object.keys(variants).indexOf(variantKey) === -1,
    ),
  ];

  return _styled(component as any).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
      variantKeys.indexOf(prop) === -1 && defaultValidatorFn(prop),
  })`
    ${baseStyles}
    ${mergeVariants(variantKeys, variants, (component as any)?.config)}
  `;
};
