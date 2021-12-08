import React from 'react';
import { Alert, Platform } from 'react-native';
import { GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

interface Props {
  onLocationSelected: (data: {}, details: GooglePlaceDetail | null) => void;
}

export function Search(){
// export function Search({onLocationSelected}: Props){

  return (
    <GooglePlacesAutocomplete
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        // onLocationSelected(data, details)
      }}
      query={{
        key: 'AIzaSyANlH7daMYufxdqGzoiJOfMVfNBeeQx1KA',
        language: 'pt',
      }}
      placeholder="Para onde deseja ir?"
      // textInputProps={{
      //     autoCapitalize: "none",
      //     autoCorrect: false,
      //     placeholderTextColor: "#333",
      // }}
      // fetchDetails
      // enablePoweredByContainer={false}
      styles={{
          container: {
            position: "absolute",
            top: Platform.select({ ios: 60, android: 40 }),
            width: "100%"
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: "transparent",
            height: 54,
            marginHorizontal: 20,
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            height: 45,
            margin: 0,
            borderRadius: 6,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 20,
            paddingRight: 20,
            marginTop: 0,
            marginLeft: 0,
            marginRight: 0,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            borderWidth: 1,
            borderColor: "#DDD",
            fontSize: 18
          },
          listView: {
            borderWidth: 1,
            borderColor: "#DDD",
            backgroundColor: "#FFF",
            marginHorizontal: 20,
            elevation: 5,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { x: 0, y: 0 },
            shadowRadius: 15,
            marginTop: 10
          },
          description: {
            fontSize: 16
          },
          row: {
            padding: 20,
            height: 58
          }
      }}
    />
  );
}