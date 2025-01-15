import type { Metadata } from 'next'
import { Box, Fieldset, Input } from '@chakra-ui/react'

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'

export const metadata: Metadata = {
  title: 'Login',
}

export default function Login() {
  return (
    <Box display="grid" minBlockSize="100dvh" p="8" placeItems="center">
      <Fieldset.Root size="lg" maxW="xs">
        <Fieldset.Legend fontSize="xl" textAlign="center">Login</Fieldset.Legend>
        <Fieldset.Content>
          <Field label="Email">
            <Input name="email" type="email" />
          </Field>
          <Field label="Password">
            <Input name="password" type="password" />
          </Field>
        </Fieldset.Content>
        <Button type="submit">
          Submit
        </Button>
      </Fieldset.Root>
    </Box>
  )
}
