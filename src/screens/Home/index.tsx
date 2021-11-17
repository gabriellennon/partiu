import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import {
  Container
} from './styles';

export function Home(){
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

  return (
    <Container>
      <MapView 
        style={styles.map} 
        region={mapRegion}
        showsUserLocation={true}
      >
        <Marker coordinate={mapRegionMarker} title='Olha eu' description="Ver como passar o local de search pra casa" />
      </MapView>
    </Container>
  );
}
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});