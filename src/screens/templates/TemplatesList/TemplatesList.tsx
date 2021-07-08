import React, { FC } from 'react';
import { List } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { AppState } from '@store/root.reducer';
import { ScrollView } from 'react-native';

const TemplatesList: FC = () => {
  const templates = useSelector((state: AppState) => state.templates.list);

  return (
    <ScrollView>
      {templates.map((template) => (
        <List.Item title={template.name} key={template.id} left={(props) => <List.Icon {...props} icon='food' />} />
      ))}
    </ScrollView>
  );
};

export default TemplatesList;
