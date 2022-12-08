import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  onPress:  ((event: GestureResponderEvent) => void) | undefined;
  title: string;
}

const Fab = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Fab;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
