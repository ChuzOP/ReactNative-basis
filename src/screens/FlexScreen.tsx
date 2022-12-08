import {StyleSheet, View} from 'react-native';
import React from 'react';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

export default FlexScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: 'orange',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    top: 50,
  },
  box2: {
    backgroundColor: 'purple',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
    right: -50,
  },
  box3: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderWidth: 2,
    borderColor: 'white',
  },
});
