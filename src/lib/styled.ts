import React from 'react';
import type { PolymorphicForwardRefExoticComponent } from 'react-polymorphic-types';
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

type ComponentWithConfig<P> = React.FunctionComponent<P> & StyledConfigType;

type ComponentProps<
  Component
> = Component extends PolymorphicForwardRefExoticComponent<infer P, any>
  ? P
  : Component extends React.FunctionComponent<infer P>
  ? P
  : Component extends React.ComponentClass<infer P>
  ? P
  : never;

type Intersection<
  T1 extends Record<string | symbol | number, any>,
  T2 extends Record<string | symbol | number, any>
> = {
  [P in keyof T1 | keyof T2 as unknown extends T1[P]
    ? never
    : unknown extends T2[P]
    ? never
    : P]: T1[P] | T2[P];
};

type Blend<T, U> = Omit<T, keyof U> & Omit<U, keyof T> & Intersection<T, U>;

type VariantKeys<T> = {
  [P in keyof T]?: keyof T[P];
};

export const styled = <
  InheritedProps extends ComponentProps<Component>,
  Variants extends OptionProps,
  Component extends ComponentWithConfig<any>
>(
  component: Component,
  { variants, baseStyles }: Variants,
): React.ComponentType<
  Blend<InheritedProps, VariantKeys<Variants['variants']>>
> => {
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
