import { ComponentType } from 'react';
import { default as _styled } from 'styled-components';
import { variant, ResponsiveValue } from 'styled-system';

type GenericObjectType = { readonly [key: string]: any };
type GenericNestedObjectType = { readonly [key: string]: GenericObjectType };
type GenericOptionalNestedObjectType = {
  // allow for a non-nested structure as well
  readonly [key: string]: string | number | GenericObjectType;
};

export type StyledConfigType = {
  config: {
    readonly variant: GenericObjectType;
    readonly [key: string]: GenericObjectType;
  };
};

type OptionProps = {
  readonly baseStyles?: GenericOptionalNestedObjectType;
  readonly variants?: GenericNestedObjectType;
};

interface AllVariants {
  readonly prop: string;
  readonly variants: {
    readonly [x: string]: GenericObjectType;
  };
}

type Variants<Variants extends AllVariants[]> = {
  [Key in Variants[number]['prop']]?: ResponsiveValue<
    keyof Variants[number]['variants']
  >;
};

const mergeVariants = (
  keys: readonly string[],
  newVariants: GenericNestedObjectType,
  defaultVariants: GenericNestedObjectType,
): AllVariants[] =>
  keys.map((key) => ({
    prop: key,
    variants: {
      ...defaultVariants?.[key],
      ...newVariants?.[key],
    },
  }));

export const styled = <
  Component extends StyledConfigType =
    | StyledConfigType
    | never /** this ensures proper usage or it will throw */
>(
  component: Component,
  { variants, baseStyles }: OptionProps,
) => {
  const variantKeys = [
    ...Object.keys(variants),
    ...Object.keys(component?.config).filter(
      (variantKey) => Object.keys(variants).indexOf(variantKey) === -1,
    ),
  ] as const;

  const newVariants = mergeVariants(variantKeys, variants, component.config);

  return _styled(component as any).withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) =>
      variantKeys.indexOf(prop as string) === -1 && defaultValidatorFn(prop),
  })`
    ${baseStyles}
    ${Object.keys(newVariants).map((key) => variant(newVariants[key]))}
  ` as Component;
};
