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

export default class Har123 extends Component {

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

            <TouchableOpacity onPress={() => this.props.navigation.navigate('HarHome')} >
              <Image source={require('../assets/back.png')} />
            </TouchableOpacity>

          </View>


          <View style={styles.headerImage2}>

            <Image source={require('../assets/fresh2.png')} />

          </View>

          <View style={{ height: 20, width: 20 }}>
            <Text style={{ alignSelf: 'center' }}></Text>
          </View>

        </View>

        <ScrollView keyboardShouldPersistTaps='handled'>

          <View style={styles.marginDimensionTop}></View>

          <View style={styles.marginSmallDimensionTop}></View>


          <View style={styles.containerView}>


            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('Har1AnnasunRow')}>
              <Text style={styles.buttonText}>HAR 1 - Annasun</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 1 - HTL1606242</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 1 - Avalantino</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 1 - Avalantino</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 2 - Angelle</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 3 - KM5512</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 3 - Bambello</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>HAR 3 - Angelle</Text>
            </TouchableOpacity>

            <View style={styles.marginDimensionTop}></View>


            <View style={styles.headerImage2}>

              <Image source={require('../assets/submit.png')} />

            </View>

            <View style={styles.textContainer}>
            <Text style={styles.textBottom}>Press submit button only when all the above varieties are completed.</Text>
            </View>
          </View>

          <View style={styles.marginSmallDimensionTop}></View>


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

  text: {
    margin: 6,
    margin: 20,
    fontSize: 30,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center'

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

  textBottom: {

    fontSize: 24,
    width: 450,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center'



  },

  textContainer: {

    flexShrink:1

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

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

});  