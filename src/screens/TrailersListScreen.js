import React, { Component } from 'react';
import { NetInfo, Image, ScrollView, TouchableHighlight, FlatList, Platform, 
  ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import {getTrailers} from '../providers/restApi';
import {TRAILER_SCENE_NAME} from './TrailerScreen';

export const TRAILERS_LIST_SCENE_NAME = 'TRAILER_LIST_SCENE';

export default class TrailersListScreen extends Component {

  static navigationOptions = {
    title: 'Trailers list',
  };
  
  constructor(props) {
    super(props);

    this.navigate = this.props.navigation.navigate;

    this.state = {
      isLoading: true,
      trailers : []
    }
  }

  componentDidMount() {
    NetInfo.addEventListener('change', this.handleConnectivityChange);

    getTrailers().then((trailersList) => {

      this.setState({
        isLoading: false,
        trailers: trailersList
      });

    }).catch((error) => {
      console.error(error);
    });
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('change', this.handleConnectivityChange);
  }

  handleConnectivityChange = (reach) => {
    //alert('Netinfo change: ' + reach);
  }

  onPressTrailer(item) {
    this.navigate(TRAILER_SCENE_NAME, item);
  } 


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <ScrollView>
        <FlatList
          data={this.state.trailers}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <TouchableHighlight onPress={() => this.onPressTrailer(item)}>
              <View style={styles.trailer} >
                <Image style={{width: 50, height: 50}} source={{uri: item.poster}} />
                <View style={styles.trailerInfos}>
                  <Text style={{fontSize: 12 }}>{item.title}</Text>
                  <Text style={{fontSize: 9}}>{item.genre.join(', ')}</Text> 
                </View>
              </View>
            </TouchableHighlight>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  trailer: {
    flex: 1,
    flexDirection: 'row',
    margin: 3,
    borderWidth: 1,
    borderColor: 'gray' 
  },
  trailerInfos: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
  }
});