import {View, Text, StyleSheet, Dimensions,StatusBar} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Search from '../components/Search';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const ASPECT_RATIO = deviceWidth / deviceHeight;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 40.76711,
  longitude: -73.979704,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};
const MapScreens = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{width: deviceWidth, height: deviceHeight}}
        initialRegion={INITIAL_POSITION}
      />
      <View style={styles.searchContainer}>
        <Search placeholder={'Origin'} />
        <View>
          <Search placeholder={'Destination'} />
        </View>
      </View>
    </View>
  );
};

export default MapScreens;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    padding: 8,
    borderRadius: 8,
    top: StatusBar.currentHeight,
  },
});
