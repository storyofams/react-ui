<p align="center">
  <a href="https://storyofams.com/" target="_blank" align="center">
    <img src="https://storyofams.com/public/story-of-ams-logo-small@3x.png" alt="Story of AMS" width="120">
  </a>
  <h1 align="center">@storyofams/react-ui</h1>
</p>

# Description

Collection of UI components built with styled-system & styled-components to create a resilient front-end experience for Next.js 🚀

# Getting started

During development of this library certain choices have been made which enforce certain constraints on the developer 🔒

This done in order make the experience between projects as similar as possible. Most of these constraints are considered 'best-practices' anyway so they shouldn't be surprising to deal with 🤓

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
- flatpickr / react-flatpickr (either or both 😕)
- framer-motion (^3.10.0)
- react-id-generator (^3.0.0)
- react-select (^4.1.0)
```

## Setup
After installing you probably want to get going right away but it is first needed to do some setup to get the best DX.

### Types
Follow these steps in order write components with light speed!

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

## Usage

Have a look at [the latest storybook deployment](https://react-ui-git-dev.storyofams.vercel.app/) to view all the components. Most likely you'll find what you need there and won't even have to look further.

### Icons

We export a list of commonly used icons to get started quickly which you can view [here](https://react-ui-git-dev-storyofams.vercel.app/?path=/story/components-icon--library). Besides the icons we provide you can also supply your own icons to the Icon component as a React component. This recommended way of adding icons is through svgs. The easiest way to get svgs loaded into your application is by using [svgr](https://react-svgr.com/).

### Css

Thanks to styled-system we get access to a `css` function. This css function can be used when you don't quite want to wrap a whole new styled-component, but you do need some specific css selectors to make it look pretty 🥰

To utilize the full potential of typescript we've re-exported the css function for you but added some autocomplete for values that live in your theme. This means that;
```ts
import { css as styledSystemCss } from '@styled-system/css'
import { css as reactUiCss } from '@storyofams/react-ui'

css={styledSystemCss({
  backgroundColor: 'red' // autocompleted
})}

css={reactUiCss({
  backgroundColor: 'red' // autocompleted
  backgroundColor: 'primary500' // autocompleted
})}
```
### Custom components

For those components that just require extra customization or that really can't do without those few extra lines of css you can extend the Box component.

**Basic example:**
```ts
import styled from 'styled-components';

import { Box, BoxProps } from '@storyofams/react-ui';

type CustomBoxProps = BoxProps & {
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
      {/** envision lots of children here */}
    </CustomBox>
  )
};
```

## Gotchas
Following are some things to take note of when using the library.

> I'm seeing a lot of properties on the dom but no actual styling is applied?

  This is a know issue when using a component that uses a forwardingRef. Our current setup requires the `as` prop to enable autocomplete on certain HTML properties, since that components accepts an `as` property but is also forwarding a ref to another styled-component (which again accepts `as`) (you'll need to forward the `as`)[https://styled-components.com/docs/api#forwardedas-prop]. We're looking into the misconfiguration that is happening between those properties and why it's causing the properties to be passed to the dom rather than being used for styling.

> Some things do not have color am I going colourblind?

  Most likely a theme variable we're using isn't covered in your theme. Don't worry you can style those all individually as component props. If you do find a color that's playing nice please let us know by filing an [issue](https://github.com/storyofams/react-ui/issues/new/choose)

> Props are not autocompleting with values from my theme

  Make sure to go through the setup section of this readme. If the problem persists check if your implementation differs from the one in the `/example` folder. If all of the above fails let us know by filing an [issue](https://github.com/storyofams/react-ui/issues/new/choose)

## Contributing

Please see the contributing.md if you wanna help out.

### Local development
When working with react libraries locally it can be a very painful process to get everything up and running.
> Yes, I'm looking at you `yarn link`

The easiest way to do some minor adjustments is through the isolated environment of `storybook` or `jest`.

However ultimately you also want to see how your changes work in an actual application. For that specific reason we've added the `/example` directory. This is a very minimal implementation of a next.js application with this library implemented. Following are the instructions to get the example up and running. **You can swap out example with your next.js project to get that up and running.**

1. Install npm modules for both `example` and in the root of the library.
2. Navigate to example and run the following command.
   ```
    cd node_modules/react && yarn link && cd ../styled-components && yarn link && cd ../../
   ```
   This navigates to both `react` and `styled-components` node_modules and links them with `yarn`. It finally returns you to the example directory to avoid confusion.
3. Navigate to the library and run the following command.
   ```
    yarn link react styled-components && yarn build
   ```
   Wait for the build to complete.
4. Navigate to the example and start the example with the dev command.

# Acknowledgements
When the question arose if we should create a ui-library for react of course the obvious question was unavoidable; Why? Aren't there already many ui-libraries out there?

And the answer to that is yes there are already a bunch of ui-libraries but none specifically tailored to our setup which in the end results in a lot of repetitive work when setting up projects. Nonetheless we want to give a few libraries out there a huge shout out as they are the foundation of this library.

## styled-components
This library has really been on the forefront of developing react applications that are easily styled since the early days. It has served us very well over the course of the years and it will be hard to part ways if there ever comes a time where on of the other solutions in this space takes over.

You're probably already familiar with [styled-component](https://styled-components.com/) but be sure to give them some love 💜

## styled-system

This library, but more specifically [Brent Jackson](https://github.com/jxnblk) has really shaped up how we look to design systems. The foundation he has created with [styled-system](https://styled-system.com/) is really the dream of every developer.

Not sure what happened but the repo's have stayed unmaintained / unchanged for a while now. So we are using styled-system and the complimentary packages props and css to create the best DX we could come up with.

Huge shout out to this library and it's author for paving the way that enabled us to do this 💯

## reach-ui

Another library that has been there for a while is [reach-ui](https://reach.tech/). This library gives you the building blocks to build, the hard to get right, react components with a great attention to accessibility 🕵️‍♂️

This has been our go to when it comes to implementing those impossible components, with great success and most importantly ease of use.

## Modulz / Radix

If you are not aware of these guys already I highly recommend checking out both [radix](https://github.com/radix-ui?type=source) and [modulz](https://github.com/modulz?type=source).

They have been a great source of inspiration for some of the aspects of this UI-library.

We feel like they are the breath of fresh air this section of industry is really urging for. Stitches is highly innovative taking modern css capabilities to the css-in-js that we've all gotten to love. Radix is just a work of love, hard work and dedication to make the web more accessible to everyone 🥰

Having that said we also feel like it is still too early to convert at this stage. We are however keeping a close eye on what they are up to and will most likely jump on the wagon as soon as we feel it's matured enough to be steadily used in production grade font-end applications.

### Honorable mentions

Some non project specific dependencies that haven't made the above list but are a worthy mentioning:
* [Jest](https://jestjs.io/)
* [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/)
* [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)
* [Semantic-release](https://semantic-release.gitbook.io/semantic-release/)

