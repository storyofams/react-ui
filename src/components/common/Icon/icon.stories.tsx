import React, { createElement } from 'react';
import { action } from '@storybook/addon-actions';
import { Box, Flex, Text } from 'rebass/styled-components';

import { Icon } from '~components';

import * as icons from '~components/common/Icon/library';
// import { Arrow, BadgeError, Checkout, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Facebook, Gift, Heart, Help, Instagram, Play, Search, Star, Twitter, Volume, ZoomIn, ZoomOut } from '~components/common/Icon/library';

const allIcons = (require as any)
  .context('./library', false, /\.svg$/)
  .keys()
  .map((k) => k.replace('./', '').replace('.svg', ''));

export default {
  component: Icon,
  title: 'components/Icon',
  args: {
    icon: 'heart',
  },
  argTypes: {
    icon: { control: { type: 'select', options: allIcons } },
  },
};

export const Library = (args) => (
  <Box>
    <h1>
      To add an icon simply drop the svg file in ./library and change the
      stroke/fill to "currentColor".
    </h1>
    <Box mt={2} maxWidth="320px">
      <Flex
        py={2}
        justifyContent="center"
        alignItems="center"
        sx={{ borderBottom: '1px solid #D9D9D9' }}
      >
        <Box width="75%">Name</Box>
        <Box width="25%">Icon</Box>
      </Flex>
      {Object.keys(icons).map((icon: string) => (
        <Flex
          justifyContent="center"
          alignItems="center"
          sx={{ borderBottom: '1px solid #D9D9D9' }}
          key={icon}
          py={2}
        >
          <Box width="75%">
            <Text mr={5} fontSize={1.75} lineHeight="normal">
              {icon}
            </Text>
          </Box>
          <Flex width="25%">
            <Icon
              icon={createElement(icons[icon])}
              color="grey800"
              fontSize="200px"
            />
          </Flex>
        </Flex>
      ))}
    </Box>
  </Box>
);

const commonProps = {
  color: 'secondary500' as any,
  icon: createElement(icons.Heart),
  fontSize: 8 as any,
};

const getIcon = (name) => {
  const iconName = Object.keys(icons).find(
    (icon) => icon.toLowerCase() === name,
  );
  return createElement(icons[iconName]);
};

// different semantics
export const AsButton = (args) => (
  <Icon
    {...commonProps}
    {...args}
    icon={getIcon(args.icon)}
    onClick={action('clicked')}
  />
);

export const AsATag = (args) => (
  <Icon
    {...commonProps}
    {...args}
    icon={getIcon(args.icon)}
    href="https://www.example.com"
  />
);

export const AsH1 = (args) => (
  <Icon {...commonProps} {...args} icon={getIcon(args.icon)} as="h1" />
);
