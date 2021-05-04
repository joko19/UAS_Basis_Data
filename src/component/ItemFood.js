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
      <View style={styles.item}>
        <Image
          source={{uri: dataUrl + props.img}}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Text style={styles.itemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  itemPhoto: {
    borderRadius: 15,
    width: 200,
    height: 200,
  },
  itemText: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: 'Inter-Regular'
  },
});
