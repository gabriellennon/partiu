import React from 'react';
import { StatusBar } from 'react-native';

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
} from './styles';

export function More() {
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
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <Content>
        <Description>Seu nível</Description>
      </Content>
    </Container>
  );
}