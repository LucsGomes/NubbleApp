import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;
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
