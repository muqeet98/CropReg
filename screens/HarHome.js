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

export default class HarHome extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleBackButton = () => {

    BackHandler.exitApp();

  }

  onButtonPress = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    // then navigate
    navigate('NewScreen');
  }



  componentDidMount() {



    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }




  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerImage}>

          <Image source={require('../assets/fresh2.png')} />

        </View>

        <View style={styles.marginDimensionTop}></View>

        <View style={styles.marginSmallDimensionTop}></View>


        <View style={styles.containerView}>

          <Text style={styles.text}>Select your house for crop registration: </Text>


          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Har123')}>
            <Text style={styles.buttonText}>HAR 123</Text>
          </TouchableOpacity>

          <View style={styles.marginSmallDimensionTop}></View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => this.props.navigation.navigate('Har123')}>
            <Text style={styles.buttonText}>HAR 456</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F3F9FF'
  },

  headerImage: {

    resizeMode: 'cover',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 18
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
    fontSize: 26,
    color: '#2C3E50',
    fontWeight: 'bold',

  },

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

});  