import { Button } from '~components';
import { styled } from '~lib/styled';
import { render } from '~lib/test-utils';

const CustomButton = styled(Button, {
  variants: {
    custom: {
      myOwnThing: {
        fontSize: 21,
      },
    },
    variant: {
      custom: {
        fontSize: 14,
      },
    },
  },
});

test('returns component with extended variants', async () => {
  render(
    <>
      <CustomButton backgroundColor="primary200" custom="custom">
        button
      </CustomButton>
      <CustomButton backgroundColor="primary200" variant="custom">
        button
      </CustomButton>
    </>,
  );
});

test('allow for `old` variants', async () => {
  render(<CustomButton variant="">button</CustomButton>);
});
