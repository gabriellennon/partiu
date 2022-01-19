import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, StatusBar } from 'react-native';

import {
  Container,
  HeaderBack,
  TitleBack
} from './styles';
import { Search } from '../../components/Search';
import { useNavigation } from '@react-navigation/native';
import { BackButton } from '../../components/BackButton';

export function Home(){
  const navigation = useNavigation();
  
  //Seta a localidade inicial do mapa
  const [mapRegion, setmapRegion] = useState({
    latitude: -15.748182,
    longitude: -47.753353,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  });

  //Seta a localidade do marcador
  const [mapRegionMarker, setmapMarker] = useState({
    latitude: -15.748182,
    longitude: -47.753353,
  });

  function handleBack(){
    // navigation.goBack();
    navigation.navigate('Inicio' as never, {} as never)
  }

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <HeaderBack>
        <BackButton onPress={handleBack} />
        <TitleBack>Voltar</TitleBack>
      </HeaderBack>
      <MapView 
        style={styles.map} 
        region={mapRegion}
        showsUserLocation={true}
      >
        <Marker coordinate={mapRegionMarker} title='Olha eu' description="Ver como passar o local de search pra casa" />
      </MapView>
      <Search placeholder="Para onde deseja ir?" />
    </Container>
  );
}
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});