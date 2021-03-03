module.exports = {
  stories: ['../src/components/common/Box/box.stories.tsx', '../src/components/common/Button/button.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
  ],
};

