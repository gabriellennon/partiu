import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from '@expo-google-fonts/inter';
import { RobotoSlab_500Medium, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import Routes from './src/routes';
import AppLoading from 'expo-app-loading';
import { SignIn } from './src/screens/SignIn';
import { AuthProvider } from './src/hooks/auth';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    RobotoSlab_700Bold
  });

    //verificando se a fonta já está carregada
    if (!fontsLoaded)
    //enquanto a fonte nao foi carregada mostra a página de splash (logo)
      return <AppLoading />

    return (
      <ThemeProvider theme={theme}>
          <AuthProvider>
              <Routes/>
          </AuthProvider>
      </ThemeProvider>
    );
}
