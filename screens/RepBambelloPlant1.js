import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform, Dimensions, Keyboard,
} from 'react-native';
import {setFormSubmit} from '../src/reducer/formSlice'
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements'
import Database from './Database'
import { LogBox } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../src/store";

import { gql, useMutation } from '@apollo/client';
const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const db = new Database();

const addDog = gql`
mutation addDog($type: String!, $name: String!) {
  createDog(data: { type: $type, name: $name }) {
    id
  }
}
`;

 class RepBambelloPlant1 extends Component {
  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantRepBambelloPlant1 = this.onSubmitleavesPerPlantRepBambelloPlant1.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantRepBambelloPlant1Ref = this.updateRef.bind(this, 'leavesPerPlantRepBambelloPlant1');
    this.fullysetTrussRef = this.updateRef.bind(this, 'FullysetTruss');
    this.trussLengthRef = this.updateRef.bind(this, 'TrussLength');
    this.weeklyGrowthRef = this.updateRef.bind(this, 'WeeklyGrowth');
    this.flowerTrussHeightRef = this.updateRef.bind(this, 'FlowerTrussHeight');
    this.leafLengthRef = this.updateRef.bind(this, 'LeafLength');
    this.leafWidthRef = this.updateRef.bind(this, 'LeafWidth');
    this.stmDiameterRef = this.updateRef.bind(this, 'StmDiameter');
    this.lastWeekStmDiameterRef = this.updateRef.bind(this, 'LastWeekStmDiameter');

    //
    this.state = {
      type:'',
      name:'',
      //Plants
      weekNumber: '',
      size: { width, height },
      plantId: '',
      plantRow: '',
      plantName: '',
      plantWeek: '',
      leavesPerPlantRepBambelloPlant1: '',
      fullySetTrussRepBambelloPlant1: '',
      setTrussLengthRepBambelloPlant1: '',
      weeklyGrowthRepBambelloPlant1: '',
      floweringTrussHeightRepBambelloPlant1: '',
      leafLengthRepBambelloPlant1: '',
      leafWidthRepBambelloPlant1: '',
      stmDiameterRepBambelloPlant1: '',
      lastWeekStmDiameterRepBambelloPlant1: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberRepBambelloPlant1: '',
      setFruitsRepBambelloPlant1: '',
      setFlowersRepBambelloPlant1: '',
      pruningNumberRepBambelloPlant1: '',
      fruitDiameterRepBambelloPlant1: '',

      trussNumber1RepBambelloPlant1: '',
      setFruits1RepBambelloPlant1: '',
      setFlowers1RepBambelloPlant1: '',
      pruningNumber1RepBambelloPlant1: '',
      fruitDiameter1RepBambelloPlant1: '',

      trussNumber2RepBambelloPlant1: '',
      setFruits2RepBambelloPlant1: '',
      setFlowers2RepBambelloPlant1: '',
      pruningNumber2RepBambelloPlant1: '',
      fruitDiameter2RepBambelloPlant1: '',

      trussNumber3RepBambelloPlant1: '',
      setFruits3RepBambelloPlant1: '',
      setFlowers3RepBambelloPlant1: '',
      pruningNumber3RepBambelloPlant1: '',
      fruitDiameter3RepBambelloPlant1: '',

      trussNumber4RepBambelloPlant1: '',
      setFruits4RepBambelloPlant1: '',
      setFlowers4RepBambelloPlant1: '',
      pruningNumber4RepBambelloPlant1: '',
      fruitDiameter4RepBambelloPlant1: '',

      trussNumber5RepBambelloPlant1: '',
      setFruits5RepBambelloPlant1: '',
      setFlowers5RepBambelloPlant1: '',
      pruningNumber5RepBambelloPlant1: '',
      fruitDiameter5RepBambelloPlant1: '',

      trussNumber6RepBambelloPlant1: '',
      setFruits6RepBambelloPlant1: '',
      setFlowers6RepBambelloPlant1: '',
      pruningNumber6RepBambelloPlant1: '',
      fruitDiameter6RepBambelloPlant1: '',

      trussNumber7RepBambelloPlant1: '',
      setFruits7RepBambelloPlant1: '',
      setFlowers7RepBambelloPlant1: '',
      pruningNumber7RepBambelloPlant1: '',
      fruitDiameter7RepBambelloPlant1: '',

      trussNumber8RepBambelloPlant1: '',
      setFruits8RepBambelloPlant1: '',
      setFlowers8RepBambelloPlant1: '',
      pruningNumber8RepBambelloPlant1: '',
      fruitDiameter8RepBambelloPlant1: '',

      trussNumber9RepBambelloPlant1: '',
      setFruits9RepBambelloPlant1: '',
      setFlowers9RepBambelloPlant1: '',
      pruningNumber9RepBambelloPlant1: '',
      fruitDiameter9RepBambelloPlant1: '',

      fruitLoadRepBambelloPlant1: '',
      harvestTrussRepBambelloPlant1: '',
      pruningHarRepBambelloPlant1: '',
      settingTrussNumberRepBambelloPlant1: '',
      prunSettingRepBambelloPlant1: '',
      pruneFloweringRepBambelloPlant1: '',

      floweringTrussNumberRepBambelloPlant1: '',
      settingTrussRepBambelloPlant1: '',
      settingTruss2RepBambelloPlant1: '',
      floweringTrussssRepBambelloPlant1: '',

      bambelloPlant1Selected: false,
      checkboxStatus: '',

    }
  }



  goBack() {
    const { navigation } = this.props
    navigation.goBack()
    navigation.state.params.onBack();  // Call onBack function of ScreenA
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

    LogBox.ignoreAllLogs(true)

    this.getAsysncValues();

  }

  //ASYNC METHOD

  async setItem(myKey, value) {
    try {
      this.setState({
        isDataSend: false,

      });

      return await AsyncStorage.setItem(myKey, JSON.stringify(value));
    } catch (error) {
      // console.error('AsyncStorage#setItem error: ' + error.message);
    }
  }

  //

  getAsysncValues = async () => {


    try {
      AsyncStorage.getItem('leavesPerPlantRepBambelloPlant1').then((text1Value) => {
        this.setState({ leavesPerPlantRepBambelloPlant1: JSON.parse(text1Value) });
        console.log("Val",text1Value)


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussRepBambelloPlant1').then((text2Value) => {
        this.setState({ fullySetTrussRepBambelloPlant1: JSON.parse(text2Value) });
        console.log("Val",text2Value)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthRepBambelloPlant1').then((text3Value) => {
        this.setState({ setTrussLengthRepBambelloPlant1: JSON.parse(text3Value) });
        console.log("Val",text3Value)
      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthRepBambelloPlant1').then((text4Value) => {
        this.setState({ weeklyGrowthRepBambelloPlant1: JSON.parse(text4Value) });

        console.log("Val",text4Value)

      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightRepBambelloPlant1').then((text5Value) => {
        this.setState({ floweringTrussHeightRepBambelloPlant1: JSON.parse(text5Value) });
        console.log("Val",text5Value)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthRepBambelloPlant1').then((text6Value) => {
        this.setState({ leafLengthRepBambelloPlant1: JSON.parse(text6Value) });
        console.log("Val",text6Value)

      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthRepBambelloPlant1').then((text7Value) => {
        this.setState({ leafWidthRepBambelloPlant1: JSON.parse(text7Value) });
        console.log("Val",text7Value)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterRepBambelloPlant1').then((text8Value) => {
        this.setState({ stmDiameterRepBambelloPlant1: JSON.parse(text8Value) });
        console.log("Val",text8Value)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant1').then((text9Value) => {
        this.setState({ lastWeekStmDiameterRepBambelloPlant1: JSON.parse(text9Value) });
        console.log("Val",text9Value)

      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('bambelloPlant1Selected').then((text99Value) => {
        this.setState({ bambelloPlant1Selected: JSON.parse(text99Value) });

        console.log(this.state.bambelloPlant1Selected)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('trussNumberRepBambelloPlant1').then((text10Value) => {

        if (text10Value !== null) {
          this.setState({ trussNumberRepBambelloPlant1: JSON.parse(text10Value) });

          this.setState({ trussNumber1RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 1 })
          this.setState({ trussNumber2RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 2 })
          this.setState({ trussNumber3RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 3 })
          this.setState({ trussNumber4RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 4 })
          this.setState({ trussNumber5RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 5 })
          this.setState({ trussNumber6RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 6 })
          this.setState({ trussNumber7RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 7 })
          this.setState({ trussNumber8RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 8 })
          this.setState({ trussNumber9RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 9 })

        }

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFruitsRepBambelloPlant1').then((text11Value) => {
        if (text11Value !== null) {

          this.setState({ setFruitsRepBambelloPlant1: JSON.parse(text11Value) });

        }


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('setFlowersRepBambelloPlant1').then((text12Value) => {

        if (text12Value !== null) {

          this.setState({ setFlowersRepBambelloPlant1: JSON.parse(text12Value) });

        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumberRepBambelloPlant1').then((text13Value) => {
        if (text13Value !== null) {
          this.setState({ pruningNumberRepBambelloPlant1: JSON.parse(text13Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameterRepBambelloPlant1').then((text14Value) => {

        if (text14Value !== null) {
          this.setState({ fruitDiameterRepBambelloPlant1: JSON.parse(text14Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1RepBambelloPlant1').then((text16Value) => {

        if (text16Value !== null) {
          this.setState({ setFruits1RepBambelloPlant1: JSON.parse(text16Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers1RepBambelloPlant1').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFlowers1RepBambelloPlant1: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber1RepBambelloPlant1').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ pruningNumber1RepBambelloPlant1: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter1RepBambelloPlant1').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ fruitDiameter1RepBambelloPlant1: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2RepBambelloPlant1').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFruits2RepBambelloPlant1: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers2RepBambelloPlant1').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ setFlowers2RepBambelloPlant1: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber2RepBambelloPlant1').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ pruningNumber2RepBambelloPlant1: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter2RepBambelloPlant1').then((text20Value) => {

        if (text20Value !== null) {
          this.setState({ fruitDiameter2RepBambelloPlant1: JSON.parse(text20Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3RepBambelloPlant1').then((text21Value) => {

        if (text21Value !== null) {
          this.setState({ setFruits3RepBambelloPlant1: JSON.parse(text21Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers3RepBambelloPlant1').then((text22Value) => {

        if (text22Value !== null) {
          this.setState({ setFlowers3RepBambelloPlant1: JSON.parse(text22Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber3RepBambelloPlant1').then((text23Value) => {

        if (text23Value !== null) {
          this.setState({ pruningNumber3RepBambelloPlant1: JSON.parse(text23Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter3RepBambelloPlant1').then((text24Value) => {

        if (text24Value !== null) {
          this.setState({ fruitDiameter3RepBambelloPlant1: JSON.parse(text24Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4RepBambelloPlant1').then((text25Value) => {

        if (text25Value !== null) {
          this.setState({ setFruits4RepBambelloPlant1: JSON.parse(text25Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers4RepBambelloPlant1').then((text26Value) => {

        if (text26Value !== null) {
          this.setState({ setFlowers4RepBambelloPlant1: JSON.parse(text26Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber4RepBambelloPlant1').then((text27Value) => {

        if (text27Value !== null) {
          this.setState({ pruningNumber4RepBambelloPlant1: JSON.parse(text27Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter4RepBambelloPlant1').then((text28Value) => {

        if (text28Value !== null) {
          this.setState({ fruitDiameter4RepBambelloPlant1: JSON.parse(text28Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5RepBambelloPlant1').then((text29Value) => {

        if (text29Value !== null) {
          this.setState({ setFruits5RepBambelloPlant1: JSON.parse(text29Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers5RepBambelloPlant1').then((text30Value) => {

        if (text30Value !== null) {
          this.setState({ setFlowers5RepBambelloPlant1: JSON.parse(text30Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber5RepBambelloPlant1').then((text31Value) => {

        if (text31Value !== null) {
          this.setState({ pruningNumber5RepBambelloPlant1: JSON.parse(text31Value) });
        }


      }).done();
    } catch (error) {
    }
    try {

      AsyncStorage.getItem('fruitDiameter5RepBambelloPlant1').then((text32Value) => {
        if (text32Value !== null) {
          this.setState({ fruitDiameter5RepBambelloPlant1: JSON.parse(text32Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6RepBambelloPlant1').then((text33Value) => {

        if (text33Value !== null) {
          this.setState({ setFruits6RepBambelloPlant1: JSON.parse(text33Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers6RepBambelloPlant1').then((text34Value) => {

        if (text34Value !== null) {
          this.setState({ setFlowers6RepBambelloPlant1: JSON.parse(text34Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber6RepBambelloPlant1').then((text35Value) => {

        if (text35Value !== null) {
          this.setState({ pruningNumber6RepBambelloPlant1: JSON.parse(text35Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter6RepBambelloPlant1').then((text36Value) => {

        if (text36Value !== null) {
          this.setState({ fruitDiameter6RepBambelloPlant1: JSON.parse(text36Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7RepBambelloPlant1').then((text37Value) => {

        if (text37Value !== null) {
          this.setState({ setFruits7RepBambelloPlant1: JSON.parse(text37Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers7RepBambelloPlant1').then((text38Value) => {

        if (text38Value !== null) {

          this.setState({ setFlowers7RepBambelloPlant1: JSON.parse(text38Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber7RepBambelloPlant1').then((text39Value) => {

        if (text39Value !== null) {
          this.setState({ pruningNumber7RepBambelloPlant1: JSON.parse(text39Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter7RepBambelloPlant1').then((text40Value) => {

        if (text40Value !== null) {
          this.setState({ fruitDiameter7RepBambelloPlant1: JSON.parse(text40Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8RepBambelloPlant1').then((text41Value) => {

        if (text41Value !== null) {
          this.setState({ setFruits8RepBambelloPlant1: JSON.parse(text41Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers8RepBambelloPlant1').then((text42Value) => {

        if (text42Value !== null) {
          this.setState({ setFlowers8RepBambelloPlant1: JSON.parse(text42Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber8RepBambelloPlant1').then((text43Value) => {

        if (text43Value !== null) {
          this.setState({ pruningNumber8RepBambelloPlant1: JSON.parse(text43Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter8RepBambelloPlant1').then((text44Value) => {

        if (text44Value !== null) {
          this.setState({ fruitDiameter8RepBambelloPlant1: JSON.parse(text44Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9RepBambelloPlant1').then((text45Value) => {

        if (text45Value !== null) {
          this.setState({ setFruits9RepBambelloPlant1: JSON.parse(text45Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers9RepBambelloPlant1').then((text46Value) => {

        if (text46Value !== null) {
          this.setState({ setFlowers9RepBambelloPlant1: JSON.parse(text46Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber9RepBambelloPlant1').then((text47Value) => {

        if (text47Value !== null) {
          this.setState({ pruningNumber9RepBambelloPlant1: JSON.parse(text47Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter9RepBambelloPlant1').then((text48Value) => {

        if (text48Value !== null) {
          this.setState({ fruitDiameter9RepBambelloPlant1: JSON.parse(text48Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant1').then((text49Value) => {
        if (text49Value !== null) {
          this.setState({ fruitLoadRepBambelloPlant1: JSON.parse(text49Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('floweringTrussssRepBambelloPlant1').then((text50Value) => {

        if (text50Value !== null) {
          this.setState({ floweringTrussssRepBambelloPlant1: JSON.parse(text50Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('settingTrussNumberRepBambelloPlant1').then((text51Value) => {

        if (text51Value !== null) {
          this.setState({ settingTrussNumberRepBambelloPlant1: JSON.parse(text51Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('harvestTrussRepBambelloPlant1').then((text52Value) => {

        if (text52Value !== null) {
          this.setState({ harvestTrussRepBambelloPlant1: JSON.parse(text52Value) });
        }


      }).done();
    } catch (error) {
    }






    /*try {
      AsyncStorage.getItem('trussNumberRepBambelloPlant1').then((text10Value) => {
        this.setState({ trussNumberRepBambelloPlant1: JSON.parse(text10Value) });
        console.log(this.state.trussNumberRepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsRepBambelloPlant1').then((text11Value) => {
        this.setState({ setFruitsRepBambelloPlant1: JSON.parse(text11Value) });
        console.log(this.state.setFruitsRepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersRepBambelloPlant1').then((text12Value) => {
        this.setState({ setFlowersRepBambelloPlant1: JSON.parse(text12Value) });
        console.log(this.state.setFlowersRepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberRepBambelloPlant1').then((text13Value) => {
        this.setState({ pruningNumberRepBambelloPlant1: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberRepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterRepBambelloPlant1').then((text14Value) => {
        this.setState({ fruitDiameterRepBambelloPlant1: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterRepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1RepBambelloPlant1').then((text15Value) => {
        this.setState({ setFruits1RepBambelloPlant1: JSON.parse(text15Value) });
        console.log(this.state.setFruits1RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1RepBambelloPlant1').then((text16Value) => {
        this.setState({ setFlowers1RepBambelloPlant1: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1RepBambelloPlant1').then((text17Value) => {
        this.setState({ pruningNumber1RepBambelloPlant1: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1RepBambelloPlant1').then((text18Value) => {
        this.setState({ fruitDiameter1RepBambelloPlant1: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2RepBambelloPlant1').then((text19Value) => {
        this.setState({ setFruits2RepBambelloPlant1: JSON.parse(text19Value) });
        console.log(this.state.setFruits2RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2RepBambelloPlant1').then((text20Value) => {
        this.setState({ setFlowers2RepBambelloPlant1: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2RepBambelloPlant1').then((text21Value) => {
        this.setState({ pruningNumber2RepBambelloPlant1: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2RepBambelloPlant1').then((text22Value) => {
        this.setState({ fruitDiameter2RepBambelloPlant1: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3RepBambelloPlant1').then((text23Value) => {
        this.setState({ setFruits3RepBambelloPlant1: JSON.parse(text23Value) });
        console.log(this.state.setFruits3RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3RepBambelloPlant1').then((text24Value) => {
        this.setState({ setFlowers3RepBambelloPlant1: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3RepBambelloPlant1').then((text25Value) => {
        this.setState({ pruningNumber3RepBambelloPlant1: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3RepBambelloPlant1)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3RepBambelloPlant1').then((text26Value) => {
        this.setState({ fruitDiameter3RepBambelloPlant1: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3RepBambelloPlant1)



      }).done();
    } catch (error) {
    }*/


  }


  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  updatePlantsTextInput = (text, field) => {

    this.setItem(field, text)
    const state = this.state
    state[field] = text;
    this.setState(state);

  }

  updateTextInput = (text, field) => {

    this.setItem(field, text)
    const state = this.state
    state[field] = text;
    this.setState(state)

    this.calculateFruitLoad();
    this.calculateHarvestTruss();
    this.calculateSettingTruss2();
    this.calculateFloweringTruss2();


  }

  updateTextInput22 = (text, field) => {

    this.setItem(field, text)
    const state = this.state
    state[field] = text;
    this.setState(state)

    this.setState({ trussNumber1RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 1 })
    this.setState({ trussNumber2RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 2 })
    this.setState({ trussNumber3RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 3 })
    this.setState({ trussNumber4RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 4 })
    this.setState({ trussNumber5RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 5 })
    this.setState({ trussNumber6RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 6 })
    this.setState({ trussNumber7RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 7 })
    this.setState({ trussNumber8RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 8 })
    this.setState({ trussNumber9RepBambelloPlant1: parseInt(this.state.trussNumberRepBambelloPlant1) + 9 })


    if (this.state.trussNumberRepBambelloPlant1 !== "") {

      this.calculateSettingTruss2();
      this.calculateFloweringTruss2();
      this.calculateFruitLoad();
      this.calculateHarvestTruss();
      this.getTrussData();

    }

  }

  //calculation

  calculateFruitLoad = () => {

    var sum = 0;
    sum = ((parseInt(this.state.setFruitsRepBambelloPlant1) ? parseInt(this.state.setFruitsRepBambelloPlant1) : 0) + (parseInt(this.state.setFruits1RepBambelloPlant1) ? parseInt(this.state.setFruits1RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits2RepBambelloPlant1) ? parseInt(this.state.setFruits2RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits3RepBambelloPlant1) ? parseInt(this.state.setFruits3RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits4RepBambelloPlant1) ? parseInt(this.state.setFruits4RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits5RepBambelloPlant1) ? parseInt(this.state.setFruits5RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits6RepBambelloPlant1) ? parseInt(this.state.setFruits6RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits7RepBambelloPlant1) ? parseInt(this.state.setFruits7RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits8RepBambelloPlant1) ? parseInt(this.state.setFruits8RepBambelloPlant1) : 0) + (parseInt(this.state.setFruits9RepBambelloPlant1) ? parseInt(this.state.setFruits9RepBambelloPlant1) : 0));
    this.setState({
      fruitLoadRepBambelloPlant1: sum,
    });

    this.setItem("fruitLoadRepBambelloPlant1", this.state.fruitLoadRepBambelloPlant1)

    console.log("Fruit Load : " + sum);



  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersRepBambelloPlant1 === "") {

      prunNum = parseInt(this.state.pruningNumberRepBambelloPlant1)

      div = (parseInt((this.state.setFruitsRepBambelloPlant1) ? (this.state.setFruitsRepBambelloPlant1) : 0) / parseFloat((this.state.pruningNumberRepBambelloPlant1) ? (this.state.pruningNumberRepBambelloPlant1) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberRepBambelloPlant1) ? parseInt(this.state.trussNumberRepBambelloPlant1) : 0) + sub).toFixed(2))
      this.setState({
        harvestTrussRepBambelloPlant1: add,
        pruningHar: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberRepBambelloPlant1)
      var num = this.state.trussNumberRepBambelloPlant1

      this.setState({
        harvestTrussRepBambelloPlant1: num,
        pruningHar: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);

    this.setItem("harvestTrussRepBambelloPlant1", this.state.harvestTrussRepBambelloPlant1)



  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2RepBambelloPlant1);

    if (this.state.setFruits9RepBambelloPlant1 === "") {

      if (this.state.setFruits8RepBambelloPlant1 === "") {

        if (this.state.setFruits7RepBambelloPlant1 === "") {

          if (this.state.setFruits6RepBambelloPlant1 === "") {

            if (this.state.setFruits5RepBambelloPlant1 === "") {

              if (this.state.setFruits4RepBambelloPlant1 === "") {

                if (this.state.setFruits3RepBambelloPlant1 === "") {

                  if (this.state.setFruits2RepBambelloPlant1 === "") {

                    if (this.state.setFruits1RepBambelloPlant1 === "") {

                      if (this.state.setFruitsRepBambelloPlant1 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberRepBambelloPlant1);
                        trussNum = parseInt(this.state.trussNumberRepBambelloPlant1);
                        settingFruit = parseInt(this.state.setFruitsRepBambelloPlant1);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumberRepBambelloPlant1: settingTruss,
                          settingTruss: trussNum,
                          prunSetting: pruningSet,

                        });

                        this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberRepBambelloPlant1) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1RepBambelloPlant1);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1RepBambelloPlant1);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumberRepBambelloPlant1: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                      });

                      this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2RepBambelloPlant1);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2RepBambelloPlant1);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumberRepBambelloPlant1: settingTruss,
                      settingTruss: trussNum,
                      prunSetting: pruningSet,

                    });
                    this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3RepBambelloPlant1);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3RepBambelloPlant1);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumberRepBambelloPlant1: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                  });

                  this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


                }

              } else {

                var number4 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 4)

                pruningSet = parseInt(this.state.pruningNumber4RepBambelloPlant1);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4RepBambelloPlant1);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumberRepBambelloPlant1: settingTruss,
                  settingTruss: trussNum,
                  prunSetting: pruningSet,

                });

                this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


              }

            } else {

              var number5 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 5)

              pruningSet = parseInt(this.state.pruningNumber5RepBambelloPlant1);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5RepBambelloPlant1);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumberRepBambelloPlant1: settingTruss,
                settingTruss: trussNum,
                prunSetting: pruningSet,

              });

              this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)



            }

          } else {

            var number6 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 6)

            pruningSet = parseInt(this.state.pruningNumber6RepBambelloPlant1);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6RepBambelloPlant1);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumberRepBambelloPlant1: settingTruss,
              settingTruss: trussNum,
              prunSetting: pruningSet,

            });

            this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 7)

          pruningSet = parseInt(this.state.pruningNumber7RepBambelloPlant1);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7RepBambelloPlant1);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumberRepBambelloPlant1: settingTruss,
            settingTruss: trussNum,
            prunSetting: pruningSet,

          });

          this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)

        }

      } else {

        var number8 = (parseInt(this.state.trussNumberRepBambelloPlant1) + 8)

        pruningSet = parseInt(this.state.pruningNumber8RepBambelloPlant1);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8RepBambelloPlant1);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumberRepBambelloPlant1: settingTruss,
          settingTruss: trussNum,
          prunSetting: pruningSet,

        });

        this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberRepBambelloPlant1) + 9)

      pruningSet = parseInt(this.state.pruningNumber9RepBambelloPlant1);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9RepBambelloPlant1);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumberRepBambelloPlant1: settingTruss,
        settingTruss2: trussNum,
        prunSetting: pruningSet,
      });

      this.setItem("settingTrussNumberRepBambelloPlant1", settingTruss)


    }



  }

  calculateFloweringTruss2 = () => {

    var floweringTrussNum = 0;
    var flowerPruningNumner = 0;
    var flowering = 0;
    var flowerSetFruits = 0;
    var summ = 0;
    var floweringTruss = 0;
    var trussNum = 0;

    console.log("Flowering truss called : " + this.state.setFlowers2RepBambelloPlant1);


    if (this.state.setFlowers9RepBambelloPlant1 === "") {

      if (this.state.setFlowers8RepBambelloPlant1 === "") {

        if (this.state.setFlowers7RepBambelloPlant1 === "") {

          if (this.state.setFlowers6RepBambelloPlant1 === "") {

            if (this.state.setFlowers5RepBambelloPlant1 === "") {

              if (this.state.setFlowers4RepBambelloPlant1 === "") {

                if (this.state.setFlowers3RepBambelloPlant1 === "") {

                  if (this.state.setFlowers2RepBambelloPlant1 === "") {

                    if (this.state.setFlowers1RepBambelloPlant1 === "") {

                      if (this.state.setFlowersRepBambelloPlant1 === "") {


                      } else {

                        var number01 = this.state.trussNumberRepBambelloPlant1


                        flowerPruningNumner = parseInt(this.state.pruningNumberRepBambelloPlant1);
                        flowering = parseInt(this.state.setFlowersRepBambelloPlant1);
                        flowerSetFruits = parseInt(this.state.setFruitsRepBambelloPlant1);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussssRepBambelloPlant1: floweringTruss,
                          pruneFlowering: flowerPruningNumner,
                        });
                        this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)

                      }


                    } else {

                      var number11 = + (this.state.trussNumberRepBambelloPlant1) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1RepBambelloPlant1);
                      flowering = parseInt(this.state.setFlowers1RepBambelloPlant1);
                      flowerSetFruits = parseInt(this.state.setFruits1RepBambelloPlant1);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussssRepBambelloPlant1: floweringTruss,
                        pruneFlowering: flowerPruningNumner,

                      });
                      this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


                    }


                  } else {

                    var number21 = + (this.state.trussNumberRepBambelloPlant1) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2RepBambelloPlant1);
                    flowering = parseInt(this.state.setFlowers2RepBambelloPlant1);
                    flowerSetFruits = parseInt(this.state.setFruits2RepBambelloPlant1);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussssRepBambelloPlant1: floweringTruss,
                      pruneFlowering: flowerPruningNumner,

                    });
                    this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


                  }


                } else {

                  var number31 = + (this.state.trussNumberRepBambelloPlant1) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3RepBambelloPlant1);
                  flowering = parseInt(this.state.setFlowers3RepBambelloPlant1);
                  flowerSetFruits = parseInt(this.state.setFruits3RepBambelloPlant1);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussssRepBambelloPlant1: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                  });

                  this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)

                }


              } else {

                var number41 = + (this.state.trussNumberRepBambelloPlant1) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4RepBambelloPlant1);
                flowering = parseInt(this.state.setFlowers4RepBambelloPlant1);
                flowerSetFruits = parseInt(this.state.setFruits4RepBambelloPlant1);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussssRepBambelloPlant1: floweringTruss,
                  pruneFlowering: flowerPruningNumner,

                });

                this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


              }


            } else {

              var number51 = + (this.state.trussNumberRepBambelloPlant1) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5RepBambelloPlant1);
              flowering = parseInt(this.state.setFlowers5RepBambelloPlant1);
              flowerSetFruits = parseInt(this.state.setFruits5RepBambelloPlant1);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussssRepBambelloPlant1: floweringTruss,
                pruneFlowering: flowerPruningNumner,

              });

              this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


            }


          } else {

            var number61 = + (this.state.trussNumberRepBambelloPlant1) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6RepBambelloPlant1);
            flowering = parseInt(this.state.setFlowers6RepBambelloPlant1);
            flowerSetFruits = parseInt(this.state.setFruits6RepBambelloPlant1);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussssRepBambelloPlant1: floweringTruss,
              pruneFlowering: flowerPruningNumner,

            });

            this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


          }


        } else {

          var number71 = + (this.state.trussNumberRepBambelloPlant1) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7RepBambelloPlant1);
          flowering = parseInt(this.state.setFlowers7RepBambelloPlant1);
          flowerSetFruits = parseInt(this.state.setFruits7RepBambelloPlant1);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussssRepBambelloPlant1: floweringTruss,
            pruneFlowering: flowerPruningNumner,

          });

          this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


        }


      } else {
        var number81 = + (this.state.trussNumberRepBambelloPlant1) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8RepBambelloPlant1);
        flowering = parseInt(this.state.setFlowers8RepBambelloPlant1);
        flowerSetFruits = parseInt(this.state.setFruits8RepBambelloPlant1);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussssRepBambelloPlant1: floweringTruss,
          pruneFlowering: flowerPruningNumner,

        });

        this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


      }


    } else {

      var number91 = + (this.state.trussNumberRepBambelloPlant1) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9RepBambelloPlant1);
      flowering = parseInt(this.state.setFlowers9RepBambelloPlant1);
      flowerSetFruits = parseInt(this.state.setFruits9RepBambelloPlant1);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussssRepBambelloPlant1: floweringTruss,
        pruneFlowering: flowerPruningNumner,

      });

      this.setItem("floweringTrussssRepBambelloPlant1", floweringTruss)


    }





  }
  //

  //Get data for truss

  getTrussData = () => {


    /*if (this.state.trussNumber != null) {

       db.trussById(this.state.trussNumber, numberWeek - 1, 'GER 1 - Merlice', number, '81/86').then((data) => {
           console.log(data);
           console.log("Calling database")
           truss = data;
           this.setState({
               truss,
               setFruits: data.setFruits,
               setFlowers: data.setFlowers,
               pruningNumber: data.pruningNumber,
           });
           console.log("Truss Details", this.state.truss);

           this.calculateFruitLoad();
           this.calculateharvestTrussRepBambelloPlant1();
           this.calculateSettingTruss2();
           this.calculateFloweringTruss2();


       }).catch((err) => {
           console.log(err);

       })
   } else {


   }

   setTimeout(() => {

           if ((parseInt(this.state.trussNumber) + 1) != null) {

               db.trussByIdRow((parseInt(this.state.trussNumber) + 1), numberWeek - 1, 'GER 1 - Merlice', number, '81/86').then((data1) => {
                   console.log(data1);
                   console.log("Calling database")
                   truss1 = data1;
                   this.setState({
                       truss1,
                       setFruits1: data1.setFruits,
                       setFlowers1: data1.setFlowers,
                       pruningNumber1: data1.pruningNumber,
                   });
                   console.log("Truss Details", this.state.truss1);

                   this.calculateFruitLoad();
                   this.calculateHarvestTruss();
                   this.calculateSettingTruss2();
                   this.calculateFloweringTruss2();


               }).catch((err) => {
                   console.log(err);

               })
           } else {


           }


       }, 1000); and so on....*/

  }
  //

  //DEFINE FOCUS

  changeCheckbox = () => {

    this.setState({ bambelloPlant1Selected: !this.state.bambelloPlant1Selected })

    const vart = this.state.bambelloPlant1Selected

    const vart2 = false;

    if (vart == null) {

      this.setItem('bambelloPlant1Selected', vart2)

      EventRegister.emit('bambelloEventPlant1', vart2)

    } else {

      this.setItem('bambelloPlant1Selected', vart)

      EventRegister.emit('bambelloEventPlant1', vart)

    }

    this.checkStatus();

  }

  checkStatus = () => {

    const vart = this.state.bambelloPlant1Selected

    if (vart == null || vart == false) {

      this.setState({ checkboxStatus: 'CHECKED' })


      let data = {
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        leavesPerPlant: this.state.leavesPerPlantRepBambelloPlant1,
        fullySetTruss: this.state.fullySetTrussRepBambelloPlant1,
        setTrussLength: this.state.setTrussLengthRepBambelloPlant1,
        weeklyGrowth: this.state.weeklyGrowthRepBambelloPlant1,
        floweringTrussHeight: this.state.floweringTrussHeightRepBambelloPlant1,
        leafLength: this.state.leafLengthRepBambelloPlant1,
        leafWidth: this.state.leafWidthRepBambelloPlant1,
        stmDiameter: this.state.stmDiameterRepBambelloPlant1,
        lastWeekStmDiameter: this.state.lastWeekStmDiameterRepBambelloPlant1
      }

      db.addPlants(data).then((result) => {
        console.log(result);
        this.props.dispatch(setFormSubmit(true))

      }).catch((err) => {
        console.log(err);

      })

      this.saveTrussToDb();

    } else {

      this.setState({ checkboxStatus: 'UNCHECKED' })


    }
  }


  saveTrussToDb = () => {

    if (this.state.trussNumberRepBambelloPlant1 !== null && this.state.pruningNumberRepBambelloPlant1 !== null) {

      let data = {
        trussNumber: this.state.trussNumberRepBambelloPlant1,
        fruitDiameter: this.state.fruitDiameterRepBambelloPlant1,
        setFruits: this.state.setFruitsRepBambelloPlant1,
        setFlowers: this.state.setFlowersRepBambelloPlant1,
        pruningNumber: this.state.pruningNumberRepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1
      }


      db.addTrussDetails(data).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 1) !== null && this.state.pruningNumber1RepBambelloPlant1 !== '') {

          this.saveTrussToDB1();


        } else {


        }


      }).catch((err) => {
        console.log(err);
      })
    } else {
    }
  }

  saveTrussToDB1 = () => {


    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 1) != null && this.state.pruningNumber1RepBambelloPlant1 !== null) {


      let data1 = {

        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 1),
        fruitDiameter: this.state.fruitDiameter1RepBambelloPlant1,
        setFruits: this.state.setFruits1RepBambelloPlant1,
        setFlowers: this.state.setFlowers1RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber1RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1

      }




      db.addTrussDetails(data1).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 2) !== null && this.state.pruningNumber2RepBambelloPlant1 !== '') {

          this.saveTrussToDB2();

        } else {



        }

      }).catch((err) => {

        console.log(err);

      })


    } else {


    }



  }

  saveTrussToDB2 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 2) != null && this.state.pruningNumber2RepBambelloPlant1 !== null) {


      let data2 = {

        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 2),
        fruitDiameter: this.state.fruitDiameter2RepBambelloPlant1,
        setFruits: this.state.setFruits2RepBambelloPlant1,
        setFlowers: this.state.setFlowers2RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber2RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1

      }




      db.addTrussDetails(data2).then((result) => {
        console.log(result);

        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 3) !== null && this.state.pruningNumber3RepBambelloPlant1 !== '') {

          this.saveTrussToDB3();


        } else {



        }


      }).catch((err) => {
        console.log(err);

      })



    } else {




    }

  }

  saveTrussToDB3 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 3) !== null && this.state.pruningNumber3RepBambelloPlant1 !== null) {


      let data3 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant3) + 3),
        fruitDiameter: this.state.fruitDiameter3RepBambelloPlant1,
        setFruits: this.state.setFruits3RepBambelloPlant1,
        setFlowers: this.state.setFlowers3RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber3RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1



      }


      db.addTrussDetails(data3).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 4) !== null && this.state.pruningNumber4RepBambelloPlant1 !== '') {

          this.saveTrussToDB4();


        } else {


        }


      }).catch((err) => {
        console.log(err);

      })

    } else {



    }



  }

  saveTrussToDB4 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 4) != null && this.state.pruningNumber4RepBambelloPlant1 !== null) {


      let data4 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 4),
        fruitDiameter: this.state.fruitDiameter4RepBambelloPlant1,
        setFruits: this.state.setFruits4RepBambelloPlant1,
        setFlowers: this.state.setFlowers4RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber4RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1



      }



      db.addTrussDetails(data4).then((result) => {

        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 5) !== null && this.state.pruningNumber5RepBambelloPlant1 !== '') {

          this.saveTrussToDB5();



        } else {



        }

      }).catch((err) => {
        console.log(err);

      })



    } else {



    }



  }

  saveTrussToDB5 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 5) != null && this.state.pruningNumber5RepBambelloPlant1 !== null) {


      let data5 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 5),
        fruitDiameter: this.state.fruitDiameter5RepBambelloPlant1,
        setFruits: this.state.setFruits5RepBambelloPlant1,
        setFlowers: this.state.setFlowers5RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber5RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1


      }



      db.addTrussDetails(data5).then((result) => {
        console.log(result);
        this.setState({
          isLoading: false,
          isDataSend: true,

        });

        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 6) !== null && this.state.pruningNumber6RepBambelloPlant1 !== '') {

          this.saveTrussToDB6();


        } else {



        }


      }).catch((err) => {

        console.log(err);

      })



    } else {



    }



  }

  saveTrussToDB6 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 6) != null && this.state.pruningNumber6RepBambelloPlant1 !== null) {


      let data6 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 6),
        fruitDiameter: this.state.fruitDiameter6RepBambelloPlant1,
        setFruits: this.state.setFruits6RepBambelloPlant1,
        setFlowers: this.state.setFlowers6RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber6RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1

      }



      db.addTrussDetails(data6).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 7) !== null && this.state.pruningNumber7RepBambelloPlant1 !== '') {

          this.saveTrussToDB7();


        } else {


        }


      }).catch((err) => {

        console.log(err);

      })




    } else {



    }



  }

  saveTrussToDB7 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 7) != null && this.state.pruningNumber7RepBambelloPlant1 !== null) {


      let data7 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 7),
        fruitDiameter: this.state.fruitDiameter7RepBambelloPlant1,
        setFruits: this.state.setFruits7RepBambelloPlant1,
        setFlowers: this.state.setFlowers7RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber7RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1


      }



      db.addTrussDetails(data7).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 8) !== null && this.state.pruningNumber8RepBambelloPlant1 !== '') {

          this.saveTrussToDB8();


        } else {



        }

      }).catch((err) => {
        console.log(err);

      })


    } else {



    }



  }

  saveTrussToDB8 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 8) != null && this.state.pruningNumber8RepBambelloPlant1 !== null) {


      let data8 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 8),
        fruitDiameter: this.state.fruitDiameter8RepBambelloPlant1,
        setFruits: this.state.setFruits8RepBambelloPlant1,
        setFlowers: this.state.setFlowers8RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber8RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1


      }



      db.addTrussDetails(data8).then((result) => {

        console.log(result);

        if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 9) !== null && this.state.pruningNumber9RepBambelloPlant1 !== '') {

          this.saveTrussToDB9();


        } else {



        }


      }).catch((err) => {

        console.log(err);

      })


    } else {


    }

  }

  saveTrussToDB9 = () => {

    if ((parseInt(this.state.trussNumberRepBambelloPlant1) + 9) != null && this.state.pruningNumber9RepBambelloPlant1 !== null) {



      let data9 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant1) + 9),
        fruitDiameter: this.state.fruitDiameter9RepBambelloPlant1,
        setFruits: this.state.setFruits9RepBambelloPlant1,
        setFlowers: this.state.setFlowers9RepBambelloPlant1,
        pruningNumber: this.state.pruningNumber9RepBambelloPlant1,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 1,
        fruitLoad: this.state.fruitLoadRepBambelloPlant1,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant1,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant1,
        pruningSet: this.state.prunSettingRepBambelloPlant1,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant1,
        pruningHarvest: this.state.pruningHarRepBambelloPlant1,
        harvestTruss: this.state.harvestTrussRepBambelloPlant1



      }


      db.addTrussDetails(data9).then((result) => {

        console.log(result);

      }).catch((err) => {

        console.log(err);

      })

    } else {


    }



  }



  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }


  onSubmitFullysetTruss() {
    this.FullysetTruss.focus();
  }

  onSubmitTrussLength() {
    this.TrussLength.focus();
  }

  onSubmitWeeklyGrowth() {
    this.WeeklyGrowth.focus();
  }

  onSubmitFlowerTrussHeight() {
    this.FlowerTrussHeight.focus();
  }

  onSubmitLeafLength() {
    this.LeafLength.focus();
  }

  onSubmitLeafWidth() {
    this.LeafWidth.focus();
  }

  onSubmitStmDiameter() {
    this.StmDiameter.focus();
  }

  onSubmitLastWeekStmDiameter() {
    this.LastWeekStmDiameter.focus();
  }

  onSubmitleavesPerPlantRepBambelloPlant1() {
    this.leavesPerPlantRepBambelloPlant1.focus();
  }
  //

  //INITIALIZE ONFOCUS

  onFocus() {
    let { errors = {} } = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({ errors });
  }
  //

  //OnSubmit

  onSubmit() {
    let errors = {};

    ['leavesPerPlantRepBambelloPlant1', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
      .forEach((name) => {
        let value = this[name].value();

        if (!value) {
          errors[name] = 'Should not be empty';
        } else {
          if (Platform.OS === 'android') {
            //Add method
            ToastAndroid.show('Completed!!', ToastAndroid.SHORT)

          } else {
            //Add Method
            AlertIOS.alert('Completed!!');

          }
        }
      });

    this.setState({ errors });
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  //




  render() {
    return (

      // <Mutation mutation={SaveData}>
      <View style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>

          <View style={styles.headerImage1}>

            <TouchableOpacity onPress={() => this.props.navigation.push('RepBambelloPlantsRow1')} >
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

        <Text style={styles.text}>REP - Bambello</Text>

        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 1</Text>/ Row No. 807/ Week No. {this.state.weekNumber}</Text>


        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

          <View pointerEvents={this.state.bambelloPlant1Selected ? 'none' : 'auto'}>


            <View style={styles.formContainer}>

              <View style={styles.marginSmallDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Leaves per plant</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onFocus={this.onFocus}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantRepBambelloPlant1')}
                      value={this.state.leavesPerPlantRepBambelloPlant1}
                      onSubmitEditing={() => { this.fullySetTrussTextInput.focus(); }}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>



              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Fully set truss</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussRepBambelloPlant1')}
                      value={this.state.fullySetTrussRepBambelloPlant1}
                      ref={(input) => { this.fullySetTrussTextInput = input; }}
                      onSubmitEditing={() => { this.fullySetTrussLengthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Fully set truss length</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthRepBambelloPlant1')}
                      value={this.state.setTrussLengthRepBambelloPlant1}
                      ref={(input) => { this.fullySetTrussLengthTextInput = input; }}
                      onSubmitEditing={() => { this.weeklyGrowthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Weekly growth</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthRepBambelloPlant1')}
                      value={this.state.weeklyGrowthRepBambelloPlant1}
                      ref={(input) => { this.weeklyGrowthTextInput = input; }}
                      onSubmitEditing={() => { this.FlowerTrussHeightTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>


              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Flower truss height</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightRepBambelloPlant1')}
                      value={this.state.floweringTrussHeightRepBambelloPlant1}
                      ref={(input) => { this.FlowerTrussHeightTextInput = input; }}
                      onSubmitEditing={() => { this.leafLengthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Leaf Length</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthRepBambelloPlant1')}
                      value={this.state.leafLengthRepBambelloPlant1}
                      ref={(input) => { this.leafLengthTextInput = input; }}
                      onSubmitEditing={() => { this.leafWidthTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Leaf Width</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthRepBambelloPlant1')}
                      value={this.state.leafWidthRepBambelloPlant1}
                      ref={(input) => { this.leafWidthTextInput = input; }}
                      onSubmitEditing={() => { this.stmDiameterTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Stem diameter</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"next"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterRepBambelloPlant1')}
                      value={this.state.stmDiameterRepBambelloPlant1}
                      ref={(input) => { this.stmDiameterTextInput = input; }}
                      onSubmitEditing={() => { this.lastWeekSmDiameterTextInput.focus(); }}
                      onFocus={this.onFocus}

                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <View style={styles.backgroundColour}>

                <View style={styles.row}>

                  <Text style={styles.textTitle}>Last week stem diameter</Text>
                  <Text style={styles.textTitle}></Text>
                  <Text style={styles.textTitle}>Last week</Text>
                </View>

                <View style={styles.row}>
                  <View style={styles.borderEdit}>
                    <TextInput style={styles.textInputStyle}
                      placeholderTextColor="transparent"
                      autoCapitalize="none"
                      multiline={false}
                      autoCorrect={false}
                      enablesReturnKeyAutomatically={true}
                      onChangeText={this.onChangeText}
                      returnKeyType={"done"}
                      keyboardType={'numeric'}
                      blurOnSubmit={false}
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterRepBambelloPlant1')}
                      value={this.state.lastWeekStmDiameterRepBambelloPlant1}
                      ref={(input) => { this.lastWeekSmDiameterTextInput = input; }}
                      onFocus={this.onFocus}
                    />
                  </View>
                  <Text style={styles.textLastWeek}>19</Text>


                </View>

                <View style={styles.marginXSmallDimensionTop}></View>


              </View>

              <View style={styles.marginDimensionTop}></View>

              <Text style={styles.text2}>Truss Details</Text>



              <View style={styles.marginDimensionTop}></View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,
                }}
              />

              {Platform.isPad ? (<View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <Text style={styles.text222}>TrussNo</Text>
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <Text style={styles.text222}>Set Fruit</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <Text style={styles.text222}>Flowers</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <Text style={styles.text222}>Pruning</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <Text style={styles.text222}>Fruit Dia</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>) : (<View style={styles.rowContainer21}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <Text style={styles.text222}>TrussNo</Text>
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <Text style={styles.text222}>Set Fruit</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <Text style={styles.text222}>Flowers</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <Text style={styles.text222}>Pruning</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <Text style={styles.text222}>Fruit Dia</Text>

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>)}




              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />


              <View

                style={{
                  margin: 8

                }}
              />

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,


                }}
              />
              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,

                  }}
                />




                <TextInput
                  style={styles.textinputheight2}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  placeholderTextColor="#000000"
                  multiline={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumberRepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumberRepBambelloPlant1}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,

                  }}
                />




                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruitsRepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruitsRepBambelloPlant1.toString()}
                />



                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowersRepBambelloPlant1')}
                  value={this.state.setFlowersRepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumberRepBambelloPlant1')}
                  value={this.state.pruningNumberRepBambelloPlant1.toString()}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterRepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


              </View>



              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber1RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits1RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits1RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers1RepBambelloPlant1')}
                  value={this.state.setFlowers1RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1RepBambelloPlant1')}
                  value={this.state.pruningNumber1RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  // underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={this.onChangeText}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber2RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits2RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits2RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers2RepBambelloPlant1')}
                  value={this.state.setFlowers2RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2RepBambelloPlant1')}
                  value={this.state.pruningNumber2RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  editable={false}
                  selectTextOnFocus={false}
                  multiline={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber3RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits3RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits3RepBambelloPlant1.toString()} />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers3RepBambelloPlant1')}
                  value={this.state.setFlowers3RepBambelloPlant1.toString()} />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3RepBambelloPlant1')}
                  value={this.state.pruningNumber3RepBambelloPlant1.toString()} />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber4RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits4RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits4RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers4RepBambelloPlant1')}
                  value={this.state.setFlowers4RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4RepBambelloPlant1')}
                  value={this.state.pruningNumber4RepBambelloPlant1.toString()}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber5RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits5RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits5RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers5RepBambelloPlant1')}
                  value={this.state.setFlowers5RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5RepBambelloPlant1')}
                  value={this.state.pruningNumber5RepBambelloPlant1.toString()}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber6RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits6RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits6RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers6RepBambelloPlant1')}
                  value={this.state.setFlowers6RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6RepBambelloPlant1')}
                  value={this.state.pruningNumber6RepBambelloPlant1.toString()}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber7RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits7RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits7RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers7RepBambelloPlant1')}
                  value={this.state.setFlowers7RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7RepBambelloPlant1')}
                  value={this.state.pruningNumber7RepBambelloPlant1.toString()}

                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber8RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits8RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits8RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers8RepBambelloPlant1')}
                  value={this.state.setFlowers8RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8RepBambelloPlant1')}
                  value={this.state.pruningNumber8RepBambelloPlant1.toString()}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



              </View>

              <View
                style={{
                  borderTopColor: 'black',
                  borderTopWidth: 1,

                }}
              />

              <View style={styles.rowContainer222}>

                <View
                  style={{
                    borderLeftColor: 'black',
                    borderLeftWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.textinputheight}
                  //underlineColorAndroid="black"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  multiline={false}
                  editable={false}
                  selectTextOnFocus={false}
                  returnKeyType={"next"}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'trussNumber9RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber9RepBambelloPlant1.toString()}
                />
                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />



                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  returnKeyType={"next"}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits9RepBambelloPlant1')}
                  blurOnSubmit={false}
                  value={this.state.setFruits9RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  returnKeyType={"next"}
                  enablesReturnKeyAutomatically={true}
                  blurOnSubmit={false}
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers9RepBambelloPlant1')}
                  value={this.state.setFlowers9RepBambelloPlant1.toString()}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />


                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9RepBambelloPlant1')}
                  value={this.state.pruningNumber9RepBambelloPlant1.toString()}
                />


                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

                <TextInput
                  style={styles.bottonColor}
                  underlineColorAndroid="black"
                  placeholderTextColor="#000000"
                  autoCapitalize="none"
                  multiline={false}
                  keyboardType={'numeric'}
                  autoCorrect={false}
                  enablesReturnKeyAutomatically={true}
                  returnKeyType={"done"}
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9RepBambelloPlant1')}
                />

                <View
                  style={{
                    borderRightColor: 'black',
                    borderRightWidth: 1,
                  }}
                />

              </View>

              <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />



              <View
                style={{
                  marginBottom: 20
                }}
              />



              <View style={styles.marginDimensionTop}></View>

              <View style={styles.borderEditTruss}>

                <View style={[(this.state.fruitLoadRepBambelloPlant1 <= 22 || this.state.fruitLoadRepBambelloPlant1 >= 40) ? styles.borderErrorColor : null]}>

                  <View
                    style={{
                      marginTop: 1
                    }}
                  />

                  <View style={styles.row}>
                    <Text style={styles.text4}>Fruit Load</Text>
                    <Text style={styles.text5}>{this.state.fruitLoadRepBambelloPlant1}</Text>
                  </View>

                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />

                </View>

                <View style={[(this.state.floweringTrussssRepBambelloPlant1 <= 0 || this.state.floweringTrussssRepBambelloPlant1 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Flowering Truss</Text>
                    <Text style={styles.text5}>{this.state.floweringTrussssRepBambelloPlant1}</Text>
                  </View>


                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.settingTrussNumberRepBambelloPlant1 <= 1 || this.state.settingTrussNumberRepBambelloPlant1 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Setting Truss</Text>
                    <Text style={styles.text5}>{this.state.settingTrussNumberRepBambelloPlant1}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.floweringTrussssRepBambelloPlant1 <= 0 || this.state.floweringTrussssRepBambelloPlant1 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Harvest Truss</Text>
                    <Text style={styles.text5}>{this.state.harvestTrussRepBambelloPlant1}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>
              </View>

              <View style={styles.marginDimensionTop}></View>


              <CheckBox style={styles.styleCheckbox}
                size={40}
                uncheckedColor='red'
                checkedColor="green"
                title="Bambello plant 1 completed"
                checked={this.state.bambelloPlant1Selected}
                textStyle={{ fontSize: 22 }}
                containerStyle={{ backgroundColor: 'transparent' }}
                onPress={() => this.changeCheckbox()} />


            </View>

          </View>

        </ScrollView>

      </View >
      // </Mutation>
    );
  }
}

export default RepBambelloPlant1
// const mapStateToProps = (state: State) => ({
//   count: state.form.formSubmit
// });
// export default connect(mapStateToProps, { setFormSubmit })(RepBambelloPlant1);

const styles = StyleSheet.create({



  container: {
    flex: 1,
    backgroundColor: '#F3F9FF'
  },

  styleCheckBox: {

    borderRadius: 3

  },

  borderEditTruss: {
    marginTop: 8,
    marginLeft: 6,
    marginRight: 6,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'rgba(192,192,192,0.55)',
  },

  text4: {
    //color: '#110A6A',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,

  },

  borderErrorColor: {

    backgroundColor: 'rgba(255,0,0,0.3)',

  },

  text5: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,

  },


  textTitle: {

    //color: '#110A6A',
    color: '#2C3E50',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 10,
  },

  textLastWeek: {

    //color: '#110A6A',
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    marginRight: 40,
  },

  rowContainer222: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  rowContainer21: {
    flexDirection: 'row',
    justifyContent: 'space-around',

  },

  text222: {
    color: '#2C903D',
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 60,
    margin: 12

  },

  row: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },



  borderEdit: {

    marginTop: 20,
    backgroundColor: '#EFEFEF',
    borderRadius: 13,
    borderRadius: 10,
    borderColor: '#EFEFEF',
    borderWidth: 1,
    width: 470,

  },

  backgroundColour: {

    padding: 10,
    backgroundColor: '#EFEFEF',
    borderRadius: 10,
    borderColor: '#EFEFEF',
    borderWidth: 1,




  },

  formContainer: {

    borderRadius: 5,
    padding: 10,
    margin: 20,
    marginRight: 20,
    height: '100%',
    width: '95%'

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

  textInputStyle: {
    fontSize: 22,
    color: 'black',
    height: 60,
    backgroundColor: '#ffffff',
  },

  lastWeekNumber: {

    fontSize: 18,
    color: 'black',

  },

  marginDimensionTop: {

    marginTop: 25,

  },

  marginSmallDimensionTop: {

    marginTop: 18,

  },

  marginXSmallDimensionTop: {

    marginTop: 10,

  },

  textinputheight2: {

    height: 60,
    width: 40,
    borderBottomWidth: 3.5,
    borderBottomColor: '#ff0000',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000'


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
  textinputheight: {

    height: 60,
    width: 40,
    //borderBottomWidth: 1.2,
    //borderBottomColor: 'black',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000'


  },

  textinputheight2: {

    height: 60,
    width: 40,
    borderBottomWidth: 3.5,
    borderBottomColor: '#ff0000',
    marginBottom: 5,
    textAlign: 'center',
    color: '#000000'


  },

  yellowBackground: {

    backgroundColor: '#ffff00'

  },

  bottonColor: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'black',
    marginBottom: 5,
    height: 60,
    width: 40,
    textAlign: 'center',
    color: '#000000'
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

  text2: {
    margin: 6,
    margin: 20,
    fontSize: 28,
    color: '#2C3E50',
    fontWeight: 'bold',
    alignSelf: 'center',
    textDecorationLine: 'underline',

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

  buttonText: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    //fontStyle: 'italic'

  },

  screenScrolling: {

    flex: 1,
    width: screenWidth,
    backgroundColor: '#F3F9FF'


  },

});