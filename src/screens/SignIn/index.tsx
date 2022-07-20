import React, { useContext } from 'react';
import { Alert, StatusBar } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { RFValue } from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/icons/apple_icon.svg';
import GoogleSvg from '../../assets/icons/google-icon.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  Footer,
  FooterWrapper,
} from './styles';

export function SignIn(){
  const { signInWithGoogle } = useAuth();
  const navigation = useNavigation();

  async function handlesignInWithGoogle(){
    const CLIENT_ID = '1046876587992-f72sgdp8jd3324o9v0tqfir61mobkii6.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@gabriellennon/partiu';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');


    //Pegando o Token de autenticação
    //Get authentication token
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    //Iniciando fluxo de autenticacao
    //Start authentication
    const response = await AuthSession.startAsync({ authUrl });
    console.log(response);
    navigation.navigate('Inicio' as never, {} as never)
    // try {
    //     await signInWithGoogle();
    // } catch (error) {
    //     console.log(error);
    //     Alert.alert('Não foi possívelconectar a conta Google')
    // }
  }

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
                onPress={handlesignInWithGoogle}
              />
              <SignInSocialButton 
                title="Entrar com Apple"
                svg={AppleSvg}
                onPress={handlesignInWithGoogle}
              />
          </FooterWrapper>
        </Footer>
    </Container>
  );
}