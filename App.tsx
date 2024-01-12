import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{paddingHorizontal: 24}}>
        <View>
          <Text preset="headingLarge" italic>
            Coffstack
          </Text>
          <Button title="Entrar" marginBottom="s24" />
          <Button disabled title="Entrar" marginBottom="s24" />
          <Button preset="outline" title="Outline" marginBottom="s24" />
          <Button
            disabled
            preset="outline"
            title="Outline"
            marginBottom="s24"
          />
          <Button loading title="Loading" />
          <Icon name="eyeOn" color="error" />
          <Icon name="eyeOff" color="carrotSecondary" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
