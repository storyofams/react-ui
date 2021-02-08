import React, { FC, useState } from 'react';
import { Box, BoxProps, Flex } from 'rebass/styled-components';

import { Icon, Text } from '~components';
import { ChevronDown } from '../Icon/library';

export interface AccordionProps extends BoxProps {
  title: string;
}

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: 'grey600',
        cursor: 'pointer',
      }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        onClick={() => {
          console.log('T$ST', !open);
          setOpen(!open);
        }}
        mb={1}
        {...props}
      >
        <Text color="grey700" fontWeight="bold" fontSize={3} lineHeight="150%">
          {title}
        </Text>
        <Icon
          sx={{
            transform: open ? 'rotate(180deg)' : '',
            transition: 'transform ease 0.2s',
            paddingLeft: open ? 1 : 0,
            paddingRight: open ? 0 : 1,
            pt: '1/4',
          }}
          icon={<ChevronDown />}
        />
      </Flex>

      <Box
        sx={{
          maxHeight: open ? '500px' : 0,
          transition: 'max-height ease 0.5s',
        }}
      >
        {typeof children === 'string' ? (
          <Text
            variant="psm"
            color="grey500"
            pt="6/4"
            pb="20px"
            sx={{
              transition: 'opacity ease 0.25s',
              opacity: open ? 1 : 0,
            }}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};

export default Accordion;
