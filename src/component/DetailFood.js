import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Button,
  Icon,
} from 'native-base';
import firestore from '@react-native-firebase/firestore';

function DetailFood(props) {
  const id = props.route.params.id;
  const [cover, setCover] = useState('');
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [desc, setDesc] = useState('');

  const loadData = async () => {
    await firestore()
    .collection('food')
    .doc(id)
    .get()
    .then(result => {
      console.log(result.data())
      setName(result.data().name);
      setCover(result.data().photo);
      setFrom(result.data().from);
      setDesc(result.data().desc);
    });
  };

  useEffect(() => {
    loadData();
  }, []);
  
  const handleBack = () => {
    props.navigation.navigate('listFood');
  };


  return (
    <Container>
      <Header>
        <Body>
          <Title style={{fontFamily: 'Inter-Bold'}}>Detail Food</Title>
        </Body>
      </Header>
      <ScrollView>
        <Image style={styles.cover} source={{uri: 'https://onwisata.com' + cover}} />
        <View style={styles.detail}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.from}>{from}</Text>
          <Text style={styles.content}>{desc}</Text>
        </View>
      </ScrollView>
    </Container>
  );
}

export default DetailFood;

const styles = StyleSheet.create({
  detail: {
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5,
  },
  cover: {
    aspectRatio: 1.5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  from: {
    fontStyle: 'italic',
    marginBottom: 20,
  },
  content: {
    color: '#212529',
    marginTop: 5,
    lineHeight: 30,
  },
});
