import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Image } from 'react-native';
import { More } from '../More';
import TravelPng from '../../assets/travelImage.png';
import ArrowSvg from '../../assets/icons/arrow-icon.svg';

import {
  Container,
  Title,
  ImageContainer,
  SubTitle,
  ContentHome,
  InitialButton,
  ButtonsContainer,
  ContentBox,
  TitleButton,
  DescriptionButton,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export function Inicio(){
  const navigation = useNavigation();
  
  function handleClickButton(){
    
    // navigation.navigate('Mais')
  }

  return (
    <Container>
      <ImageContainer>
        <Image  source={TravelPng}/>
      </ImageContainer>
      <ContentHome>
        <Title>Partiu?!</Title>
        <SubTitle>Como deseja começar?</SubTitle>

        <ButtonsContainer>
          <InitialButton onPress={handleClickButton}>
            <ContentBox>
              <TitleButton>nova viagem</TitleButton>
              <DescriptionButton>Crie uma nova viagem</DescriptionButton>
            </ContentBox>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#F0F0F0" />
          </InitialButton>
          <InitialButton onPress={handleClickButton}>
            <ContentBox>
              <TitleButton>Viagens criadas</TitleButton>
              <DescriptionButton>Gerencie ou inicie uma viagem criada</DescriptionButton>
            </ContentBox>
            <MaterialIcons name="arrow-forward-ios" size={24} color="#F0F0F0" />
          </InitialButton>
        </ButtonsContainer>
      </ContentHome>
    </Container>
  );
}