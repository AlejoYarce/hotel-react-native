import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from '../pages/Home';
import Hotels from '../pages/Hotels';
import HotelDetails from '../pages/HotelDetails';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Hotel Finder',
      }
    },
    Hotels: {
      screen: Hotels,
      navigationOptions: {
        title: 'Hotels',
      }
    },
    HotelDetails: {
      screen: HotelDetails,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#48BBEC',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
