import React from 'react';
import {
  PasswordInput,
  PasswordInputProps,
} from '../PasswordInput/PasswordInput';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...PasswordInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          errorMessage={fieldState.error?.message}
          onChangeText={field.onChange}
          {...PasswordInputProps}
        />
      )}
    />
  );
}
