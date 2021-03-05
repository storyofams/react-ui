import {DocsPage, DocsContainer} from '@storybook/addon-docs/blocks'
import * as nextImage from 'next/image';
import { Box } from 'rebass/styled-components';

import ProviderDecorator from "./ProviderDecorator";
import { viewPorts } from './viewports';
import "../public/static/fonts/stylesheet.css";
import 'flatpickr/dist/themes/light.css'

export const decorators = [ProviderDecorator]

export const parameters = {
  viewPort: {
    viewports: viewPorts
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: {
        method: 'alphabetical',
        order: ['components'],
    },
  },
};

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    return <Box {...props}><img sx={props} {...props} /></Box>;
  },
});
