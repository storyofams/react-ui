import React from 'react';

import { SystemProps } from '~lib';
import { Box } from '~components/common/Box';
import { Button } from '~components/common/Button';
import { Flex } from '~components/common/Flex';
import { Icon } from '~components/common/Icon';
import { ChevronRight, House } from '~components/common/Icon/library';
import { Text } from '~components/common/Text';

export interface BreadcrumbProps extends SystemProps {
  links: Array<{ title: string; href: string }>;
}

export const Breadcrumb = ({ links, ...props }: BreadcrumbProps) => (
  <Box display="flex" flexDirection="row" alignItems="center" {...props}>
    <Button as="a" to="/" aria-current="step" color="grey400" variant="link">
      <Icon icon={<House />} fontSize={2} mr={0.5} />
    </Button>
    {links.map(({ title, href }, index) => (
      <Flex key={`${title}-${index}`}>
        <Icon icon={ChevronRight} color="grey400" fontSize="8px" mr={0.5} />
        {index === links.length - 1 ? (
          <Text color="grey400" mr={1} fontSize={1.5} aria-current="step">
            {title}
          </Text>
        ) : (
          <Button
            as="a"
            color="grey400"
            mr={1}
            fontSize={1.5}
            to={href}
            aria-current="step"
            variant="link"
          >
            {title}
          </Button>
        )}
      </Flex>
    ))}
  </Box>
);
