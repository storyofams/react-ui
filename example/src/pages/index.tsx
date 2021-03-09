import React from 'react';

import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import {
  BadgeError,
  Box,
  Button,
  css,
  Heading,
  Icon,
  Text,
} from '@storyofams/react-ui';

const Footer = styled(Box)`
  color: ${(p) => p.theme.colors.primary500};
`;

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
          <Icon icon={BadgeError} ml="1/2" fontSize={2} />
        </Button>

        <Button as="a" to="/new-page">
          click me
        </Button>
      </Box>
      <Footer
        height={24}
        minWidth="100%"
        backgroundColor="error100"
        css={css({
          border: '1px solid',
          borderColor: 'primary500',
        })}
      >
        <Text>Test</Text>
      </Footer>
    </>
  );
};
export default Home;
