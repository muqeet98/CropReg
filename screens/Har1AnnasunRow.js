import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  BackHandler
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Har1AnnasunRow extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity  onPress={() => this.props.navigation.navigate('Har123')} >
            <Image source={require('../assets/back.png')}/>
            </TouchableOpacity>

          </View>


          <View style={styles.headerImage2}>

            <Image source={require('../assets/fresh2.png')} />

          </View>

          <View style={{ height: 20, width: 20 }}>
            <Text style={{ alignSelf: 'center' }}></Text>
          </View>

        </View>

        <Text style={styles.text}>HAR 1 - Annasun</Text>


        <ScrollView  keyboardShouldPersistTaps='handled'>

          <View style={styles.marginDimensionTop}></View>

          <View style={styles.containerView}>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har1AnnasunPlants')}>
              <Text style={styles.buttonText}>Row 105</Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F9FF'
  },

  headerImage1: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',

  },

  headerImage2: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 18,

  },



  marginDimensionTop: {

    marginTop: 44,

  },

  marginSmallDimensionTop: {

    marginTop: 18,

  },

  containerView: {

    marginLeft: 95,
    marginRight: 95,

  },

  buttonContainer: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'

  },

  text: {
    margin: 6,
    margin: 20,
    fontSize: 40,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',


  },

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

});  