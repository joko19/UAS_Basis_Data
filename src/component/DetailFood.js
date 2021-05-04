import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import apiFood from './../config/endpoint';
import {dataUrl} from './../config/config';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Subtitle,
  Button,
  Content,
  Icon,
} from 'native-base';

function DetailFood(props) {
  const id = props.route.params.id;
  const [cover, setCover] = useState('');
  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [desc, setDesc] = useState('');

  const loadData = async () => {
    const getData = await apiFood.detail(id);
    setName(getData.data.response[0].name);
    setCover(getData.data.response[0].cover);
    setFrom(getData.data.response[0].from);
    setDesc(getData.data.response[0].desc);
  };

  const handleBack = () => {
    props.navigation.navigate('listFood');
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent onPress={handleBack}>
            <Icon name="chevron-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{fontFamily: 'Inter-Bold'}}>Detail Food</Title>
        </Body>
      </Header>
      <ScrollView>
        <Image style={styles.cover} source={{uri: dataUrl + cover}} />
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
