import React, { FC } from 'react';
import { Box, BoxProps } from 'rebass/styled-components';
import { Button, Icon, Link, Text } from '~/components';
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
    <Link href="/" aria-current="step" color="grey400">
      <Icon icon={<House />} size={16} mr={0.5} />
    </Link>
    {links.map(({ title, href }, index) => (
      <>
        <Icon icon={<ChevronRight />} color="grey400" size={16} mr={0.5} />
        {index === links.length - 1 ? (
          <Text color="grey400" mr={1} fontSize={1.5} aria-current="step">
            {title}
          </Text>
        ) : (
          <Link
            color="grey400"
            mr={1}
            fontSize={1.5}
            href={href}
            aria-current="step"
          >
            {title}
          </Link>
        )}
      </>
    ))}
  </Box>
);

export const MenuLink: FC<{ href: string }> = ({ children, ...props }) => (
  <Button variant="link.underline" {...props}>
    {children}
  </Button>
);

export const CategoryLink: FC<{ href: string }> = ({ children, ...props }) => (
  <Button variant="link" {...props}>
    {children}
  </Button>
);
