import React from 'react';

import { NextSeo } from 'next-seo';
import { Button, Box, Text, Heading, css } from '@storyofams/react-ui';

const Home = () => {
  return (
    <>
      <NextSeo
        title="React UI Example"
        description="React helpers example app"
      />

      <Box as="div" backgroundColor="primary400" css={css({ px: 4 })}>
        <Heading fontSize="heading">Paragraph</Heading>
        <Text fontSize={4}>Paragraph</Text>
        <Button
          as="button"
          variant="primary"
          isLoading
          backgroundColor="primary400"
          css={css({ backgroundColor: 'primary500' })}
        >
          click me
        </Button>

        <Button as="a" variant="link" href="/new-page">
          click me
        </Button>

        <Button as="a" to="/new-page">
          click me
        </Button>
      </Box>
    </>
  );
};
export default Home;
