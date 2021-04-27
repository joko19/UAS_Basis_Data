import React, {Component} from 'react';
import {
  ScrollView,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
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
} from 'native-base';
import apiFood from './../config/endpoint';
import ItemFood from './ItemFood';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
    };
    this.arrayholder = [];
    // this.handleClick = this.handleClick.bind(this);
  }

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
    this.loadData();
  }

  // componentDidUpdate() {
  //   this.loadData();
  // }

  renderHeader = () => {
    return (
      <Header searchBar rounded style={{backgroundColor:'white'}}>
        <Item style={{backgroundColor:'#F5F4F4'}}>
          <Input
            style={{paddingLeft:15, color:'#1b1717'}}
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
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <ItemFood
              id={item._id}
              key={item._id}
              img={item.cover}
              title={item.name}
              navigation={this.navigate}
            />
          )}
          keyExtractor={item => item._id}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
}

export default Menu;

// function Index({navigation}) {
//   const [data, setData] = useState([]);

//   const loadData = async () => {
//     const response = await apiFood.index();
//     setData(response.data);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <View>
//       <ScrollView>
//         {data.map((item, index) => {
//           return (
//             <ItemFood
//               id={item._id}
//               key={item._id}
//               img={item.cover}
//               title={item.name}
//               navigation={navigation}
//             />
//           );
//         })}
//       </ScrollView>
//     </View>
//   );
// }

// export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  buttonPrimary: {
    height: 30,
    padding: 5,
    margin: 5,
    borderRadius: 10,
    borderWidth: 5,
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
});
