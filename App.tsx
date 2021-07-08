import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/home.screen';
import DetailsScreen from '@screens/details/dedails.screen';
import { Provider as StoreProvider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import store from '@store/index';
import TemplatesScreen from '@screens/templates/templates.screen';

export type NavigationParameters = {
  Home: undefined;
  Details: undefined;
  Templates: undefined;
};

const Tab = createBottomTabNavigator<NavigationParameters>();

const App: FC = () => {
  return (
    <PaperProvider>
      <StoreProvider store={store}>
        <NavigationContainer>
          <Tab.Navigator initialRouteName='Home'>
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Details' component={DetailsScreen} />
            <Tab.Screen name='Templates' component={TemplatesScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </StoreProvider>
    </PaperProvider>
  );
};

export default App;
