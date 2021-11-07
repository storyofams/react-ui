import React from 'react';
import { Button, Box } from '~components';
import { styled } from '~lib/styled';
import { render, screen, userEvent } from '~lib/test-utils';

const styles = {
  baseStyles: {
    p: 3,
    border: '1px',
    borderColor: 'black',
  },
  variants: {
    newVariant: {
      custom: {
        p: 1,
        bg: 'pink',
      },
    },
    variant: {
      primary: {
        px: 2,
        py: 2,
        bg: 'red',
        '&:disabled': {
          bg: 'green',
          opacity: 0.5,
        },
      },
    },
  },
};

const ExtendedComponent = styled(Box, styles);
const ExtendedButton = styled(Button, styles);

describe('extend component without existing variations', () => {
  it('allows adding new baseStyles', () => {
    render(<ExtendedComponent data-testid="box" />);
    expect(screen.getByTestId('box')).toHaveStyle(
      'padding: 24px; border: 1px solid; border-color: black;',
    );
  });
  it('allows overriding baseStyles', () => {
    render(<ExtendedComponent data-testid="box" p={1} />);
    expect(screen.getByTestId('box')).toHaveStyle('padding: 8px;');
  });
  it('allows adding new variations', () => {
    render(<ExtendedComponent data-testid="box" newVariant="custom" />);
    expect(screen.getByTestId('box')).toHaveStyle(
      'padding: 8px; background-color: pink;',
    );
  });
  it('allows overriding variantStyles', () => {
    render(<ExtendedComponent data-testid="box" newVariant="custom" p={2} />);
    expect(screen.getByTestId('box')).toHaveStyle(
      'padding: 16px; background-color: pink;',
    );
  });
  /** @note this is a test to ensure it works even though ts complains */
  it('allows bubbling down props', () => {
    const mockFn = jest.fn();
    render(
      <ExtendedComponent
        as="a"
        href="/link"
        data-testid="box"
        onClick={mockFn}
      />,
    );
    expect(screen.getByTestId('box')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('box'));
    expect(mockFn).toHaveBeenCalled();
  });
  // .. should probably also not work
  // .. should create a new component in that case
  // it('allows for adding new props', () => {
  //   render(
  //     <ExtendedButton data-testid="box" customProp="new-value">
  //       button
  //     </ExtendedButton>,
  //   );
  // });
});

describe('extend component with existing variations', () => {
  it('allows adding new baseStyles', () => {
    render(<ExtendedButton data-testid="button">button</ExtendedButton>);
    expect(screen.getByTestId('button')).toHaveStyle(
      'padding: 24px; border: 1px solid; border-color: black;',
    );
  });
  it('allows overriding baseStyles', () => {
    render(
      <ExtendedButton data-testid="button" p={1}>
        button
      </ExtendedButton>,
    );
    expect(screen.getByTestId('button')).toHaveStyle('padding: 8px;');
  });
  it('allows adding new variations', () => {
    render(
      <ExtendedButton data-testid="button" newVariant="custom">
        button
      </ExtendedButton>,
    );
    expect(screen.getByTestId('button')).toHaveStyle(
      'padding: 8px; background-color: pink;',
    );
  });
  it('allows extending existing variations', () => {
    render(
      <ExtendedButton data-testid="button" variant="primary">
        button
      </ExtendedButton>,
    );
    expect(screen.getByTestId('button')).toHaveStyle(
      'padding: 16px 16px 16px 16px; background-color: red;',
    );
  });
  it('allows overriding variantStyles', () => {
    render(
      <ExtendedButton data-testid="button" newVariant="custom" p={2}>
        button
      </ExtendedButton>,
    );
    expect(screen.getByTestId('button')).toHaveStyle(
      'padding: 16px; background-color: pink;',
    );
  });
  /** @note this is a test to ensure it works even though ts complains */
  it('allows bubbling down props', () => {
    const mockFn = jest.fn();
    render(
      <>
        <ExtendedButton data-testid="loading-button" isLoading>
          button
        </ExtendedButton>
        <ExtendedButton data-testid="next-button" to="/link">
          Link
        </ExtendedButton>
        <ExtendedButton data-testid="link-button" as="a" href="/link">
          External Link
        </ExtendedButton>
        <ExtendedButton data-testid="click-button" onClick={mockFn}>
          button
        </ExtendedButton>
      </>,
    );

    expect(screen.getByTestId('loading-button')).toHaveAttribute(
      'data-is-loading',
      'true',
    );

    userEvent.click(screen.getByTestId('click-button'));
    expect(mockFn).toHaveBeenCalled();
  });
  // .. should probably also not work
  // .. should create a new component in that case
  // it('allows for adding new props', () => {
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
