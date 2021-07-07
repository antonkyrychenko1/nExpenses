import React, { FC } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeScreen: FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Details' component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
