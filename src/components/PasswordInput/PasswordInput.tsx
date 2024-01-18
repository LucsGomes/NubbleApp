import React, {useState} from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;
export function PasswordInput(props: PasswordInputProps) {
  const [isSecurityTextEntry, setIsSecyreTextEntry] = useState(true);
  function toggleSecureTextEntry() {
    setIsSecyreTextEntry(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecurityTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecureTextEntry}
          color="gray2"
          name={isSecurityTextEntry ? 'eyeOn' : 'eyeOff'}
        />
      }
    />
  );
}
