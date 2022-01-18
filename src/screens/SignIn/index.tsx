import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/icons/apple_icon.svg';
import GoogleSvg from '../../assets/icons/google-icon.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Footer,
  FooterWrapper,
} from './styles';

export function SignIn(){
  return (
    <Container>
        <StatusBar barStyle="light-content" />
        <Header>
            <TitleWrapper>
                <Title>Organize {'\n'} suas viagens e {'\n'} aproveite o trajeto</Title>
                <LogoSvg 
                    width={RFValue(180)}
                    height={RFValue(180)}
                />
            </TitleWrapper>
        </Header>
        <Footer>
          <FooterWrapper>
              <SignInSocialButton 
                title="Entrar com Google"
                svg={GoogleSvg}
              />
              <SignInSocialButton 
                title="Entrar com Apple"
                svg={AppleSvg}
              />
          </FooterWrapper>
        </Footer>
    </Container>
  );
}