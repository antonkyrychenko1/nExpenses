import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import commonStyles from '@common/styles';
import { NavigationStackParameters } from '@app';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store/index';
import { AppState } from '@store/root.reducer';
import { homeActions } from '@slices/home.slice';

type HomeScreenNavigationProp = StackNavigationProp<NavigationStackParameters, 'Home'>;

const HomeScreen: FC<{ navigation: HomeScreenNavigationProp }> = ({ navigation }) => {
  const count = useSelector<AppState>((state) => state.home.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={commonStyles.container}>
      <Text>Home Screen</Text>
      <Text>Count: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(homeActions.increment())} />
      <Button title='Decrement' onPress={() => dispatch(homeActions.decrement())} />
      <Button title='Go do Details' onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

export default HomeScreen;
