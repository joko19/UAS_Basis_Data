import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListFood from './src/component/ListFood';
import DetailFood from './src/component/DetailFood';
import MoreInformation from './src/component/MoreInformation';
import AboutApp from './src/component/AboutApp';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import IntroScreen from './src/component/IntroScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerVisible: false,
        }}>
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="listFood" component={TabBar}/>
        {/* <Stack.Screen name="moreInformation" component={MoreInformation}/>
        <Stack.Screen name="aboutApp" component={AboutApp}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

function Feed() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerVisible: false,
      }}>
      <Stack.Screen name="listFood" component={ListFood} />
      <Stack.Screen name="detailFood" component={DetailFood} />
    </Stack.Navigator>
  );
}

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'About') {
            // iconName = focused
            //   ? 'ios-code-slash-outline'
            //   : 'ios-code-slash-sharp';
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === 'More Info') {
            iconName = focused
              ? 'information-circle-sharp'
              : 'information-circle-outline';
          }

          // You can return any component that you like here!
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{paddingTop: 5}}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: '#18191A',
        inactiveTintColor: 'gray',
        style: {paddingBottom: 5, height: 55},
      }}>
      <Tab.Screen name="Home" component={Feed} />
      <Tab.Screen name="About" component={AboutApp} />
      <Tab.Screen name="More Info" component={MoreInformation} />
    </Tab.Navigator>
  );
}
