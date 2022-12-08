import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Fab from '../components/Fab';

const ContadorScreen = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <View style={styles.buttonsContainer}>
        <Fab onPress={() => setCounter(counter - 1)} title="-" />
        <Fab onPress={() => setCounter(counter + 1)} title="+" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    position: 'absolute',
    bottom: 25,
  },
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

export default ContadorScreen;
