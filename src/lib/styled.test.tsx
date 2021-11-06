import React from 'react';
import { Button, Box } from '~components';
import { styled } from '~lib/styled';
import { render, screen, userEvent } from '~lib/test-utils';

const styles = {
  baseStyles: {
    color: 'blue',
  },
  variants: {
    newVariant: {
      largeFont: {
        fontSize: 2,
      },
    },
    variant: {
      primary: {
        letterSpacing: '0.02em',
        backgroundColor: 'red',
      },
      custom: {
        backgroundColor: 'red',
      },
    },
  },
};

const ExtendedComponent = styled(Box, styles);
const ExtendedButton = styled(Button, styles);

describe('extend component without existing variations', () => {
  it('allows adding new variations', () => {
    render(
      <ExtendedComponent
        data-testid="box"
        newVariant="largeFont"
        variant="custom"
      />,
    );

    expect(screen.getByTestId('box')).toHaveStyle(
      'font-size: 16px; background-color: red;',
    );
  });
  it('allows extending variations', () => {
    render(<ExtendedComponent data-testid="box" variant="primary" />);

    expect(screen.getByTestId('box')).toHaveStyle(
      'letter-spacing: 0.02em; background-color: red;',
    );
  });
  it('allows overriding baseStyles', () => {
    render(<ExtendedComponent data-testid="box" color="aquamarine" />);

    expect(screen.getByTestId('box')).toHaveStyle('color: aquamarine;');
  });
  it('allows overriding variantStyles', () => {
    render(
      <ExtendedComponent
        data-testid="box"
        variant="primary"
        backgroundColor="aquamarine"
      />,
    );
    expect(screen.getByTestId('box')).toHaveStyle(
      'letter-spacing: 0.02em; background-color: aquamarine;',
    );
  });
  it('allows bubbling down props', () => {
    render(<ExtendedComponent as="a" data-testid="box" href="/link" />);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
  // .. should probably also not work
  // it('allows for bubbling down custom props', () => {
  //   render(
  //     <ExtendedButton data-testid="box" customProp="new-value">
  //       button
  //     </ExtendedButton>,
  //   );
  // });
});

describe('extend component with existing variations', () => {
  it('allows adding new variations', () => {
    render(
      <ExtendedButton newVariant="largeFont" variant="custom">
        button
      </ExtendedButton>,
    );

    expect(screen.getByRole('button')).toHaveStyle(
      'font-size: 16px; background-color: red;',
    );
  });
  it('allows extending variations', () => {
    render(<ExtendedButton variant="primary">button</ExtendedButton>);

    expect(screen.getByRole('button')).toHaveStyle('background-color: red;');
  });
  it('allows overriding baseStyles', () => {
    render(<ExtendedButton color="aquamarine">button</ExtendedButton>);

    expect(screen.getByRole('button')).toHaveStyle('color: aquamarine;');
  });
  it('allows overriding variantStyles', () => {
    render(
      <ExtendedButton variant="primary" backgroundColor="aquamarine">
        button
      </ExtendedButton>,
    );

    expect(screen.getByRole('button')).toHaveStyle(
      'background-color: aquamarine;',
    );
  });
  it('allows bubbling down props', () => {
    const mockFn = jest.fn();
    render(
      <ExtendedButton data-testid="box" isLoading onClick={mockFn}>
        button
      </ExtendedButton>,
    );

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveAttribute(
      'data-is-loading',
      'true',
    );

    userEvent.click(screen.getByRole('button'));

    // should not be fired in a loading state
    expect(mockFn).not.toHaveBeenCalled();
  });
  // .. should probably also not work
  // it('allows for bubbling down props', () => {
  //   render(
  //     <>
  //       <ExtendedButton as="a" href="/bla">
  //         button
  //       </ExtendedButton>
  //       <ExtendedButton onClick="button">button</ExtendedButton>
  //     </>,
  //   );
  // });
});
