import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { Button, Icon, Link } from '~/components';
import { ChevronRight, House } from '../Icon/library';

export interface BreadcrumbProps extends BoxProps {
  links: Array<{ title: string; href: string }>;
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ links, ...props }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}
    {...props}
  >
    <Link href="/" aria-current="step">
      <Icon icon={<House />} size={16} mr={'1/2'} color="grey400" />
    </Link>
    {links.map(({ title, href }, index) => (
      <>
        <Icon icon={<ChevronRight />} color="grey400" size={16} mr={'1/2'} />
        <Link
          color={index === links.length - 1 ? 'grey700' : 'grey400'}
          mr={1}
          fontSize={1}
          href={href}
          aria-current={index === links.length - 1 ? 'page' : 'step'}
        >
          {title}
        </Link>
      </>
    ))}
  </Box>
);

export const MenuLink: FC<{ href: string }> = ({ children, ...props }) => (
  <Button variant="link.menu" {...props}>
    {children}
  </Button>
);

export const CategoryLink: FC<{ href: string }> = ({ children, ...props }) => (
  <Button variant="link.category" {...props}>
    {children}
  </Button>
);
