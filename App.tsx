import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';
import {Box} from './src/components/Box/Box';
import {TextInput} from './src/components/TextInput/TextInput';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
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
            <TextInput
              label="Senha"
              placeholder="Digite sua senha"
              boxProps={{mb: 's10'}}
              RightComponent={<Icon color="gray2" name="eyeOn" />}
            />
          </Box>

          <Text color="primary" preset="paragraphSmall" bold>
            Esqueci minha senha
          </Text>

          <Button mt="s48" title="Entrar" />
          <Button mt="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
