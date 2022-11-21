import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Search = ({placeholder}) => {
  return (
    <GooglePlacesAutocomplete
      query={{
        key: 'url',
        language: 'en',
      }}
      onPress={(data, details = null) => {
        console.log(data.description);
        const city = data.description.split(',')[0];
        cityHandler(city);
      }}
      minLength={4}
      autoFocus={true}
      listViewDisplayed="auto"
      returnKeyType={'search'}
      fetchDetails={true}
      placeholder={placeholder}
      style={styles.searchBorder}
      // renderLeftButton={() => (
      //   <View style={styles.searchIcon}>
      //    <Image/>
      //   </View>
      // )}
      // renderRightButton={() => (
      //   <View style={styles.searchRight}>
      //     <AntDesign name="clockcircle" size={11} style={styles.antdesign} />
      //     <Text>Search</Text>
      //   </View>
      // )}
    />
  );
};

export default Search;
const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    borderEndColor:'red'
  },
  searchView: {
    top: 0,
    position: 'absolute',
    marginTop: 10,
    flexDirection: 'row',
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  searchBorder: {
    textInput: {
      backgroundColor: 'black',

      borderRadius: 20,
      fontWeight: '400',
      marginTop: 7,
    },
    textInputContainer: {
      backgroundColor: 'green',

      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 5,
    },
  },
  searchIcon: {
    margin: 10,
  },
  searchRight: {
    flexDirection: 'row',
    marginHorizontal: 8,
    backgroundColor: '#eee',
    borderRadius: 20,
    alignItems: 'center',
    flex: 0.4,
    justifyContent: 'center',
  },
  antdesign: {
    marginRight: 6,
  },
});
