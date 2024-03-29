import type {
  ComponentType,
  FunctionComponent,
  ComponentClass,
  ElementType,
} from 'react';

import type {
  PolymorphicForwardRefExoticComponent,
  PolymorphicPropsWithoutRef,
} from 'react-polymorphic-types';
import { default as _styled } from 'styled-components';
import { variant, ResponsiveValue } from 'styled-system';

import { system } from '~lib/system';

import css from './css';

type GenericObjectType = { readonly [key: string]: any };
type GenericNestedObjectType = { readonly [key: string]: GenericObjectType };
type GenericOptionalNestedObjectType = {
  // allow for a non-nested structure as well
  readonly [key: string]: string | number | GenericObjectType;
};

export type StyledConfigType = {
  config?: {
    readonly variant: GenericObjectType;
    readonly [key: string]: GenericObjectType;
  };
};

export type WithPolyMorphicProps<
  DefaultElement extends ElementType,
  Props extends {},
> = PolymorphicPropsWithoutRef<Props, DefaultElement>;

export type ComponentWithConfig<P> = FunctionComponent<P> & StyledConfigType;
type ComponentProps<Component> =
  Component extends PolymorphicForwardRefExoticComponent<infer P, any>
    ? P
    : Component extends FunctionComponent<infer P>
    ? P
    : Component extends ComponentClass<infer P>
    ? P
    : never;

type Intersection<
  T1 extends Record<string | symbol | number, any>,
  T2 extends Record<string | symbol | number, any>,
> = {
  [P in keyof T1 | keyof T2 as unknown extends T1[P]
    ? never
    : unknown extends T2[P]
    ? never
    : P]?: ResponsiveValue<T1[P] | T2[P]>;
};

type Blend<T, U> = Omit<T, keyof U> & Omit<U, keyof T> & Intersection<T, U>;

type VariantKeys<T> = {
  [P in keyof T]?: keyof T[P];
};

type OptionProps = {
  readonly baseStyles?: GenericOptionalNestedObjectType;
  readonly variants?: GenericNestedObjectType;
};

const mergeVariants = (
  oldVariants: GenericNestedObjectType = {},
  newVariants: GenericNestedObjectType = {},
) => ({
  ...oldVariants,
  ...Object.keys(newVariants)?.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: {
        ...oldVariants?.[curr],
        ...newVariants[curr],
      },
    }),
    {},
  ),
});

export const styled = <
  InheritedProps extends ComponentProps<Component>,
  Variants extends OptionProps,
  Component extends ComponentWithConfig<any>,
>(
  component: Component,
  { baseStyles, variants = {} }: Variants,
): ComponentType<Blend<InheritedProps, VariantKeys<Variants['variants']>>> => {
  const variantKeys = [
    ...Object.keys(variants),
    ...Object.keys(component?.config ?? {}).filter(
      (variantKey) => Object.keys(variants).indexOf(variantKey) === -1,
    ),
  ] as const;

  const newVars = variantKeys.map((varKey) => ({
    prop: varKey,
    variants: mergeVariants(component?.config?.[varKey], variants?.[varKey]),
  }));

  return _styled(component as any)`
    ${css(baseStyles)}
    ${newVars.map((newVariant) => variant(newVariant))}

    && {
      ${(props) => props.css}
      ${system}
    }
  ` as Component;
};
