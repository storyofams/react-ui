import React, { FC } from 'react';
import styled from 'styled-components';

import { Box } from '~components/common/Box';
import { SystemProps } from '~types/system';

const TagComponent = styled(Box)(({ theme, checked }) => ({
  width: 'max-content',
  cursor: 'pointer',
  borderWidth: 1,
  borderStyle: 'solid',
  lineHeight: theme.lineHeights.normal,
  fontSize: theme.fontSizes[1.5],
  borderRadius: theme.radii.full,
  padding: `${theme.space[1]}px ${theme.space[1.5]}px`,
  color: checked ? theme.colors.white : theme.colors.grey700,
  backgroundColor: checked ? theme.colors.primary700 : theme.colors.primary100,
  borderColor: checked ? theme.colors.primary700 : theme.colors.primary100,
  transition:
    'border-color 0.18s ease-in-out, background-color 0.18s ease-in-out',

  '&:hover': {
    borderColor: theme.colors.primary700,
  },
}));

export interface TagProps extends SystemProps {
  checked: boolean;
  onChange: () => void;
}

export const Tag: FC<TagProps> = ({ children, ...props }) => (
  <TagComponent checked={props.checked} onClick={props.onChange} {...props}>
    {children}
  </TagComponent>
);

export default Tag;
