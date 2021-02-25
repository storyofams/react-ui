import React from 'react';

import { NextSeo } from 'next-seo';
import { Text } from 'rebass/styled-components';
import { Button, Icon, Arrow } from '@storyofams/react-ui';

const Home = () => {
  return (
    <>
      <NextSeo title="React Helpers" description="React helpers example app" />
      <Button isLoading backgroundColor="primary400">
        <Text fontSize={2}>click me</Text>
        <Icon icon={Arrow} color="warning500" />
      </Button>
    </>
  );
};

export default Home;
