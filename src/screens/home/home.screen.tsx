import React, { FC } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import commonStyles from '@common/styles';
import { NavigationStackParameters } from '@app';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@store/index';
import { AppState } from '@store/root.reducer';
import { expensesActions } from '@slices/exprenses.slice';
import Expense from '@models/expense';
import uuid from '@utils/uuid-gemerator';

type HomeScreenNavigationProp = StackNavigationProp<NavigationStackParameters, 'Home'>;

const HomeScreen: FC<{ navigation: HomeScreenNavigationProp }> = ({}) => {
  const [value, onChangeText] = React.useState('');

  const expenses = useSelector((state: AppState) => state.expenses.expenseList);

  const dispatch = useDispatch<AppDispatch>();
  const getRowText = (e: Expense): string => e.id + ' ' + e.amount;

  const displayExpenses = () => {
    return expenses.map((e) => <Text key={e.id}>{getRowText(e)}</Text>);
  };

  return (
    <View style={commonStyles.container}>
      <Text>Home Screen</Text>
      <TextInput keyboardType='numeric' onChangeText={(text) => onChangeText(text)} value={value} />
      <Button
        title='Add expense'
        onPress={() => dispatch(expensesActions.add({ id: uuid.generate(), amount: +value }))}
      />
      {displayExpenses()}
    </View>
  );
};

export default HomeScreen;
