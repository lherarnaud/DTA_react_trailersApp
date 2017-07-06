import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View , Image } from 'react-native';
import _ from 'lodash';

export const TRAILER_SCENE_NAME = 'TRAILER_SCENE';

export default class TrailerScreen extends Component {

  // TODO add proptypes
  static navigationOptions = ({ navigation }) => ({
      title: navigation.state.params.title
  });

  render() {
    const {params} = this.props.navigation.state;

    const showGenreElements = _.map(params.genre, (aGenre, aKey) => {
        return (<Text style={styles.elementList}>{'\u2022'} {aGenre}</Text>);
    });

    const showActorElements = _.map(params.actors, (anActor, aKey) => {
        return (<Text style={styles.elementList}>{'\u2022'} {anActor}</Text>);
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.alignCenter} >
            <Text style={styles.title}>{params.title}</Text>
          </View>
          <Image style={styles.poster} resizeMode='cover' source={{uri: params.poster}} />
          <Text style={styles.flatList}>Genre :</Text> 
          {showGenreElements}
          <Text style={styles.flatList}>Avec :</Text> 
          {showActorElements}

        </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   
    marginTop: 5,
    marginBottom: 5
  },
  alignCenter: {
    alignItems: 'center'
  },
  title: {
    margin: 10,
    fontSize: 20,  
  },
  poster: {
    marginTop: 10,
    marginBottom: 10,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    alignSelf: 'stretch'
  },
  flatList: {
    fontSize: 12,  
    marginTop: 10,
    marginLeft: 5,
  },
  elementList : {
    fontSize: 11,  
    marginLeft: 15,
  }
});