import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {View, Header, Body, Title} from 'native-base';
import ItemFood from './ItemFood';
import firestore from '@react-native-firebase/firestore';

function Index({navigation}) {
  const [data, setData] = useState([]);

  const loadData = async () => {
    var arr = [];
    await firestore()
      .collection('food')
      .get()
      .then(result => {
        result.forEach(res => {
          console.log(res);
          const data = res.data();
          const food = {
            name: data.name,
            from: data.from,
            desc: data.desc,
            photo: data.photo,
            id: res.id,
          };
          arr.push(food);
        });
      });
    setData(arr);
    console.log(arr);
    this.arrayholder = arr;
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View>
      <Header>
        <Body>
          <Title style={{fontFamily: 'Inter-Bold'}}>
            Makanan Khas Indonesia
          </Title>
        </Body>
      </Header>
      <ScrollView style={{marginBottom: 75}}>
        {data.map((item, index) => {
          return (
            <ItemFood
              id={item.id}
              key={item._id}
              img={item.photo}
              title={item.name}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    color: '#1b1717',
    fontFamily: 'Inter-Medium',
  },
  container: {
    flex: 1,
  },
  buttonPrimary: {
    height: 30,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderWidth: 5,
  },
  sectionHeader: {
    paddingLeft: 15,
    fontWeight: '800',
    fontSize: 24,
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'Inter-Bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0080ff',
  },
  cardImage: {
    height: 180,
    width: 130,
  },
  loading: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,.2)',
  },
});
