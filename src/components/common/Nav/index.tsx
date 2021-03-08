import React, { FC } from 'react';

import { Box } from '~components/common/Box';
import { Button } from '~components/common/Button';
import { Icon } from '~components/common/Icon';
import { ChevronRight, House } from '~components/common/Icon/library';
import { Text } from '~components/common/Text';
import { SystemProps } from '~types/system';

export interface BreadcrumbProps extends SystemProps {
  links: Array<{ title: string; href: string }>;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ links, ...props }) => (
  <Box display="flex" flexDirection="row" alignItems="center" {...props}>
    <Button as="a" to="/" aria-current="step" color="grey400">
      <Icon icon={<House />} size={16} mr={0.5} />
    </Button>
    {links.map(({ title, href }, index) => (
      <div key={`${title}-${index}`}>
        <Icon icon={ChevronRight} color="grey400" fontSize={2} mr={0.5} />
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
          >
            {title}
          </Button>
        )}
      </div>
    ))}
  </Box>
);

export const MenuLink: FC<{ href: string }> = ({ children, ...props }) => (
  <Button variant="link" {...props}>
    {children}
  </Button>
);

export const CategoryLink: FC<{ href: string }> = ({ children, ...props }) => (
  <Button variant="link" {...props}>
    {children}
  </Button>
);
