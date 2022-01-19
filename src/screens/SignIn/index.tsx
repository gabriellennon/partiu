import React, { useContext } from 'react';
import { Alert, StatusBar } from 'react-native';
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