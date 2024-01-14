import React from 'react';
import {Text} from '../../../components/Text/Text';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;
export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>

      <Text preset="paragraphLarge" marginBottom="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <Box>
        <TextInput
          errorMessage="Menssagem de erro"
          label="E-mail"
          placeholder="Digite seu e-mail"
          boxProps={{mb: 's20'}}
        />
      </Box>

      <Box>
        <PasswordInput
          label="Senha"
          placeholder="Digite sua senha"
          boxProps={{mb: 's10'}}
        />
      </Box>

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button mt="s48" title="Entrar" />
      <Button
        onPress={navigateToSignUpScreen}
        mt="s12"
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
