import React, { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import commonStyles from '@common/styles';
import { NavigationStackParameters } from '@app';

type DetailsScreenNavigationProp = StackNavigationProp<NavigationStackParameters, 'Details'>;

const DetailsScreen: FC<{ navigation: DetailsScreenNavigationProp }> = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Text>Details Screen</Text>
      <Button title='Go do Home' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default DetailsScreen;