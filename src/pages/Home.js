import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-elements';
import axios from '../../axios';

class Home extends Component {
  listHotels = async () => {
    this.props.setLoading(true);
    const { data } = await axios.get('/hotels');
    this.props.setHotelsList(data);
    this.props.setFullHotelsList(data);
    this.props.setLoading(false);
    this.props.navigation.navigate('Hotels');
  };

  render() {
    let spinner = this.props.isLoading ? <ActivityIndicator size='large' /> : null;

    return (
      <View style={styles.container}>
        <Button
          large
          rounded
          fontSize={20}
          backgroundColor='#48BBEC'
          iconRight={{ name: 'search' }}
          fontWeight='600'
          title='LIST HOTELS'
          onPress={this.listHotels}></Button>
        {spinner}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const mapStateToProps = state => {
  return {
    hotels: state.hotels,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: value => dispatch({ type: 'SET_LOADING', value }),
    setHotelsList: data => dispatch({ type: 'SET_HOTELS_LIST', data }),
    setFullHotelsList: data => dispatch({ type: 'SET_FULL_HOTELS_LIST', data }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
