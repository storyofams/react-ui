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
        onClick={() => setOpen(!open)}
        mb={1}
        {...props}
      >
        <Text color="grey700" fontWeight="bold" fontSize={3} lineHeight="150%">
          {title}
        </Text>
        <Icon
          size={24}
          sx={{
            transform: open ? 'rotate(180deg)' : '',
            transition: 'transform ease 0.2s',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
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
