import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function MoreInformation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Developed By</Text>
      <Text style={styles.name}>Joko Slamet</Text>
      <Text style={styles.text}>18050974030</Text>
      <Text style={styles.name}>Erlina Intan Pratiwi</Text>
      <Text style={styles.text}>18050974014</Text>
    </View>
  );
}

export default MoreInformation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDB',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'center',
  },
  title: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontStyle: 'italic',
    color: 'black',
    marginBottom: 25,
  },
});
