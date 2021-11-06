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

interface AllVariants {
  readonly prop: string;
  readonly variants: {
    readonly [x: string]: GenericObjectType;
  };
}

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

  const newVariants = mergeVariants(
    variantKeys,
    variants,
    component?.config ?? {},
  );

  return _styled(component as any).withConfig({
    // this is needed to pass down all of the props to the parent
    // but do apply the styling props
    // where the logic should be in regards to those props
    shouldForwardProp: () => true,
  })`
    ${css(baseStyles)}
    ${Object.keys(newVariants).map((key) => variant(newVariants[key]))}

    && {
      ${(props) => props.css}
      ${system}
    }
  ` as Component;
};
