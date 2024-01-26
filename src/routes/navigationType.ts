import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from './AppStack';
import {AppTabBottomTabParamList} from './AppTabNavigator';
import {AuthStackParamList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppScreenProps<RoutName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RoutName>;

export type AuthScreenProps<RoutName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RoutName>;

export type AppTabScreenProps<
  RouteName extends keyof AppTabBottomTabParamList,
> = CompositeScreenProps<
  BottomTabScreenProps<AppTabBottomTabParamList, RouteName>,
  NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
>;
