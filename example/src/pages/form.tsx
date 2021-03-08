import { Controller, useForm } from 'react-hook-form';

import {
  Box,
  Input,
  Select,
  Checkbox,
  RadioGroup,
  Heading,
  Button,
  Stack,
  Textarea,
} from '@storyofams/react-ui';

type Inputs = {
  name: string;
  description: string;
  favoriteFood: string;
  terms: boolean;
  stack: string;
};

const drinkOptions = [
  { value: 'beer', label: 'Beer' },
  { value: 'milk', label: 'Milk' },
  { value: 'moreBeer', label: 'Beer' },
];

const stackOptions = [
  { value: 'ts', label: 'Typescript' },
  { value: 'js', label: 'Javscript' },
];

const Form = () => {
  const { register, handleSubmit, watch, control } = useForm<Inputs>({
    defaultValues: {
      terms: false,
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <Box mx={'auto' as any}>
      <Box
        as="form"
        display="flex"
        flexDirection="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading as="h2" variant="h2" mb={2}>
          Nice form
        </Heading>
        <Stack space={2} flexDirection="column">
          <Input label="Name" name="name" ref={register} />
          <Textarea label="Description" name="description" ref={register} />
          <Controller
            as={Select}
            control={control}
            name="favoriteFood"
            label="Favorite food"
            options={drinkOptions}
            defaultValue={undefined}
            placeholder="Select your fav food"
          />
          <Controller
            space={1}
            name="stack"
            as={RadioGroup}
            defaultValue="ts"
            control={control}
            label="Choose the stack"
            options={stackOptions}
          />
          <Checkbox
            name="terms"
            label="I agree with everything"
            ref={register}
          />
        </Stack>
        <Button
          variant="primary"
          type="submit"
          mt={3}
          disabled={!watch('terms')}
        >
          submit
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
