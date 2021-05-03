import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {View, Text, Button} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Menu({navigation}) {
  const toDetail = params => {
    navigation.navigate(params);
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Image style={styles.image} source={require('./../img/SVGFood.png')} />
        <Text style={styles.bold}>Find your food</Text>
        <Text style={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit.
        </Text>
      </View>
      <Button
        rounded
        block
        style={styles.button}
        onPress={() => toDetail('listFood')}>
        <Text style={styles.title}>Get Started</Text>
      </Button>
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  bold : {
    fontFamily: 'Inter-Bold',
    textAlign:'center',
    marginVertical:5,
  },
  p: {
    fontFamily: 'Inter-Regular',
    textAlign:'center',
    lineHeight:22.5,
    marginVertical:5,
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    justifyContent: 'center',
    padding: 15,
    flexDirection: 'column',
    flex: 1
  },
  centerView: {
    bottom: 35,
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 15,
    width: '100%',
  },
  title: {
    fontFamily: 'Inter-Bold',
    textTransform:'capitalize',
    letterSpacing: 0.5,
    color: 'white',
    fontSize:16,
  },
  button: {
    paddingVertical:25,
    paddingHorizontal:15,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 35,
    width: '100%',
    backgroundColor: '#1CCD4D',
  },
  image: {
    // marginVertical: 20,
  },
});
