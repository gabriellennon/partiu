import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';

import {
    Container,
    Header,
    TitleAction,
    TextAction,
} from './styles';

export function MyTravel(){
    const navigation = useNavigation();

    function handleBack(){
        navigation.goBack();
    }
    
  return (
    <Container>
        <StatusBar barStyle="light-content" />
            <Header>
                <TitleAction>
                    <BackButton onPress={handleBack} />
                    <TextAction>Viagens realizadas</TextAction>
                </TitleAction>
            </Header>
    </Container>
  );
}