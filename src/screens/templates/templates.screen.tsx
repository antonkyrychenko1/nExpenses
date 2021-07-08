import { NavigationProp } from '@react-navigation/native';
import { NavigationParameters } from '@app';
import React, { FC } from 'react';
import { View } from 'react-native';
import templatesStyles from '@screens/templates/templates.styles';
import TemplatesList from '@screens/templates/TemplatesList/TemplatesList';
import AddTemplateModal from '@screens/templates/AddTemplateModal/AddTemplateModal';

type TemplatesScreenNavigationProp = NavigationProp<NavigationParameters, 'Templates'>;

const TemplatesScreen: FC = () => {
  return (
    <View style={templatesStyles.root}>
      <TemplatesList />
      <AddTemplateModal />
    </View>
  );
};

export default TemplatesScreen;
