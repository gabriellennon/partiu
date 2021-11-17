import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

import {
  Container
} from './styles';

export function Home(){
  return (
    <Container>
      <MapView style={styles.map} />
    </Container>
  );
}
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});