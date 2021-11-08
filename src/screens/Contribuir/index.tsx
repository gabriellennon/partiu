import React from 'react';

import {
  Container,
  Header,
  Title,
  Description,
  TitlePage,
  ContentBox,
  TitleCard,
  DescriptionCard,
  CardButton,
} from './styles';
import TravelSvg from '../../assets/travel.png';
import PetrolIcon from '../../assets/petrol.png';
import { Alert, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function Contribuir() {
  function handleClickCard(){
    Alert.alert('quer compartilhar?')
  }

  return (
    <Container>
      <Header>
        <Title>compartilhe experiencias!</Title>
        <Description>Ajude-nos compartilhando  suas experiencias e locais</Description>
      </Header>
      <TitlePage>O que você quer compartilhar?</TitlePage>

      <CardButton onPress={handleClickCard}>
        <Image source={TravelSvg} />
        <ContentBox>
          <TitleCard>Locais</TitleCard>
          <DescriptionCard>Compartilhe locais que nossos {`\n`} amigos de estrada podem visitar!</DescriptionCard>
        </ContentBox>
        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
      </CardButton>

      <CardButton onPress={handleClickCard}>
        <Image source={PetrolIcon} />
        <ContentBox>
          <TitleCard>Preços</TitleCard>
          <DescriptionCard>Compartilhe os preços da gasolina, {`\n`} para sempre estarmos atualizados</DescriptionCard>
        </ContentBox>
        <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
      </CardButton>
    </Container>
  );
}