import {StyleSheet, useWindowDimensions, View} from 'react-native';
import React from 'react';

const DimensionScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{
        ...styles.cajaMorada,
        width: width * 0.50,
        height: height * 0.50,
        }} />
    </View>
  );
};

export default DimensionScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    width: '50%',
    height: '50%',
  },
});
