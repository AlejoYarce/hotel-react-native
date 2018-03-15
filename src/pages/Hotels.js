import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';
import { Icon } from 'react-native-elements';

import HotelItem from '../components/HotelItem';

class Hotels extends Component {
  showHotelDetails = (hotel) => {
    this.props.setSelectedHotel(hotel);
    this.props.navigation.navigate('HotelDetails', { name: hotel.name });
  };

  clearSearch = (event) => {
    this.props.setSearchInput('');
    this.props.setHotesList(this.props.fullHotelsList);
    this.props.setNoHotelsMessage('');
  };

  onSearchTextChanged = (event) => {
    const { text } = event.nativeEvent;
    this.props.setSearchInput(text);
    const hotelsResult = this.props.fullHotelsList
      .filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0);
    this.props.setHotesList(hotelsResult);
    if (!hotelsResult || hotelsResult.length === 0) {
      this.props.setNoHotelsMessage('Not Hotels Found');
    } else {
      this.props.setNoHotelsMessage('');
    }
  };

  render() {
    const renderItems = this.props.hotels.map(hotel => {
      return (
        <HotelItem
          hotel={hotel}
          key={hotel._id}
          onPressHotel={() => this.showHotelDetails(hotel)} />
      );
    });

    return (
      <View>
        <View style={styles.container}>
          <TextInput
            underlineColorAndroid={'transparent'}
            style={styles.searchInput}
            onChange={this.onSearchTextChanged}
            placeholder='Search Hotel'
            value={this.props.inputSearch} />
          <Icon
            name='cancel'
            type='MaterialIcons'
            color='#48BBEC'
            onPress={this.clearSearch} />
        </View>
        {this.props.noHotelsMessage ? <Text style={styles.description}>{this.props.noHotelsMessage}</Text> : null}
        {renderItems}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  searchInput: {
    color: '#48BBEC',
    borderColor: '#48BBEC',
    borderRadius: 8,
    borderWidth: 1,
    flexGrow: 1,
    fontSize: 18,
    height: 40,
    marginRight: 5,
    padding: 4,
  },
  description: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    color: '#48BBEC',
  },
});

const mapStateToProps = state => {
  return {
    hotels: state.hotels,
    fullHotelsList: state.fullHotelsList,
    inputSearch: state.inputSearch,
    noHotelsMessage: state.noHotelsMessage,
    inputSearch: state.inputSearch,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    setSearchInput: (value) => dispatch({ type: 'SET_SEARCH_INPUT', value }),
    setHotesList: data => dispatch({ type: 'SET_HOTELS_LIST', data }),
    setNoHotelsMessage: message => dispatch({ type: 'SET_NO_HOTELS_MESSAGE', message }),
    setSelectedHotel: hotel => dispatch({ type: 'SET_SELECTED_HOTEL', hotel }),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Hotels);
