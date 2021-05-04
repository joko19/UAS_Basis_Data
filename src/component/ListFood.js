import React, {Component} from 'react';
import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  SectionList,
} from 'react-native';
import {
  View,
  Container,
  Header,
  Item,
  Icon,
  Input,
  Button,
  Text,
  Row,
} from 'native-base';
import apiFood from './../config/endpoint';
import ItemFood from './ItemFood';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filterData: [],
      search: '',
      loading: false,
      animating: true,
    };
    this.arrayholder = [];
    // this.handleClick = this.handleClick.bind(this);
  }

  closeActivityIndicator = () =>
    setTimeout(
      () =>
        this.setState({
          animating: false,
        }),
      60000,
    );

  navigate = this.props.navigation;

  loadData = async () => {
    const response = await apiFood.index();
    this.setState({
      data: response.data,
    });

    this.arrayholder = response.data;
  };

  handleSearch = async data => {
    const response = await apiFood.search(data);
    this.setState({
      data: response.data,
    });
  };

  onChange = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
    this.handleSearch(e.target.value);
  };

  searchFilterFunction = text => {
    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({data: newData});
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
    this.closeActivityIndicator();
  }

  componentDidMount() {
    if (this.loadData()) {
      this.setState({
        loading: false,
      });
    }
  }

  renderHeader = () => {
    return (
      <Header searchBar rounded style={{backgroundColor: 'white'}}>
        <Item style={{backgroundColor: '#F5F4F4'}}>
          <Input
            style={styles.input}
            // value={this.state.search}
            autoCorrect={false}
            onChangeText={text => this.searchFilterFunction(text)}
            // autoCompleteType={'off'}
            placeholder="Search your food..."
          />
        </Item>
        <Button transparent>
          <Text>Search</Text>
        </Button>
      </Header>
    );
  };

  render() {
    const dataList = [
      {
        title: 'From gresik',
        horizontal: true,
        data: this.state.data.filter(item => item.from == 'GRESIK'),
      },
      {
        title: 'All around you',
        horizontal: true,
        data: this.state.data.filter(item => item.from !== 'GRESIK'),
      },
    ];

    return (
      <View style={styles.container}>
        <this.renderHeader></this.renderHeader>
        <SafeAreaView style={{flex: 1}}>
          <SectionList
            contentContainerStyle={{}}
            stickySectionHeadersEnabled={false}
            sections={dataList}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({section}) => (
              <>
                <View style={{marginTop:15, backgroundColor:'white', paddingBottom:15}}>
                  <Text style={styles.sectionHeader}>{section.title}</Text>
                  {section.horizontal ? (
                    <FlatList
                      horizontal
                      data={section.data}
                      renderItem={({item}) => (
                        <ItemFood
                          id={item._id}
                          img={item.cover}
                          title={item.name}
                          navigation={this.navigate}
                        />
                      )}
                      showsHorizontalScrollIndicator={false}
                    />
                  ) : null}
                </View>
              </>
            )}
            renderItem={({item, section}) => {
              if (section.horizontal) {
                return null;
              }
              return (
                <ItemFood
                  id={item._id}
                  img={item.cover}
                  title={item.name}
                  navigation={this.navigate}
                />
              );
            }}
          />
        </SafeAreaView>
      </View>
    );
  }
}

export default Menu;

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
    paddingLeft:15,
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
