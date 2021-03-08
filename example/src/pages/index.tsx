import React from 'react';

import { NextSeo } from 'next-seo';
import {
  BadgeError,
  Box,
  Button,
  css,
  Heading,
  Icon,
  Text,
} from '@storyofams/react-ui';

const Home = () => {
  return (
    <>
      <NextSeo
        title="React UI Example"
        description="React helpers example app"
      />

      <Box backgroundColor="primary400" css={css({ px: 4 })} height="100%">
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
          <Icon icon={BadgeError} ml="1/2" size={2} />
        </Button>

        <Button as="a" to="/new-page">
          click me
        </Button>
      </Box>
    </>
  );
};
export default Home;
