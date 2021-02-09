import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';

import styled from 'styled-components';

const TagComponent = styled(Box)(({ theme, checked }) => ({
  width: 'max-content',
  cursor: 'pointer',
  borderWidth: 1,
  borderStyle: 'solid',
  lineHeight: theme.lineHeights.normal,
  fontSize: theme.fontSizes[1],
  borderRadius: theme.radii.full,
  padding: `${theme.space[1]}px ${theme.space['6/4']}px`,
  color: checked ? theme.colors.white : theme.colors.grey700,
  backgroundColor: checked ? theme.colors.primary700 : theme.colors.primary100,
  borderColor: checked ? theme.colors.primary700 : theme.colors.primary100,
  transition: 'border-color 0.18s ease',

  '&:hover': {
    borderColor: theme.colors.primary700,
  },
}));

export interface TagProps extends BoxProps {
  checked: boolean;
  onChange: () => void;
}

export const Tag: FC<TagProps> = ({ children, ...props }) => (
  <TagComponent checked={props.checked} onClick={props.onChange} {...props}>
    {children}
  </TagComponent>
);

export default Tag;
