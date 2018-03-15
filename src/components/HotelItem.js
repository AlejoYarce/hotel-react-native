import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import { Rating } from 'react-native-ratings';
import config from '../../config.json';

const hotelItem = props => (
  < TouchableHighlight
    onPress={props.onPressHotel}
    underlayColor='#dddddd' >
    <View>
      <View style={styles.rowContainer}>
        <Image style={styles.thumb}
          source={{ uri: `${config.apiUrl}/img/${props.hotel.image}` }} />
        <View style={styles.textContainer}>
          <Text style={styles.price}>$ {props.hotel.price.toFixed(2)}</Text>
          <Text style={styles.title}>{props.hotel.name}</Text>
          <Rating
            imageSize={22}
            readonly
            type="star"
            startingValue={props.hotel.stars} />
        </View>
      </View>
      <View style={styles.separator} />
    </View>
  </TouchableHighlight >
);

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
  },
  thumb: {
    width: 120,
    height: 90,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#48BBEC',
  },
  title: {
    fontSize: 20,
    color: '#656565',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
});

export default hotelItem;
