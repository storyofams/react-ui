import React, { FC, useState } from 'react';

import { Box } from '~components/common/Box';
import { Flex } from '~components/common/Flex';
import { Icon } from '~components/common/Icon';
import { ChevronDown } from '~components/common/Icon/library';
import { Text } from '~components/common/Text';
import { SystemProps } from '~types/system';

export interface AccordionProps extends SystemProps {
  title: string;
}

export const Accordion: FC<AccordionProps> = ({
  title,
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Box borderBottom="1px solid" borderBottomColor="grey600">
      <Flex
        justifyContent="space-between"
        alignItems="flex-start"
        /** @ts-ignore this is an indication of whats wrong with the return type of the polymorph */
        onClick={() => setOpen(!open)}
        pb={1}
        cursor="pointer"
        {...props}
      >
        <Text variant="pmd" color="grey700" fontWeight="bold">
          {title}
        </Text>
        <Icon
          fontSize={3}
          icon={ChevronDown}
          display="flex"
          justifyContent="center"
          alignItems="center"
          transform={open ? 'rotate(180deg)' : 'none'}
          transition="transform 0.2s ease-in-out"
        />
      </Flex>

      <Box maxHeight={open ? '500px' : 0} transition="max-height ease 0.3s">
        {typeof children === 'string' ? (
          <Text
            variant="psm"
            color="grey500"
            pt={1.5}
            pb={2.5}
            transition="opacity ease 0.25s"
            opacity={open ? 1 : 0}
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
