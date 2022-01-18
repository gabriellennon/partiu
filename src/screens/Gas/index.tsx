import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Modal, StatusBar } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { Search } from '../../components/Search';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Header,
  TitleAction,
  TextAction,
  ContentDescription,
  DescriptionText,
  ViewModal,
  ModalView,
  TitleModal,
  DescriptionModal,
  ButtonModal,
  ActionButton,
  ButtonNewLocaly
} from './styles';
import Check from '../../assets/icons/check.svg';

export function Gas() {
  const [description, setDescription] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack();
  }

  function navigationHome(){
    navigation.navigate("Home" as never, {} as never)
  }

  function registerGas(){
    console.log(description);
    if(description !== ''){
        setModalActive(true);
    } else {
        Alert.alert('Atenção!', 'Preencha todos os campos.')
    }
  }

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <TitleAction>
          <BackButton color="#50555A" onPress={handleBack} />
          <TextAction>Selecione o local</TextAction>
        </TitleAction>
      </Header>
      <Search placeholder="Insira o nome do local" />
      <ContentDescription>
        <DescriptionText>Informe os valores</DescriptionText>
      </ContentDescription>

      <Modal
        visible={modalActive}
        animationType='fade'
        transparent={true}
        onRequestClose={() => setModalActive(false)}
      >
        <ViewModal>
          <ModalView>
            <TitleModal>Ótimo trabalho!</TitleModal>
            <Check />
            <DescriptionModal>Obrigado por compartilhar sua experiencia conosco!</DescriptionModal>
            <ActionButton onPress={navigationHome}>Voltar ao início</ActionButton>
          </ModalView>
        </ViewModal>
      </Modal>

      <ButtonNewLocaly onPress={registerGas}>
        <MaterialIcons
          name="check"
          size={32}
          color='#FFF'
        />
      </ButtonNewLocaly>
    </Container>
  );
}