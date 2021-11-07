import React, { useEffect, useRef } from 'react';
import { axe } from 'jest-axe';

import { Button } from '~components';
import { styled } from '~lib';
import { userEvent, render, screen } from '~lib/test-utils';

const ExtendedButton = styled(Button, {});

describe('[Button]', () => {
  it('[Button] should not fail accessibility testing', async () => {
    const { container } = render(<Button>Click</Button>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('registers event handlers', () => {
    const clickHandler = jest.fn();
    render(<Button onClick={clickHandler}>button</Button>);

    userEvent.click(screen.getByRole('button', { name: /button/i }));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  const Component = ({ refHandler }) => {
    const ref = useRef<HTMLButtonElement>();
    useEffect(() => {
      if (ref.current) {
        ref.current.click();
      }
    });

    return (
      <Button ref={ref} onClick={refHandler}>
        button
      </Button>
    );
  };

  it('forwards ref', () => {
    const refHandler = jest.fn();

    render(<Component refHandler={refHandler} />);

    expect(refHandler).toHaveBeenCalledTimes(1);
  });

  it('handles `isLoading` prop', () => {
    render(
      <Button data-testid="loading-btn" isLoading>
        loading
      </Button>,
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'data-is-loading',
      'true',
    );
  });

  it('handles `href` prop', () => {
    render(
      <Button as="a" href="/">
        button
      </Button>,
    );

    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('handles `to` props', async () => {
    render(
      <Button as="a" to="/next-link">
        button
      </Button>,
    );

    expect(screen.getByText(/button/i)).toHaveAttribute('href', '/next-link');
  });
});

describe('[ExtendedButton]', () => {
  it('should not fail accessibility testing', async () => {
    const { container } = render(<ExtendedButton>Click</ExtendedButton>);

    expect(await axe(container)).toHaveNoViolations();
  });

  it('registers event handlers', () => {
    const clickHandler = jest.fn();
    render(<ExtendedButton onClick={clickHandler}>button</ExtendedButton>);

    userEvent.click(screen.getByRole('button', { name: /button/i }));

    expect(clickHandler).toHaveBeenCalledTimes(1);
  });

  const Component = ({ refHandler }) => {
    const ref = useRef<HTMLButtonElement>();
    useEffect(() => {
      if (ref.current) {
        ref.current.click();
      }
    });

    return (
      <ExtendedButton ref={ref} onClick={refHandler}>
        button
      </ExtendedButton>
    );
  };

  it('forwards ref', () => {
    const refHandler = jest.fn();

    render(<Component refHandler={refHandler} />);

    expect(refHandler).toHaveBeenCalledTimes(1);
  });

  it('handles `isLoading` prop', () => {
    render(
      <ExtendedButton data-testid="loading-btn" isLoading>
        loading
      </ExtendedButton>,
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'data-is-loading',
      'true',
    );
  });

  it('handles `href` prop', () => {
    render(
      <ExtendedButton as="a" href="/">
        button
      </ExtendedButton>,
    );

    expect(screen.getByRole('link', { name: /button/i })).toHaveAttribute(
      'href',
      '/',
    );
  });

  it('handles `to` props', async () => {
    render(<ExtendedButton to="/next-link">button</ExtendedButton>);

    expect(screen.getByText(/button/i)).toHaveAttribute('href', '/next-link');
  });
});
