import React from 'react';

import { NextSeo } from 'next-seo';
import { Button, css } from '@storyofams/react-ui';

const Home = () => {
  return (
    <>
      <NextSeo
        title="React UI Example"
        description="React helpers example app"
      />
      <Button
        css={css({
          backgroundColor: 'primary500',
        })}
      >
        click me
      </Button>
    </>
  );
};
export default Home;
