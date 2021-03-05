import React, { FC } from 'react';

import { Button, Box, Icon, Text } from '~components';
import { ChevronRight, House } from '~components/common/Icon/library';
import { css } from '~lib/css';
import { SystemProps } from '~types/system';

export interface BreadcrumbProps extends SystemProps {
  links: Array<{ title: string; href: string }>;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ links, ...props }) => (
  <Box
    css={css({
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    })}
    {...props}
  >
    <Button as="a" to="/" aria-current="step" color="grey400">
      <Icon icon={<House />} size={16} mr={0.5} />
    </Button>
    {links.map(({ title, href }, index) => (
      <>
        <Icon icon={<ChevronRight />} color="grey400" size={16} mr={0.5} />
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
      </>
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
