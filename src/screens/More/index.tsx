import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { CardMore } from '../../components/CardMore';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container, 
  Header,
  UserInfo,
  Photo,
  User,
  UserWrapper,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  Content,
  Description,
  ContainerCards,
  Placetrip
} from './styles';

interface AsyncData {
  name: string;
  value: string;
}

export function More() {
  const navigation = useNavigation();
  const dataKey = '@partiu:newTravel';
  const [dataObject, setDataObject] = useState<AsyncData>();
  
  function handleGoClickButton(route: string){
    
    navigation.navigate(route as never, {} as never)
  }

  useEffect(() => {
    async function loadData(){
      const dataResponse = await AsyncStorage.getItem(dataKey);
      //Coloco que o ! pra dizer que sempre vai ter alguma coisa
      console.log(JSON.parse(dataResponse!));
      setDataObject(JSON.parse(dataResponse!))
    }

    loadData();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri:'https://avatars.githubusercontent.com/u/57332512?v=4' }} />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Gabriel</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => navigation.navigate('SignIn' as never, {} as never)}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <Content>
        <Description>Nome da viagem</Description>
        <Placetrip>{dataObject?.name}</Placetrip>

        <ContainerCards>
          <CardMore
            IconHeader='home'
            TitleButton='Minha casa'
            onPress={() => {}}
          />
          <CardMore
            IconHeader='location-on'
            TitleButton='Minhas viagens'
            onPress={() => {}}
          />
          <CardMore
            IconHeader='monetization-on'
            TitleButton='Orçamento e gastos'
            onPress={() => handleGoClickButton('Budget')}
          />
          <CardMore
            IconHeader='check-circle'
            TitleButton='Checklist'
            onPress={() => handleGoClickButton('Checklist')}
          />
        </ContainerCards>
      </Content>
    </Container>
  );
}