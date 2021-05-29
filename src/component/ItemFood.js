import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {View} from 'native-base';
import Carousel from 'react-native-snap-carousel';

export default function ItemFood(props) {
  console.log(props.id);
  const handleToDetail = () => {
    props.navigation.navigate('detailFood', {
      id: props.id,
    });
  };
  return (
    <TouchableWithoutFeedback onPress={handleToDetail}>
      <View style={styles.containerItem}>
        <Image style={styles.imgPost} source={{uri: 'https://onwisata.com/' + props.img}} />
        <Text style={styles.title}>{props.title}</Text>
        {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              flex: 0.95,
              justifyContent: 'center',
            }}/>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: 25,
    backgroundColor: '#000000'
  },
  username: {
    flexWrap: 'wrap',
    margin: 5,
    alignSelf: 'center',
    fontSize: 16,
  },
  cover: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
  },
  imgPost: {
    aspectRatio: 1.5,
    opacity: 0.5
  },
  title: {
    fontSize: 24,
    fontWeight:'bold',
    color:'white',
    marginTop: -50,
    marginBottom: 18,
    marginLeft: 20,
  },
});
