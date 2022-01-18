import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/icons/apple_icon.svg';
import GoogleSvg from '../../assets/icons/google-icon.svg';
import LogoSvg from '../../assets/logo.svg';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Footer,
} from './styles';

export function SignIn(){
  return (
    <Container>
        <Header>
            <TitleWrapper>
                <Title>Organize {'\n'} suas viagens e {'\n'} aproveite o trajeto</Title>
                <LogoSvg 
                    width={RFValue(180)}
                    height={RFValue(180)}
                />
            </TitleWrapper>
        </Header>
        <Footer></Footer>
    </Container>
  );
}