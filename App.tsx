import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/home.screen';
import DetailsScreen from '@screens/details/dedails.screen';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from '@store/index';

export type NavigationStackParameters = {
  Home: undefined;
  Details: undefined;
};

const Tab = createBottomTabNavigator<NavigationStackParameters>();

const App: FC = () => {
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Details' component={DetailsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </PaperProvider>
  );
};

export default App;
