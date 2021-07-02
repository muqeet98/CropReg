import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Platform, Dimensions, Keyboard
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage';
import { CheckBox } from 'react-native-elements'
import Database from './Database'
import { LogBox } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
const db = new Database();

export default class RepBambelloPlant5 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantRepBambelloPlant5 = this.onSubmitleavesPerPlantRepBambelloPlant5.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantRepBambelloPlant5Ref = this.updateRef.bind(this, 'leavesPerPlantRepBambelloPlant5');
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

      //Plants
      weekNumber: '',
      size: { width, height },
      plantId: '',
      plantRow: '',
      plantName: '',
      plantWeek: '',
      leavesPerPlantRepBambelloPlant5: '',
      fullySetTrussRepBambelloPlant5: '',
      setTrussLengthRepBambelloPlant5: '',
      weeklyGrowthRepBambelloPlant5: '',
      floweringTrussHeightRepBambelloPlant5: '',
      leafLengthRepBambelloPlant5: '',
      leafWidthRepBambelloPlant5: '',
      stmDiameterRepBambelloPlant5: '',
      lastWeekStmDiameterRepBambelloPlant5: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberRepBambelloPlant5: '',
      setFruitsRepBambelloPlant5: '',
      setFlowersRepBambelloPlant5: '',
      pruningNumberRepBambelloPlant5: '',
      fruitDiameterRepBambelloPlant5: '',

      trussNumber1RepBambelloPlant5: '',
      setFruits1RepBambelloPlant5: '',
      setFlowers1RepBambelloPlant5: '',
      pruningNumber1RepBambelloPlant5: '',
      fruitDiameter1RepBambelloPlant5: '',

      trussNumber2RepBambelloPlant5: '',
      setFruits2RepBambelloPlant5: '',
      setFlowers2RepBambelloPlant5: '',
      pruningNumber2RepBambelloPlant5: '',
      fruitDiameter2RepBambelloPlant5: '',

      trussNumber3RepBambelloPlant5: '',
      setFruits3RepBambelloPlant5: '',
      setFlowers3RepBambelloPlant5: '',
      pruningNumber3RepBambelloPlant5: '',
      fruitDiameter3RepBambelloPlant5: '',

      trussNumber4RepBambelloPlant5: '',
      setFruits4RepBambelloPlant5: '',
      setFlowers4RepBambelloPlant5: '',
      pruningNumber4RepBambelloPlant5: '',
      fruitDiameter4RepBambelloPlant5: '',

      trussNumber5RepBambelloPlant5: '',
      setFruits5RepBambelloPlant5: '',
      setFlowers5RepBambelloPlant5: '',
      pruningNumber5RepBambelloPlant5: '',
      fruitDiameter5RepBambelloPlant5: '',

      trussNumber6RepBambelloPlant5: '',
      setFruits6RepBambelloPlant5: '',
      setFlowers6RepBambelloPlant5: '',
      pruningNumber6RepBambelloPlant5: '',
      fruitDiameter6RepBambelloPlant5: '',

      trussNumber7RepBambelloPlant5: '',
      setFruits7RepBambelloPlant5: '',
      setFlowers7RepBambelloPlant5: '',
      pruningNumber7RepBambelloPlant5: '',
      fruitDiameter7RepBambelloPlant5: '',

      trussNumber8RepBambelloPlant5: '',
      setFruits8RepBambelloPlant5: '',
      setFlowers8RepBambelloPlant5: '',
      pruningNumber8RepBambelloPlant5: '',
      fruitDiameter8RepBambelloPlant5: '',

      trussNumber9RepBambelloPlant5: '',
      setFruits9RepBambelloPlant5: '',
      setFlowers9RepBambelloPlant5: '',
      pruningNumber9RepBambelloPlant5: '',
      fruitDiameter9RepBambelloPlant5: '',

      fruitLoadRepBambelloPlant5: '',
      harvestTrussRepBambelloPlant5: '',
      pruningHarRepBambelloPlant5: '',
      settingTrussNumberRepBambelloPlant5: '',
      prunSettingRepBambelloPlant5: '',
      pruneFloweringRepBambelloPlant5: '',

      floweringTrussNumberRepBambelloPlant5: '',
      settingTrussRepBambelloPlant5: '',
      settingTruss2RepBambelloPlant5: '',
      floweringTrussssRepBambelloPlant5: '',

      bambelloPlant5Selected: false,
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
      AsyncStorage.getItem('leavesPerPlantRepBambelloPlant5').then((text1Value) => {
        this.setState({ leavesPerPlantRepBambelloPlant5: JSON.parse(text1Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussRepBambelloPlant5').then((text2Value) => {
        this.setState({ fullySetTrussRepBambelloPlant5: JSON.parse(text2Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthRepBambelloPlant5').then((text3Value) => {
        this.setState({ setTrussLengthRepBambelloPlant5: JSON.parse(text3Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthRepBambelloPlant5').then((text4Value) => {
        this.setState({ weeklyGrowthRepBambelloPlant5: JSON.parse(text4Value) });



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightRepBambelloPlant5').then((text5Value) => {
        this.setState({ floweringTrussHeightRepBambelloPlant5: JSON.parse(text5Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthRepBambelloPlant5').then((text6Value) => {
        this.setState({ leafLengthRepBambelloPlant5: JSON.parse(text6Value) });


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthRepBambelloPlant5').then((text7Value) => {
        this.setState({ leafWidthRepBambelloPlant5: JSON.parse(text7Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterRepBambelloPlant5').then((text8Value) => {
        this.setState({ stmDiameterRepBambelloPlant5: JSON.parse(text8Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepBambelloPlant5').then((text9Value) => {
        this.setState({ lastWeekStmDiameterRepBambelloPlant5: JSON.parse(text9Value) });


      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('bambelloPlant5Selected').then((text99Value) => {
        this.setState({ bambelloPlant5Selected: JSON.parse(text99Value) });

        console.log(this.state.bambelloPlant5Selected)

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('trussNumberRepBambelloPlant5').then((text10Value) => {

        if (text10Value !== null) {
          this.setState({ trussNumberRepBambelloPlant5: JSON.parse(text10Value) });

          this.setState({ trussNumber1RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 1 })
          this.setState({ trussNumber2RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 2 })
          this.setState({ trussNumber3RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 3 })
          this.setState({ trussNumber4RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 4 })
          this.setState({ trussNumber5RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 5 })
          this.setState({ trussNumber6RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 6 })
          this.setState({ trussNumber7RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 7 })
          this.setState({ trussNumber8RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 8 })
          this.setState({ trussNumber9RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 9 })

        }

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFruitsRepBambelloPlant5').then((text11Value) => {
        if (text11Value !== null) {

          this.setState({ setFruitsRepBambelloPlant5: JSON.parse(text11Value) });

        }


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('setFlowersRepBambelloPlant5').then((text12Value) => {

        if (text12Value !== null) {

          this.setState({ setFlowersRepBambelloPlant5: JSON.parse(text12Value) });

        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumberRepBambelloPlant5').then((text13Value) => {
        if (text13Value !== null) {
          this.setState({ pruningNumberRepBambelloPlant5: JSON.parse(text13Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameterRepBambelloPlant5').then((text14Value) => {

        if (text14Value !== null) {
          this.setState({ fruitDiameterRepBambelloPlant5: JSON.parse(text14Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1RepBambelloPlant5').then((text16Value) => {

        if (text16Value !== null) {
          this.setState({ setFruits1RepBambelloPlant5: JSON.parse(text16Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers1RepBambelloPlant5').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFlowers1RepBambelloPlant5: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber1RepBambelloPlant5').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ pruningNumber1RepBambelloPlant5: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter1RepBambelloPlant5').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ fruitDiameter1RepBambelloPlant5: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2RepBambelloPlant5').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFruits2RepBambelloPlant5: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers2RepBambelloPlant5').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ setFlowers2RepBambelloPlant5: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber2RepBambelloPlant5').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ pruningNumber2RepBambelloPlant5: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter2RepBambelloPlant5').then((text20Value) => {

        if (text20Value !== null) {
          this.setState({ fruitDiameter2RepBambelloPlant5: JSON.parse(text20Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3RepBambelloPlant5').then((text21Value) => {

        if (text21Value !== null) {
          this.setState({ setFruits3RepBambelloPlant5: JSON.parse(text21Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers3RepBambelloPlant5').then((text22Value) => {

        if (text22Value !== null) {
          this.setState({ setFlowers3RepBambelloPlant5: JSON.parse(text22Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber3RepBambelloPlant5').then((text23Value) => {

        if (text23Value !== null) {
          this.setState({ pruningNumber3RepBambelloPlant5: JSON.parse(text23Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter3RepBambelloPlant5').then((text24Value) => {

        if (text24Value !== null) {
          this.setState({ fruitDiameter3RepBambelloPlant5: JSON.parse(text24Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4RepBambelloPlant5').then((text25Value) => {

        if (text25Value !== null) {
          this.setState({ setFruits4RepBambelloPlant5: JSON.parse(text25Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers4RepBambelloPlant5').then((text26Value) => {

        if (text26Value !== null) {
          this.setState({ setFlowers4RepBambelloPlant5: JSON.parse(text26Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber4RepBambelloPlant5').then((text27Value) => {

        if (text27Value !== null) {
          this.setState({ pruningNumber4RepBambelloPlant5: JSON.parse(text27Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter4RepBambelloPlant5').then((text28Value) => {

        if (text28Value !== null) {
          this.setState({ fruitDiameter4RepBambelloPlant5: JSON.parse(text28Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5RepBambelloPlant5').then((text29Value) => {

        if (text29Value !== null) {
          this.setState({ setFruits5RepBambelloPlant5: JSON.parse(text29Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers5RepBambelloPlant5').then((text30Value) => {

        if (text30Value !== null) {
          this.setState({ setFlowers5RepBambelloPlant5: JSON.parse(text30Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber5RepBambelloPlant5').then((text31Value) => {

        if (text31Value !== null) {
          this.setState({ pruningNumber5RepBambelloPlant5: JSON.parse(text31Value) });
        }


      }).done();
    } catch (error) {
    }
    try {

      AsyncStorage.getItem('fruitDiameter5RepBambelloPlant5').then((text32Value) => {
        if (text32Value !== null) {
          this.setState({ fruitDiameter5RepBambelloPlant5: JSON.parse(text32Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6RepBambelloPlant5').then((text33Value) => {

        if (text33Value !== null) {
          this.setState({ setFruits6RepBambelloPlant5: JSON.parse(text33Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers6RepBambelloPlant5').then((text34Value) => {

        if (text34Value !== null) {
          this.setState({ setFlowers6RepBambelloPlant5: JSON.parse(text34Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber6RepBambelloPlant5').then((text35Value) => {

        if (text35Value !== null) {
          this.setState({ pruningNumber6RepBambelloPlant5: JSON.parse(text35Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter6RepBambelloPlant5').then((text36Value) => {

        if (text36Value !== null) {
          this.setState({ fruitDiameter6RepBambelloPlant5: JSON.parse(text36Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7RepBambelloPlant5').then((text37Value) => {

        if (text37Value !== null) {
          this.setState({ setFruits7RepBambelloPlant5: JSON.parse(text37Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers7RepBambelloPlant5').then((text38Value) => {

        if (text38Value !== null) {

          this.setState({ setFlowers7RepBambelloPlant5: JSON.parse(text38Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber7RepBambelloPlant5').then((text39Value) => {

        if (text39Value !== null) {
          this.setState({ pruningNumber7RepBambelloPlant5: JSON.parse(text39Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter7RepBambelloPlant5').then((text40Value) => {

        if (text40Value !== null) {
          this.setState({ fruitDiameter7RepBambelloPlant5: JSON.parse(text40Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8RepBambelloPlant5').then((text41Value) => {

        if (text41Value !== null) {
          this.setState({ setFruits8RepBambelloPlant5: JSON.parse(text41Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers8RepBambelloPlant5').then((text42Value) => {

        if (text42Value !== null) {
          this.setState({ setFlowers8RepBambelloPlant5: JSON.parse(text42Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber8RepBambelloPlant5').then((text43Value) => {

        if (text43Value !== null) {
          this.setState({ pruningNumber8RepBambelloPlant5: JSON.parse(text43Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter8RepBambelloPlant5').then((text44Value) => {

        if (text44Value !== null) {
          this.setState({ fruitDiameter8RepBambelloPlant5: JSON.parse(text44Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9RepBambelloPlant5').then((text45Value) => {

        if (text45Value !== null) {
          this.setState({ setFruits9RepBambelloPlant5: JSON.parse(text45Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers9RepBambelloPlant5').then((text46Value) => {

        if (text46Value !== null) {
          this.setState({ setFlowers9RepBambelloPlant5: JSON.parse(text46Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber9RepBambelloPlant5').then((text47Value) => {

        if (text47Value !== null) {
          this.setState({ pruningNumber9RepBambelloPlant5: JSON.parse(text47Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter9RepBambelloPlant5').then((text48Value) => {

        if (text48Value !== null) {
          this.setState({ fruitDiameter9RepBambelloPlant5: JSON.parse(text48Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadRepBambelloPlant5').then((text49Value) => {
        if (text49Value !== null) {
          this.setState({ fruitLoadRepBambelloPlant5: JSON.parse(text49Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('floweringTrussssRepBambelloPlant5').then((text50Value) => {

        if (text50Value !== null) {
          this.setState({ floweringTrussssRepBambelloPlant5: JSON.parse(text50Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('settingTrussNumberRepBambelloPlant5').then((text51Value) => {

        if (text51Value !== null) {
          this.setState({ settingTrussNumberRepBambelloPlant5: JSON.parse(text51Value) });
        }



      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('harvestTrussRepBambelloPlant5').then((text52Value) => {

        if (text52Value !== null) {
          this.setState({ harvestTrussRepBambelloPlant5: JSON.parse(text52Value) });
        }


      }).done();
    } catch (error) {
    }






    /*try {
      AsyncStorage.getItem('trussNumberRepBambelloPlant5').then((text10Value) => {
        this.setState({ trussNumberRepBambelloPlant5: JSON.parse(text10Value) });
        console.log(this.state.trussNumberRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsRepBambelloPlant5').then((text11Value) => {
        this.setState({ setFruitsRepBambelloPlant5: JSON.parse(text11Value) });
        console.log(this.state.setFruitsRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersRepBambelloPlant5').then((text12Value) => {
        this.setState({ setFlowersRepBambelloPlant5: JSON.parse(text12Value) });
        console.log(this.state.setFlowersRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberRepBambelloPlant5').then((text13Value) => {
        this.setState({ pruningNumberRepBambelloPlant5: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterRepBambelloPlant5').then((text14Value) => {
        this.setState({ fruitDiameterRepBambelloPlant5: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterRepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1RepBambelloPlant5').then((text15Value) => {
        this.setState({ setFruits1RepBambelloPlant5: JSON.parse(text15Value) });
        console.log(this.state.setFruits1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1RepBambelloPlant5').then((text16Value) => {
        this.setState({ setFlowers1RepBambelloPlant5: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1RepBambelloPlant5').then((text17Value) => {
        this.setState({ pruningNumber1RepBambelloPlant5: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1RepBambelloPlant5').then((text18Value) => {
        this.setState({ fruitDiameter1RepBambelloPlant5: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2RepBambelloPlant5').then((text19Value) => {
        this.setState({ setFruits2RepBambelloPlant5: JSON.parse(text19Value) });
        console.log(this.state.setFruits2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2RepBambelloPlant5').then((text20Value) => {
        this.setState({ setFlowers2RepBambelloPlant5: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2RepBambelloPlant5').then((text21Value) => {
        this.setState({ pruningNumber2RepBambelloPlant5: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2RepBambelloPlant5').then((text22Value) => {
        this.setState({ fruitDiameter2RepBambelloPlant5: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3RepBambelloPlant5').then((text23Value) => {
        this.setState({ setFruits3RepBambelloPlant5: JSON.parse(text23Value) });
        console.log(this.state.setFruits3RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3RepBambelloPlant5').then((text24Value) => {
        this.setState({ setFlowers3RepBambelloPlant5: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3RepBambelloPlant5').then((text25Value) => {
        this.setState({ pruningNumber3RepBambelloPlant5: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3RepBambelloPlant5)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3RepBambelloPlant5').then((text26Value) => {
        this.setState({ fruitDiameter3RepBambelloPlant5: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3RepBambelloPlant5)



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

    this.setState({ trussNumber1RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 1 })
    this.setState({ trussNumber2RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 2 })
    this.setState({ trussNumber3RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 3 })
    this.setState({ trussNumber4RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 4 })
    this.setState({ trussNumber5RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 5 })
    this.setState({ trussNumber6RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 6 })
    this.setState({ trussNumber7RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 7 })
    this.setState({ trussNumber8RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 8 })
    this.setState({ trussNumber9RepBambelloPlant5: parseInt(this.state.trussNumberRepBambelloPlant5) + 9 })


    if (this.state.trussNumberRepBambelloPlant5 !== "") {

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
    sum = ((parseInt(this.state.setFruitsRepBambelloPlant5) ? parseInt(this.state.setFruitsRepBambelloPlant5) : 0) + (parseInt(this.state.setFruits1RepBambelloPlant5) ? parseInt(this.state.setFruits1RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits2RepBambelloPlant5) ? parseInt(this.state.setFruits2RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits3RepBambelloPlant5) ? parseInt(this.state.setFruits3RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits4RepBambelloPlant5) ? parseInt(this.state.setFruits4RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits5RepBambelloPlant5) ? parseInt(this.state.setFruits5RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits6RepBambelloPlant5) ? parseInt(this.state.setFruits6RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits7RepBambelloPlant5) ? parseInt(this.state.setFruits7RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits8RepBambelloPlant5) ? parseInt(this.state.setFruits8RepBambelloPlant5) : 0) + (parseInt(this.state.setFruits9RepBambelloPlant5) ? parseInt(this.state.setFruits9RepBambelloPlant5) : 0));
    this.setState({
      fruitLoadRepBambelloPlant5: sum,
    });

    this.setItem("fruitLoadRepBambelloPlant5", this.state.fruitLoadRepBambelloPlant5)

    console.log("Fruit Load : " + sum);



  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersRepBambelloPlant5 === "") {

      prunNum = parseInt(this.state.pruningNumberRepBambelloPlant5)

      div = (parseInt((this.state.setFruitsRepBambelloPlant5) ? (this.state.setFruitsRepBambelloPlant5) : 0) / parseFloat((this.state.pruningNumberRepBambelloPlant5) ? (this.state.pruningNumberRepBambelloPlant5) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberRepBambelloPlant5) ? parseInt(this.state.trussNumberRepBambelloPlant5) : 0) + sub).toFixed(2))
      this.setState({
        harvestTrussRepBambelloPlant5: add,
        pruningHar: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberRepBambelloPlant5)
      var num = this.state.trussNumberRepBambelloPlant5

      this.setState({
        harvestTrussRepBambelloPlant5: num,
        pruningHar: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);

    this.setItem("harvestTrussRepBambelloPlant5", this.state.harvestTrussRepBambelloPlant5)



  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2RepBambelloPlant5);

    if (this.state.setFruits9RepBambelloPlant5 === "") {

      if (this.state.setFruits8RepBambelloPlant5 === "") {

        if (this.state.setFruits7RepBambelloPlant5 === "") {

          if (this.state.setFruits6RepBambelloPlant5 === "") {

            if (this.state.setFruits5RepBambelloPlant5 === "") {

              if (this.state.setFruits4RepBambelloPlant5 === "") {

                if (this.state.setFruits3RepBambelloPlant5 === "") {

                  if (this.state.setFruits2RepBambelloPlant5 === "") {

                    if (this.state.setFruits1RepBambelloPlant5 === "") {

                      if (this.state.setFruitsRepBambelloPlant5 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberRepBambelloPlant5);
                        trussNum = parseInt(this.state.trussNumberRepBambelloPlant5);
                        settingFruit = parseInt(this.state.setFruitsRepBambelloPlant5);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumberRepBambelloPlant5: settingTruss,
                          settingTruss: trussNum,
                          prunSetting: pruningSet,

                        });

                        this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)

                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberRepBambelloPlant5) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1RepBambelloPlant5);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1RepBambelloPlant5);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumberRepBambelloPlant5: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                      });

                      this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2RepBambelloPlant5);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2RepBambelloPlant5);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumberRepBambelloPlant5: settingTruss,
                      settingTruss: trussNum,
                      prunSetting: pruningSet,

                    });
                    this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3RepBambelloPlant5);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3RepBambelloPlant5);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumberRepBambelloPlant5: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                  });

                  this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


                }

              } else {

                var number4 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 4)

                pruningSet = parseInt(this.state.pruningNumber4RepBambelloPlant5);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4RepBambelloPlant5);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumberRepBambelloPlant5: settingTruss,
                  settingTruss: trussNum,
                  prunSetting: pruningSet,

                });

                this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


              }

            } else {

              var number5 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 5)

              pruningSet = parseInt(this.state.pruningNumber5RepBambelloPlant5);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5RepBambelloPlant5);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumberRepBambelloPlant5: settingTruss,
                settingTruss: trussNum,
                prunSetting: pruningSet,

              });

              this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)



            }

          } else {

            var number6 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 6)

            pruningSet = parseInt(this.state.pruningNumber6RepBambelloPlant5);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6RepBambelloPlant5);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumberRepBambelloPlant5: settingTruss,
              settingTruss: trussNum,
              prunSetting: pruningSet,

            });

            this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 7)

          pruningSet = parseInt(this.state.pruningNumber7RepBambelloPlant5);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7RepBambelloPlant5);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumberRepBambelloPlant5: settingTruss,
            settingTruss: trussNum,
            prunSetting: pruningSet,

          });

          this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)

        }

      } else {

        var number8 = (parseInt(this.state.trussNumberRepBambelloPlant5) + 8)

        pruningSet = parseInt(this.state.pruningNumber8RepBambelloPlant5);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8RepBambelloPlant5);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumberRepBambelloPlant5: settingTruss,
          settingTruss: trussNum,
          prunSetting: pruningSet,

        });

        this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberRepBambelloPlant5) + 9)

      pruningSet = parseInt(this.state.pruningNumber9RepBambelloPlant5);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9RepBambelloPlant5);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumberRepBambelloPlant5: settingTruss,
        settingTruss2: trussNum,
        prunSetting: pruningSet,
      });

      this.setItem("settingTrussNumberRepBambelloPlant5", settingTruss)


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

    console.log("Flowering truss called : " + this.state.setFlowers2RepBambelloPlant5);


    if (this.state.setFlowers9RepBambelloPlant5 === "") {

      if (this.state.setFlowers8RepBambelloPlant5 === "") {

        if (this.state.setFlowers7RepBambelloPlant5 === "") {

          if (this.state.setFlowers6RepBambelloPlant5 === "") {

            if (this.state.setFlowers5RepBambelloPlant5 === "") {

              if (this.state.setFlowers4RepBambelloPlant5 === "") {

                if (this.state.setFlowers3RepBambelloPlant5 === "") {

                  if (this.state.setFlowers2RepBambelloPlant5 === "") {

                    if (this.state.setFlowers1RepBambelloPlant5 === "") {

                      if (this.state.setFlowersRepBambelloPlant5 === "") {


                      } else {

                        var number01 = this.state.trussNumberRepBambelloPlant5


                        flowerPruningNumner = parseInt(this.state.pruningNumberRepBambelloPlant5);
                        flowering = parseInt(this.state.setFlowersRepBambelloPlant5);
                        flowerSetFruits = parseInt(this.state.setFruitsRepBambelloPlant5);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussssRepBambelloPlant5: floweringTruss,
                          pruneFlowering: flowerPruningNumner,
                        });
                        this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)

                      }


                    } else {

                      var number11 = + (this.state.trussNumberRepBambelloPlant5) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1RepBambelloPlant5);
                      flowering = parseInt(this.state.setFlowers1RepBambelloPlant5);
                      flowerSetFruits = parseInt(this.state.setFruits1RepBambelloPlant5);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussssRepBambelloPlant5: floweringTruss,
                        pruneFlowering: flowerPruningNumner,

                      });
                      this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


                    }


                  } else {

                    var number21 = + (this.state.trussNumberRepBambelloPlant5) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2RepBambelloPlant5);
                    flowering = parseInt(this.state.setFlowers2RepBambelloPlant5);
                    flowerSetFruits = parseInt(this.state.setFruits2RepBambelloPlant5);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussssRepBambelloPlant5: floweringTruss,
                      pruneFlowering: flowerPruningNumner,

                    });
                    this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


                  }


                } else {

                  var number31 = + (this.state.trussNumberRepBambelloPlant5) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3RepBambelloPlant5);
                  flowering = parseInt(this.state.setFlowers3RepBambelloPlant5);
                  flowerSetFruits = parseInt(this.state.setFruits3RepBambelloPlant5);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussssRepBambelloPlant5: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                  });

                  this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)

                }


              } else {

                var number41 = + (this.state.trussNumberRepBambelloPlant5) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4RepBambelloPlant5);
                flowering = parseInt(this.state.setFlowers4RepBambelloPlant5);
                flowerSetFruits = parseInt(this.state.setFruits4RepBambelloPlant5);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussssRepBambelloPlant5: floweringTruss,
                  pruneFlowering: flowerPruningNumner,

                });

                this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


              }


            } else {

              var number51 = + (this.state.trussNumberRepBambelloPlant5) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5RepBambelloPlant5);
              flowering = parseInt(this.state.setFlowers5RepBambelloPlant5);
              flowerSetFruits = parseInt(this.state.setFruits5RepBambelloPlant5);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussssRepBambelloPlant5: floweringTruss,
                pruneFlowering: flowerPruningNumner,

              });

              this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


            }


          } else {

            var number61 = + (this.state.trussNumberRepBambelloPlant5) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6RepBambelloPlant5);
            flowering = parseInt(this.state.setFlowers6RepBambelloPlant5);
            flowerSetFruits = parseInt(this.state.setFruits6RepBambelloPlant5);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussssRepBambelloPlant5: floweringTruss,
              pruneFlowering: flowerPruningNumner,

            });

            this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


          }


        } else {

          var number71 = + (this.state.trussNumberRepBambelloPlant5) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7RepBambelloPlant5);
          flowering = parseInt(this.state.setFlowers7RepBambelloPlant5);
          flowerSetFruits = parseInt(this.state.setFruits7RepBambelloPlant5);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussssRepBambelloPlant5: floweringTruss,
            pruneFlowering: flowerPruningNumner,

          });

          this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


        }


      } else {
        var number81 = + (this.state.trussNumberRepBambelloPlant5) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8RepBambelloPlant5);
        flowering = parseInt(this.state.setFlowers8RepBambelloPlant5);
        flowerSetFruits = parseInt(this.state.setFruits8RepBambelloPlant5);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussssRepBambelloPlant5: floweringTruss,
          pruneFlowering: flowerPruningNumner,

        });

        this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


      }


    } else {

      var number91 = + (this.state.trussNumberRepBambelloPlant5) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9RepBambelloPlant5);
      flowering = parseInt(this.state.setFlowers9RepBambelloPlant5);
      flowerSetFruits = parseInt(this.state.setFruits9RepBambelloPlant5);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussssRepBambelloPlant5: floweringTruss,
        pruneFlowering: flowerPruningNumner,

      });

      this.setItem("floweringTrussssRepBambelloPlant5", floweringTruss)


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
           this.calculateharvestTrussRepBambelloPlant5();
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

    this.setState({ bambelloPlant5Selected: !this.state.bambelloPlant5Selected })

    const vart = this.state.bambelloPlant5Selected

    const vart2 = false;

    if (vart == null) {

      this.setItem('bambelloPlant5Selected', vart2)

      EventRegister.emit('bambelloEventPlant5', vart2)

    } else {

      this.setItem('bambelloPlant5Selected', vart)

      EventRegister.emit('bambelloEventPlant5', vart)

    }

    this.checkStatus();

  }

  checkStatus = () => {

    const vart = this.state.bambelloPlant5Selected

    if (vart == null || vart == false) {

      this.setState({ checkboxStatus: 'CHECKED' })


      let data = {
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        leavesPerPlant: this.state.leavesPerPlantRepBambelloPlant5,
        fullySetTruss: this.state.fullySetTrussRepBambelloPlant5,
        setTrussLength: this.state.setTrussLengthRepBambelloPlant5,
        weeklyGrowth: this.state.weeklyGrowthRepBambelloPlant5,
        floweringTrussHeight: this.state.floweringTrussHeightRepBambelloPlant5,
        leafLength: this.state.leafLengthRepBambelloPlant5,
        leafWidth: this.state.leafWidthRepBambelloPlant5,
        stmDiameter: this.state.stmDiameterRepBambelloPlant5,
        lastWeekStmDiameter: this.state.lastWeekStmDiameterRepBambelloPlant5

      }

      db.addPlants(data).then((result) => {
        console.log(result);

      }).catch((err) => {
        console.log(err);

      })

      this.saveTrussToDb();

    } else {

      this.setState({ checkboxStatus: 'UNCHECKED' })


    }
  }


  saveTrussToDb = () => {

    if (this.state.trussNumberRepBambelloPlant5 !== null && this.state.pruningNumberRepBambelloPlant5 !== null) {

      let data = {
        trussNumber: this.state.trussNumberRepBambelloPlant5,
        fruitDiameter: this.state.fruitDiameterRepBambelloPlant5,
        setFruits: this.state.setFruitsRepBambelloPlant5,
        setFlowers: this.state.setFlowersRepBambelloPlant5,
        pruningNumber: this.state.pruningNumberRepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5


      }


      db.addTrussDetails(data).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 1) !== null && this.state.pruningNumber1RepBambelloPlant5 !== '') {

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


    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 1) != null && this.state.pruningNumber1RepBambelloPlant5 !== null) {


      let data1 = {

        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 1),
        fruitDiameter: this.state.fruitDiameter1RepBambelloPlant5,
        setFruits: this.state.setFruits1RepBambelloPlant5,
        setFlowers: this.state.setFlowers1RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber1RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5



      }




      db.addTrussDetails(data1).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 2) !== null && this.state.pruningNumber2RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 2) != null && this.state.pruningNumber2RepBambelloPlant5 !== null) {


      let data2 = {

        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 2),
        fruitDiameter: this.state.fruitDiameter2RepBambelloPlant5,
        setFruits: this.state.setFruits2RepBambelloPlant5,
        setFlowers: this.state.setFlowers2RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber2RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5

      }




      db.addTrussDetails(data2).then((result) => {
        console.log(result);

        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 3) !== null && this.state.pruningNumber3RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 3) !== null && this.state.pruningNumber3RepBambelloPlant5 !== null) {


      let data3 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 3),
        fruitDiameter: this.state.fruitDiameter3RepBambelloPlant5,
        setFruits: this.state.setFruits3RepBambelloPlant5,
        setFlowers: this.state.setFlowers3RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber3RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5



      }


      db.addTrussDetails(data3).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 4) !== null && this.state.pruningNumber4RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 4) != null && this.state.pruningNumber4RepBambelloPlant5 !== null) {


      let data4 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 4),
        fruitDiameter: this.state.fruitDiameter4RepBambelloPlant5,
        setFruits: this.state.setFruits4RepBambelloPlant5,
        setFlowers: this.state.setFlowers4RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber4RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5



      }



      db.addTrussDetails(data4).then((result) => {

        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 5) !== null && this.state.pruningNumber5RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 5) != null && this.state.pruningNumber5RepBambelloPlant5 !== null) {


      let data5 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 5),
        fruitDiameter: this.state.fruitDiameter5RepBambelloPlant5,
        setFruits: this.state.setFruits5RepBambelloPlant5,
        setFlowers: this.state.setFlowers5RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber5RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5


      }



      db.addTrussDetails(data5).then((result) => {
        console.log(result);
        this.setState({
          isLoading: false,
          isDataSend: true,

        });

        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 6) !== null && this.state.pruningNumber6RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 6) != null && this.state.pruningNumber6RepBambelloPlant5 !== null) {


      let data6 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 6),
        fruitDiameter: this.state.fruitDiameter6RepBambelloPlant5,
        setFruits: this.state.setFruits6RepBambelloPlant5,
        setFlowers: this.state.setFlowers6RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber6RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5

      }



      db.addTrussDetails(data6).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 7) !== null && this.state.pruningNumber7RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 7) != null && this.state.pruningNumber7RepBambelloPlant5 !== null) {


      let data7 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 7),
        fruitDiameter: this.state.fruitDiameter7RepBambelloPlant5,
        setFruits: this.state.setFruits7RepBambelloPlant5,
        setFlowers: this.state.setFlowers7RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber7RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5


      }



      db.addTrussDetails(data7).then((result) => {
        console.log(result);


        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 8) !== null && this.state.pruningNumber8RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 8) != null && this.state.pruningNumber8RepBambelloPlant5 !== null) {


      let data8 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 8),
        fruitDiameter: this.state.fruitDiameter8RepBambelloPlant5,
        setFruits: this.state.setFruits8RepBambelloPlant5,
        setFlowers: this.state.setFlowers8RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber8RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5


      }



      db.addTrussDetails(data8).then((result) => {

        console.log(result);

        if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 9) !== null && this.state.pruningNumber9RepBambelloPlant5 !== '') {

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

    if ((parseInt(this.state.trussNumberRepBambelloPlant5) + 9) != null && this.state.pruningNumber9RepBambelloPlant5 !== null) {



      let data9 = {
        trussNumber: (parseInt(this.state.trussNumberRepBambelloPlant5) + 9),
        fruitDiameter: this.state.fruitDiameter9RepBambelloPlant5,
        setFruits: this.state.setFruits9RepBambelloPlant5,
        setFlowers: this.state.setFlowers9RepBambelloPlant5,
        pruningNumber: this.state.pruningNumber9RepBambelloPlant5,
        plantRow: '807',
        plantName: 'REP - Bambello',
        plantWeek: this.state.weekNumber,
        plantNumber: 5,
        fruitLoad: this.state.fruitLoadRepBambelloPlant5,
        pruningFlower: this.state.pruneFloweringRepBambelloPlant5,
        floweringTruss: this.state.floweringTrussssRepBambelloPlant5,
        pruningSet: this.state.prunSettingRepBambelloPlant5,
        settingTruss: this.state.settingTrussNumberRepBambelloPlant5,
        pruningHarvest: this.state.pruningHarRepBambelloPlant5,
        harvestTruss: this.state.harvestTrussRepBambelloPlant5



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

  onSubmitleavesPerPlantRepBambelloPlant5() {
    this.leavesPerPlantRepBambelloPlant5.focus();
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

    ['leavesPerPlantRepBambelloPlant5', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
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

        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 5</Text>/ Row No. 807/ Week No. {this.state.weekNumber}</Text>


        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

          <View pointerEvents={this.state.bambelloPlant5Selected ? 'none' : 'auto'}>


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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantRepBambelloPlant5')}
                      value={this.state.leavesPerPlantRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussRepBambelloPlant5')}
                      value={this.state.fullySetTrussRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthRepBambelloPlant5')}
                      value={this.state.setTrussLengthRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthRepBambelloPlant5')}
                      value={this.state.weeklyGrowthRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightRepBambelloPlant5')}
                      value={this.state.floweringTrussHeightRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthRepBambelloPlant5')}
                      value={this.state.leafLengthRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthRepBambelloPlant5')}
                      value={this.state.leafWidthRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterRepBambelloPlant5')}
                      value={this.state.stmDiameterRepBambelloPlant5}
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
                      onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterRepBambelloPlant5')}
                      value={this.state.lastWeekStmDiameterRepBambelloPlant5}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumberRepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumberRepBambelloPlant5}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruitsRepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruitsRepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowersRepBambelloPlant5')}
                  value={this.state.setFlowersRepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumberRepBambelloPlant5')}
                  value={this.state.pruningNumberRepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterRepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber1RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits1RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits1RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers1RepBambelloPlant5')}
                  value={this.state.setFlowers1RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1RepBambelloPlant5')}
                  value={this.state.pruningNumber1RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber2RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits2RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits2RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers2RepBambelloPlant5')}
                  value={this.state.setFlowers2RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2RepBambelloPlant5')}
                  value={this.state.pruningNumber2RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber3RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits3RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits3RepBambelloPlant5.toString()} />

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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers3RepBambelloPlant5')}
                  value={this.state.setFlowers3RepBambelloPlant5.toString()} />

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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3RepBambelloPlant5')}
                  value={this.state.pruningNumber3RepBambelloPlant5.toString()} />


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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber4RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits4RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits4RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers4RepBambelloPlant5')}
                  value={this.state.setFlowers4RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4RepBambelloPlant5')}
                  value={this.state.pruningNumber4RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber5RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits5RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits5RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers5RepBambelloPlant5')}
                  value={this.state.setFlowers5RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5RepBambelloPlant5')}
                  value={this.state.pruningNumber5RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber6RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits6RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits6RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers6RepBambelloPlant5')}
                  value={this.state.setFlowers6RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6RepBambelloPlant5')}
                  value={this.state.pruningNumber6RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber7RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits7RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits7RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers7RepBambelloPlant5')}
                  value={this.state.setFlowers7RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7RepBambelloPlant5')}
                  value={this.state.pruningNumber7RepBambelloPlant5.toString()}

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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber8RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits8RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits8RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers8RepBambelloPlant5')}
                  value={this.state.setFlowers8RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8RepBambelloPlant5')}
                  value={this.state.pruningNumber8RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8RepBambelloPlant5')}
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
                  onChangeText={(text) => this.updateTextInput(text, 'trussNumber9RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.trussNumber9RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFruits9RepBambelloPlant5')}
                  blurOnSubmit={false}
                  value={this.state.setFruits9RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'setFlowers9RepBambelloPlant5')}
                  value={this.state.setFlowers9RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9RepBambelloPlant5')}
                  value={this.state.pruningNumber9RepBambelloPlant5.toString()}
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
                  onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9RepBambelloPlant5')}
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

                <View style={[(this.state.fruitLoadRepBambelloPlant5 <= 22 || this.state.fruitLoadRepBambelloPlant5 >= 40) ? styles.borderErrorColor : null]}>

                  <View
                    style={{
                      marginTop: 1
                    }}
                  />

                  <View style={styles.row}>
                    <Text style={styles.text4}>Fruit Load</Text>
                    <Text style={styles.text5}>{this.state.fruitLoadRepBambelloPlant5}</Text>
                  </View>

                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />

                </View>

                <View style={[(this.state.floweringTrussssRepBambelloPlant5 <= 0 || this.state.floweringTrussssRepBambelloPlant5 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Flowering Truss</Text>
                    <Text style={styles.text5}>{this.state.floweringTrussssRepBambelloPlant5}</Text>
                  </View>


                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.settingTrussNumberRepBambelloPlant5 <= 1 || this.state.settingTrussNumberRepBambelloPlant5 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Setting Truss</Text>
                    <Text style={styles.text5}>{this.state.settingTrussNumberRepBambelloPlant5}</Text>
                  </View>
                  <View
                    style={{
                      marginBottom: 5
                    }}
                  />
                </View>

                <View style={[(this.state.floweringTrussssRepBambelloPlant5 <= 0 || this.state.floweringTrussssRepBambelloPlant5 >= 45) ? styles.borderErrorColor : null]}>
                  <View style={styles.row}>
                    <Text style={styles.text4}>Harvest Truss</Text>
                    <Text style={styles.text5}>{this.state.harvestTrussRepBambelloPlant5}</Text>
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
                title="Bambello Plant 5 completed"
                checked={this.state.bambelloPlant5Selected}
                textStyle={{ fontSize: 22 }}
                containerStyle={{ backgroundColor: 'transparent' }}
                onPress={() => this.changeCheckbox()} />

            </View>

          </View>

        </ScrollView>

      </View >
    );
  }
}

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