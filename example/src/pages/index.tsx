import React from 'react';

import { NextSeo } from 'next-seo';
import {
  Button,
  Box,
  Text,
  Heading,
  css,
  Icon,
  Heart,
  BadgeError,
} from '@storyofams/react-ui';

console.log(<Heart />);

const Home = () => {
  return (
    <>
      <NextSeo
        title="React UI Example"
        description="React helpers example app"
      />

      <Box backgroundColor="primary400" css={css({ px: 4 })}>
        <Heading fontSize="heading">Paragraph</Heading>
        <Text fontSize={4}>Paragraph</Text>
        <Button
          isLoading
          variant="primary"
          backgroundColor="primary400"
          css={css({ backgroundColor: 'primary500' })}
        >
          click me
        </Button>

        <Button as="a" variant="link" href="/new-page" color="grey200">
          click me
          <Icon icon={<BadgeError />} ml="1/2" fontSize={10} />
        </Button>

        <Button as="a" to="/new-page">
          click me
        </Button>
      </Box>
    </>
  );
};
export default Home;
