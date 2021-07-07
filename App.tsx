import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store, { AppDispatch } from 'store/index';
import { AppState } from 'store/root.reducer';
import { homeActions } from 'slices/home.slice';

const HomeScreen: FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const count = useSelector<AppState>((state) => state.home.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(homeActions.increment())} />
      <Button title='Decrement' onPress={() => dispatch(homeActions.decrement())} />
      <Button title='Go do Details' onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const DetailsScreen: FC<{ navigation: DetailsScreenNavigationProp }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button title='Go do Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

type NavigationStackParameters = {
  Home: undefined;
  Details: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<NavigationStackParameters, 'Home'>;
type DetailsScreenNavigationProp = StackNavigationProp<NavigationStackParameters, 'Details'>;

const Tab = createBottomTabNavigator<NavigationStackParameters>();

const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home'>
          <Tab.Screen name='Home' component={HomeScreen} />
          <Tab.Screen name='Details' component={DetailsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
