import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements'
import { Rating } from 'react-native-ratings';

import config from '../../config.json';

const mapStateToProps = state => {
  return {
    selectedHotel: state.selectedHotel,
  };
};

class HotelDetails extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  getAmenities = (hoteDetails) => {
    const amenities = JSON.parse(hoteDetails.amenities);
    return amenities.map((item, index) => (
      <View style={styles.singleRow} key={index}>
        <Icon
          name='keyboard-arrow-right'
          type='MaterialIcons'
          color='#48BBEC'
        />
        <Text style={styles.amenities}>{item}</Text>
      </View>
    ));
  };

  render() {
    const amenities = this.getAmenities(this.props.selectedHotel);
    return (
      <View>
        <Image style={styles.image}
          source={{ uri: `${config.apiUrl}/img/${this.props.selectedHotel.image}` }} />
        <View style={styles.heading}>
          <View style={styles.singleRow}>
            <Text style={styles.price}>$ {this.props.selectedHotel.price.toFixed(2)}</Text>
            <Rating
              style={styles.starContainer}
              imageSize={25}
              readonly
              type="star"
              startingValue={this.props.selectedHotel.stars} />
          </View>
          <View>{amenities}</View>
          <View style={styles.separator} />
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: '#F8F8F8',
    paddingLeft: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#DDDDDD',
  },
  image: {
    height: 300,
  },
  price: {
    color: '#48BBEC',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#656565',
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565',
  },
  starContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
    paddingTop: 5,
  },
  singleRow: {
    flexDirection: 'row',
  },
  amenities: {
    paddingTop: 2,
  }
});

export default connect(mapStateToProps)(HotelDetails);
