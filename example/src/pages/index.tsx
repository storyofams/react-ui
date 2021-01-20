import React from 'react';

import { NextSeo } from 'next-seo';
import { Button, Icon, Arrow } from '@storyofams/react-ui';

const Home = () => {
  return (
    <>
      <NextSeo title="React Helpers" description="React helpers example app" />
      <Button bg="warning500">click me</Button>
      <Icon icon={<Arrow />} color="warning500" />
    </>
  );
};
export default Home;
