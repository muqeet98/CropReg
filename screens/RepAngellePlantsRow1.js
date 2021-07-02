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
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';


export default class RepAngellePlantsRow1 extends Component {

  constructor(props) {
    super(props);
    this.state = {

      weekNumber: ''

    }
  }

  componentDidMount() {

    var weekNumber = moment().week() - 2;
    var yearNumber = moment().year();
    var toText = yearNumber.toString(); //convert to string
    var lastChar = toText.slice(-2); //gets last character
    var lastDigit = +(lastChar); //convert last character to number
    var weekNumberText = lastDigit + '00';
    var convertWeekNumber = +(weekNumberText)
    var completeWeekNumber = convertWeekNumber + weekNumber;

    this.setState({ weekNumber: completeWeekNumber })
  }



  render() {
    return (
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('RepAngelleRow')} >
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

        <Text style={styles.text}>REP - Angelle / Row 212</Text>


        <ScrollView keyboardShouldPersistTaps='handled'>

          <View style={styles.marginDimensionTop}></View>

          <View style={styles.containerView}>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant1')}>
              <Text style={styles.buttonText}>Plant 1 - Week {this.state.weekNumber}</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant2')}>
              <Text style={styles.buttonText}>Plant 2 - Week {this.state.weekNumber}</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant3')}>
              <Text style={styles.buttonText}>Plant 3 - Week {this.state.weekNumber}</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant4')}>
              <Text style={styles.buttonText}>Plant 4 - Week {this.state.weekNumber}</Text>
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainerImage}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant5')}>
              <Text style={styles.buttonText}>Plant 5 - Week {this.state.weekNumber}</Text>
              <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainerImage}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant6')}>
              <Text style={styles.buttonText}>Plant 6 - Week {this.state.weekNumber}</Text>
              <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainerImage}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant7')}>
              <Text style={styles.buttonText}>Plant 7 - Week {this.state.weekNumber}</Text>
              <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainerImage}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant8')}>
              <Text style={styles.buttonText}>Plant 8 - Week {this.state.weekNumber}</Text>
              <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainerImage}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant9')}>
              <Text style={styles.buttonText}>Plant 9 - Week {this.state.weekNumber}</Text>
              <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
            </TouchableOpacity>

            <View style={styles.marginSmallDimensionTop}></View>

            <TouchableOpacity
              style={styles.buttonContainerImage}
              onPress={() => this.props.navigation.navigate('RepAngelleRow1Plant10')}>
              <Text style={styles.buttonText}>Plant 10 - Week {this.state.weekNumber}</Text>
              <Image source={require('../assets/tick.png')} style={styles.FloatingButtonStyle2} />
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

  textPlants: {
    margin: 6,
    margin: 20,
    fontSize: 32,
    color: '#ff0000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',

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

  buttonContainerImage: {
    backgroundColor: '#2C3E50',
    borderRadius: 8,
    padding: 10,
    margin: 20,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

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

  FloatingButtonStyle2: {

    resizeMode: 'contain',
    marginLeft: 15
  },

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

});  