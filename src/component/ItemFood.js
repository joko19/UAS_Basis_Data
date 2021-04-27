import React from 'react';
import {Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import {dataUrl} from './../config/config';
import Carousel from 'react-native-snap-carousel';

export default function ItemFood(props) {
  const handleToDetail = () => {
    props.navigation.navigate('detailFood', {
      id: props.id,
    });
  };
  return (
    <TouchableOpacity onPress={handleToDetail}>
      <View style={styles.containerItem}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.imgPost} source={{uri: dataUrl + props.img}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'column',
              flex: 0.95,
              justifyContent: 'center',
            }}></View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    marginBottom: 25,
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
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    margin: 10,
  },
});
