import React from 'react';

import {
  Container,
  Header,
  TitleAction,
  TextAction,
} from './styles';
import { 
    Keyboard, 
    Modal, 
    TouchableWithoutFeedback,
    Alert,
    StatusBar
} from 'react-native';
import { BackButton } from '../../components/BackButton';
import { useNavigation } from '@react-navigation/native';

export function AddTransaction(){
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <StatusBar barStyle="light-content" />
                <Header>
                    <TitleAction>
                        <BackButton onPress={handleBack} />
                        <TextAction>Orçamento e gastos</TextAction>
                    </TitleAction>
                </Header>
            </Container>
        </TouchableWithoutFeedback>
  );
}