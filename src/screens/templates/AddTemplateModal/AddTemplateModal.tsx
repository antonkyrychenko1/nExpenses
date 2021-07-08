import React, { FC, useState } from 'react';
import templatesStyles from '@screens/templates/templates.styles';
import { Button, FAB, HelperText, Modal, Portal, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/index';
import { templatesActions } from '@slices/templates.slice';
import uuid from '@utils/uuid-gemerator';

const AddTemplateModal: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [expanseAmount, setExpanseAmount] = useState(0);
  const [expanseAmountText, setExpanseAmountText] = useState('');
  const [expanseAmountError, setExpanseAmountError] = useState('');

  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Portal>
        <Modal visible={isVisible} onDismiss={() => setIsVisible(false)}>
          <TextInput
            label='Name'
            mode='outlined'
            value={name}
            onChangeText={(text) => {
              setName(text);
              setNameError(text ? '' : 'Name is required');
            }}
            error={!!nameError}
          />
          <HelperText type='error' visible={!!nameError}>
            {nameError}
          </HelperText>
          <TextInput
            label='Expanse Amount'
            mode='outlined'
            keyboardType='numeric'
            value={expanseAmountText}
            onChangeText={(text) => {
              const amount = parseFloat(text);
              if (!Number.isNaN(amount)) {
                setExpanseAmount(amount);
              }

              setExpanseAmountText(text);
              setExpanseAmountError(
                text ? (amount ? '' : 'Expanse Amount has invalid format') : 'Expanse Amount is required',
              );
            }}
            error={!!expanseAmountError}
          />
          <HelperText type='error' visible={!!expanseAmountError}>
            {expanseAmountError}
          </HelperText>
          <Button
            disabled={!!nameError || !!expanseAmountError || !name || !expanseAmountText}
            onPress={() => {
              dispatch(
                templatesActions.addTemplate({
                  id: uuid.generate(),
                  name: name,
                  expanseAmount: expanseAmount,
                }),
              );

              setIsVisible(false);
              setName('');
              setExpanseAmount(0);
              setExpanseAmountText('');
            }}
          >
            Submit
          </Button>
        </Modal>
      </Portal>
      <FAB
        icon='plus'
        small
        style={templatesStyles.addIcon}
        onPress={() => {
          setIsVisible(true);
        }}
      />
    </>
  );
};

export default AddTemplateModal;
