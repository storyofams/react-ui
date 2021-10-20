<div align="center">
  <a aria-label="Story of AMS logo" href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://avatars.githubusercontent.com/u/19343504" alt="Story of AMS" width="100">
  </a>
  <h1 align="center">@storyofams/react-ui</h1>
  <p align="center">
    <a aria-label="releases" href="https://GitHub.com/storyofams/react-ui/releases/" target="_blank">
      <img src="https://github.com/storyofams/react-ui/workflows/Release/badge.svg">
    </a>
    <a aria-label="npm" href="https://www.npmjs.com/package/@storyofams/react-ui" target="_blank">
      <img src="https://img.shields.io/npm/v/@storyofams/react-ui">
    </a>
    <a aria-label="codecov" href="https://codecov.io/gh/storyofams/react-ui" target="_blank">
      <img src="https://codecov.io/gh/storyofams/react-ui/branch/master/graph/badge.svg?token=ZV0YT4HU5H">
    </a>
    <a aria-label="stars" href="https://github.com/storyofams/react-ui/stargazers/" target="_blank">
      <img src="https://img.shields.io/github/stars/storyofams/react-ui.svg?style=social&label=Star&maxAge=86400" />
    </a>
  </p>
</div>

---

A collection of UI components build to create a production grade front-end experience with react & [Next.js](https://nextjs.org/)

---

# [Available components](https://react-ui-storyofams.vercel.app/)

| component                                                                                                    | description                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Accordion](https://react-ui-storyofams.vercel.app/?path=/story/components-accordion--basic)         | Vertically stacked list of items that can be collapsed/expanded individually                                                                                                                                                                                                   |
| [Box](https://react-ui-storyofams.vercel.app/?path=/story/components-box--basic)                     | The base for all components                                                                                                                                                                                                                                                    |
| [Breadcrumb](https://react-ui-storyofams.vercel.app/?path=/story/components-breadcrumb--basic)       | Shows the current path with the ability to navigate to each sub-path individually                                                                                                                                                                                              |
| [Button](https://react-ui-storyofams.vercel.app/?path=/story/components-button--primary)             | Simple button component (see storybook for the most up to date variants)                                                                                                                                                                                                       |
| [Checkbox](https://react-ui-storyofams.vercel.app/?path=/story/components-checkbox--basic)           | Checkbox with label and an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                                                                   |
| [DatePicker](https://react-ui-storyofams.vercel.app/?path=/story/components-DatePicker--basic)       | Datepicker that utilizes 'react-flatpickr'                                                                                                                                                                                                                                     |
| [Flex](https://react-ui-storyofams.vercel.app/?path=/story/components-flex--basic)                   | Mimics a `flexbox` implementation                                                                                                                                                                                                                                              |
| [Grid](https://react-ui-storyofams.vercel.app/?path=/story/components-grid--basic)                   | Mimics a `grid` implementation using flexbox for compatibility reasons (with few limitations in comparison to the actual grid spec)                                                                                                                                            |
| [Heading](https://react-ui-storyofams.vercel.app/?path=/story/components-heading--basic)             | Semantically correct headings (see storybook for all default variants)                                                                                                                                                                                                         |
| [Icon](https://react-ui-storyofams.vercel.app/?path=/story/components-icon--library)                 | Allows for svgs to be used as icon. We also provide some default icons you can choose to import and use with the icon component (see storybook for a complete overview). *Note: please consider using something like [SVGR](https://react-svgr.com/) when using your own icons |
| [Input](https://react-ui-storyofams.vercel.app/?path=/story/components-input--basic)                 | Input box with label and an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                                                                  |
| [Modal](https://react-ui-storyofams.vercel.app/?path=/story/components-modal--basic)                 | Modal build with `reach-dialog` which uses framer-motion to ensure smooth state transition animations                                                                                                                                                                          |
| [Radio](https://react-ui-storyofams.vercel.app/?path=/story/components-radio--basic)                 | Radio group with labels and an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                                                               |
| [Select](https://react-ui-storyofams.vercel.app/?path=/story/components-select--basic)               | Select (created with `react-select`) input with label and an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                                 |
| [Spinner](https://react-ui-storyofams.vercel.app/?path=/story/components-spinner--basic)             | Indicator to display a loading state                                                                                                                                                                                                                                           |
| [Stack](https://react-ui-storyofams.vercel.app/?path=/story/components-stack--basic)                 | Automagically creates a (horizontal or vertical) stack of items with evenly spaced                                                                                                                                                                                             |
| [StatusMessage](https://react-ui-storyofams.vercel.app/?path=/story/components-statusmessage--basic) | Displays a message in a certain colour based on the type of status (default, warning, error, success)                                                                                                                                                                         |
| [Tag](https://react-ui-storyofams.vercel.app/?path=/story/components-tag--basic)                     | Tag component used to create a list of toggleable tags with an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                               |
| [Text](https://react-ui-storyofams.vercel.app/?path=/story/components-text--basic)                   | Semantically correct text blocks (see storybook for all default variants)                                                                                                                                                                                                      |
| [TextArea](https://react-ui-storyofams.vercel.app/?path=/story/components-textarea--basic)           | Text area with label and an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                                                                  |
| [Toggle](https://react-ui-storyofams.vercel.app/?path=/story/components-toggle--basic)               | Toggle with label and an optional statusmessage (optimized for usage with react-hook-form)                                                                                                                                                                                     |

* Note: If a component does not satisfies your needs you can easily copy the contents of the components into your own project to extend / modify to fit your use-case (for other, less dramatic, customization options keep on reading 😉)

# Motivation
When the thought about creating (yet another) ui-library for react, the obvious questions were unavoidable:
* Why?
* Aren't there already many ui-libraries out there? What are we solving that others don't?

Yes there are already a bunch of ui-libraries but none specifically tailored to our setup which in the end resulted in a lot of repetitive work and/or tweaking or customizing the already existing libraries to the point where "building your own" becomes a viable option.

Our focus was to redo as less as possible and utilize as much as possible with battled tested libraries (preferably backed by an open source community). So we took some time to stitch everthing together to come up with a setup that enables us to get up and running quickly.

# Getting started
During development of this library certain choices have been made which enforce certain constraints on the developer 🔒

This done in order make the experience between projects as similar as possible.
Most of these constraints are considered 'best-practices' anyway so they shouldn't be surprising to deal with 🤓

> Using typescript is highly recommended

## Installation

Quickest way to get started is by running the following command:
```
yarn install @storyofams/react-ui
```

The library requires the following dependencies to be already installed:
```
- React (^17.0.0)
- Next.js (^10.0.0)
- styled-system (^5.1.0)
  - @styled-system/css (^5.1.0)
  - @styled-system/props (^5.1.0)
- styled-components (^5.2.0)
- @reach/alert (^0.13.0)
- @reach/checkbox (^0.13.0)
- @reach/dialog (^0.13.0)
- flatpickr (^4.6.9)
- react-flatpickr (^3.10.7)
- framer-motion (^3.10.0)
- react-id-generator (^3.0.0)
- react-select (^4.1.0)
```

## Setup
You can get started right away by importing whichever component you fancy into your project, however to get the most optimal developer experience keep on reading!

### Types
Add the following file to your project as `styled.d.ts`
```ts
import 'styled-components';

export interface Breakpoints extends Array<string> {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

declare module 'styled-components' {
  type Theme = typeof import('./path/to/theme-default-export.ts').default;

  export interface DefaultTheme extends Theme {
    breakpoints: Breakpoints;
  }
}
```

### Theme
Setting up requires adding a theme that should comply with the theme definition specified [here](https://styled-system.com/theme-specification) with a slight adjustment to the breakpoints. If you want to get started quickly just copy and paste the theme from the library (for the Breakpoints import see the above `Types` step).

### Icons
We export a list of commonly used icons to get started quickly which you can view [here](https://react-ui-storyofams.vercel.app/?path=/story/components-icon--library). Besides the icons we provide you can also supply your own svg to the Icon component as a React component. This recommended way of adding icons to load them into your application is by using [svgr](https://react-svgr.com/).

## Out of the box
Have a look at [the latest storybook deployment](https://react-ui-git-dev.storyofams.vercel.app/) to view all the components. Most likely you'll find what you need there and won't even have to look further.

## Extended variants
This library is made to get up and running fast which means we're providing variants we think that are useful that work for most use-cases. There will however always be projects that require `new` variants or slight adjustments on the already existing variants. To allow for this we're exporting a function called `styled`. This function is a wrapper on top of styled-components that pretty much works like [the styled function created by stitches](https://stitches.dev/docs/styling#base-styles).

**example:**
```ts
import { Button, styled } from '@storyofams/react-ui';

// Button has the following variants by default:
// - variant (primary, secondary, link, underline)
// - buttonSize (small, medium, large)

const ExtendedButton = styled(Button, {
  variants: {
    newVariant: {
      primary: {
        fontSize: 21,
        '&:hover': {
          backgroundColor: 'primary100',
        },
      },
    },
    buttonSize: {
      'medium-screen-xl': {
        fontSize: 2.2,
        lineHeight: 'medium',
      },
    },
    variant: {
      icon: {
        fontSize: 14,
        borderRadius: 9999,
      },
    },
  },
});

export const Extended = () => (
  <>
    <ExtendedButton variant="primary">button</ExtendedButton>
    <ExtendedButton variant="icon" newVariant="primary">
      button
    </ExtendedButton>
    <ExtendedButton
      variant="icon"
      buttonSize={['large', 'medium', 'medium-screen-xl']}
    >
      button
    </ExtendedButton>
  </>
);
```

### Css
Thanks to styled-system we get access to a `css` function. This css function can be used when you don't quite want to wrap a whole new styled-component, but you do need some specific css selectors to make it look pretty 🥰

To utilize the full potential of typescript we've re-exported the css function for you but added some autocomplete for values that live in your theme.

**comparison:**
```ts
import { css } from '@styled-system/css'

<Component
  css={css({
    backgroundColor: 'red' // autocompleted
    backgroundColor: 'primary500' // not-autocompleted
  })}
/>
```
VS
```ts
import { css } from '@storyofams/react-ui'

<Component
  css={css({
    backgroundColor: 'red' // autocompleted
    backgroundColor: 'primary500' // autocompleted
  })}
/>
```
### Adding custom props
For those components that just require extra customization or that really can't do without those few extra lines of css you can extend `systemprops`.

**example:**
```ts
import styled from 'styled-components';

import { Box, SystemProps } from '@storyofams/react-ui';

type CustomBoxProps = SystemProps & {
  /** add any CustomBoxProps here */
  customProp: string;
}

const CustomBox = styled(Box)<CustomBoxProps>`
  // very specific styling that cannot be applied through either;
  // * props
  // * cssProp
`;

export const CustomComponent = (({ customProp, ...rest}): CustomBoxProps) => {
  return (
    <CustomBox {...rest}>
      {/** ... */}
    </CustomBox>
  )
};
```

## Gotchas
Following are some things to take note of when using the library.

> I'm not using next.js, why do I need to install next.js?

  Every project is different, we've found that next.js offers us a rich environment to get up and running fast for small to huge applications. Having that said, using react-ui is not completely depended on Next.js, with the only exception being the button component. This component can act as a link between content for your application and uses the next link since that's what we use most. We are looking into the possibilities to allow to provide a custom Link component to the button.

> I'm seeing a lot of properties on the dom but no actual styling is applied?
>
  This is a know issue when using a component that uses a forwardingRef. Our current setup requires the `as` prop to enable autocomplete on certain HTML properties, since that components accepts an `as` property but is also forwarding a ref to another styled-component (which again accepts `as`) [you'll need to forward the `as`](https://styled-components.com/docs/api#forwardedas-prop). We're looking into the misconfiguration that is happening between those properties and why it's causing the properties to be passed to the dom rather than being used for styling.

> Some things do not have color am I going colourblind?

  Most likely a theme variable we're using isn't covered in your theme. Don't worry you can style those all individually as component props. If you do find a color that's playing nice please let us know by filing an [issue](https://github.com/storyofams/react-ui/issues/new/choose)

> Props are not autocompleting with values from my theme

  Make sure to go through the setup section of this readme. If the problem persists check if your implementation differs from the one in the `/example` folder. If all of the above fails let us know by filing an [issue](https://github.com/storyofams/react-ui/issues/new/choose)

# Acknowledgements
When creating this library we couldn't have done it without the following pioneers.
## styled-components
This library has really been on the forefront of developing react applications that are easily styled since the early days. It has served us very well over the course of the years and it will be hard to part ways if there ever comes a time where on of the other solutions in this space takes over.

You're probably already familiar with [styled-component](https://styled-components.com/) but be sure to give them some love 💜

## styled-system
This library, but more specifically [Brent Jackson](https://github.com/jxnblk) has really shaped up how we look to design systems. The foundation he has created with [styled-system](https://styled-system.com/) is really the dream of every developer.

Not sure what happened but the repo's have stayed unmaintained / unchanged for a while now. So we are using styled-system and the complimentary packages props and css to create the best DX we could come up with.

Huge shout out to this library and it's author for paving the way that enabled us to do this 💯

## system-props
[This library](https://github.com/system-props/system-props) is a more recent addition to the stack, but caught our eye because the shared philosophy that builds on styled-system and even includes some extensive pseudo elements as props (based on the chakra-ui implementation).

## reach-ui
Another library that has been there for a while is [reach-ui](https://reach.tech/). This library gives you the building blocks to build, the hard to get right, react components with a great attention to accessibility 🕵️‍♂️

This has been our go to when it comes to implementing those impossible components, with great success and most importantly ease of use.

## Modulz / Radix / Stitches
If you are not aware of these guys already I highly recommend checking out both [radix](https://github.com/radix-ui?type=source) and [modulz](https://github.com/modulz?type=source). They have been a great source of inspiration for some aspects of this UI-library.
We feel like they are the breath of fresh air this section of industry is really urging for. Stitches is highly innovative taking modern css capabilities to the css-in-js that we've all gotten to love. Radix is just a work of love, a product of hard work and dedication, to make the web more accessible to everyone 🥰

Having that said we also feel like it is still too early to convert our entire codebase. We are however keeping a close eye on what they are up to and will most likely jump on the wagon as soon as we feel it's matured enough to be steadily used in production grade font-end applications.
