import { NavigationProp } from '@react-navigation/native';
import { NavigationParameters } from '@app';
import React, { FC } from 'react';
import { View } from 'react-native';
import { FAB } from 'react-native-paper';
import templatesStyles from '@screens/templates/templates.styles';
import TemplatesList from '@screens/templates/TemplatesList/TemplatesList';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/index';
import { templatesActions } from '@slices/templates.slice';
import uuid from '@utils/uuid-gemerator';

type TemplatesScreenNavigationProp = NavigationProp<NavigationParameters, 'Templates'>;

const TemplatesScreen: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={templatesStyles.root}>
      <TemplatesList />
      <FAB
        icon='plus'
        small
        style={templatesStyles.addIcon}
        onPress={() =>
          dispatch(
            templatesActions.addTemplate({
              id: uuid.generate(),
              expanseAmount: 10,
              name: 'Hello',
            }),
          )
        }
      />
    </View>
  );
};

export default TemplatesScreen;
