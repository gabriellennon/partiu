import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';

import WorldSvg from '../../assets/icons/worldwide.svg';

import {
  Container
} from './styles';

export function Splash(){
    const navigation = useNavigation();

    function startApp(){
        navigation.navigate("Inicio" as never, {} as never)
    }
    
    useEffect(() =>{
        startApp();
    },[]);

    
  return (
    <Container>
        <WorldSvg 
          width={140}
          height={140}
        />
    </Container>
  );
}