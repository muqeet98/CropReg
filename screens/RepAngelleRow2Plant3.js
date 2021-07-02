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


const { width, height } = Dimensions.get('window');
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;


export default class RepAngelleRow2Plant3 extends Component {

  constructor(props) {
    super(props);

    //FOCUS AND REF

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitleavesPerPlantRepAngelleRow2Plant3 = this.onSubmitleavesPerPlantRepAngelleRow2Plant3.bind(this);
    this.onSubmitFullysetTruss = this.onSubmitFullysetTruss.bind(this);
    this.onSubmitTrussLength = this.onSubmitTrussLength.bind(this);
    this.onSubmitWeeklyGrowth = this.onSubmitWeeklyGrowth.bind(this);
    this.onSubmitFlowerTrussHeight = this.onSubmitFlowerTrussHeight.bind(this);
    this.onSubmitLeafLength = this.onSubmitLeafLength.bind(this);
    this.onSubmitLeafWidth = this.onSubmitLeafWidth.bind(this);
    this.onSubmitStmDiameter = this.onSubmitStmDiameter.bind(this);
    this.onSubmitLastWeekStmDiameter = this.onSubmitLastWeekStmDiameter.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);


    this.leavesPerPlantRepAngelleRow2Plant3Ref = this.updateRef.bind(this, 'leavesPerPlantRepAngelleRow2Plant3');
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
      leavesPerPlantRepAngelleRow2Plant3: '',
      fullySetTrussRepAngelleRow2Plant3: '',
      setTrussLengthRepAngelleRow2Plant3: '',
      weeklyGrowthRepAngelleRow2Plant3: '',
      floweringTrussHeightRepAngelleRow2Plant3: '',
      leafLengthRepAngelleRow2Plant3: '',
      leafWidthRepAngelleRow2Plant3: '',
      stmDiameterRepAngelleRow2Plant3: '',
      lastWeekStmDiameterRepAngelleRow2Plant3: '',
      isLoading: false,
      errors: false,

      //Truss
      trussNumberRepAngelleRow2Plant3: '',
      setFruitsRepAngelleRow2Plant3: '',
      setFlowersRepAngelleRow2Plant3: '',
      pruningNumberRepAngelleRow2Plant3: '',
      fruitDiameterRepAngelleRow2Plant3: '',

      trussNumber1RepAngelleRow2Plant3: '',
      setFruits1RepAngelleRow2Plant3: '',
      setFlowers1RepAngelleRow2Plant3: '',
      pruningNumber1RepAngelleRow2Plant3: '',
      fruitDiameter1RepAngelleRow2Plant3: '',

      trussNumber2RepAngelleRow2Plant3: '',
      setFruits2RepAngelleRow2Plant3: '',
      setFlowers2RepAngelleRow2Plant3: '',
      pruningNumber2RepAngelleRow2Plant3: '',
      fruitDiameter2RepAngelleRow2Plant3: '',

      trussNumber3RepAngelleRow2Plant3: '',
      setFruits3RepAngelleRow2Plant3: '',
      setFlowers3RepAngelleRow2Plant3: '',
      pruningNumber3RepAngelleRow2Plant3: '',
      fruitDiameter3RepAngelleRow2Plant3: '',

      trussNumber4RepAngelleRow2Plant3: '',
      setFruits4RepAngelleRow2Plant3: '',
      setFlowers4RepAngelleRow2Plant3: '',
      pruningNumber4RepAngelleRow2Plant3: '',
      fruitDiameter4RepAngelleRow2Plant3: '',

      trussNumber5RepAngelleRow2Plant3: '',
      setFruits5RepAngelleRow2Plant3: '',
      setFlowers5RepAngelleRow2Plant3: '',
      pruningNumber5RepAngelleRow2Plant3: '',
      fruitDiameter5RepAngelleRow2Plant3: '',

      trussNumber6RepAngelleRow2Plant3: '',
      setFruits6RepAngelleRow2Plant3: '',
      setFlowers6RepAngelleRow2Plant3: '',
      pruningNumber6RepAngelleRow2Plant3: '',
      fruitDiameter6RepAngelleRow2Plant3: '',

      trussNumber7RepAngelleRow2Plant3: '',
      setFruits7RepAngelleRow2Plant3: '',
      setFlowers7RepAngelleRow2Plant3: '',
      pruningNumber7RepAngelleRow2Plant3: '',
      fruitDiameter7RepAngelleRow2Plant3: '',

      trussNumber8RepAngelleRow2Plant3: '',
      setFruits8RepAngelleRow2Plant3: '',
      setFlowers8RepAngelleRow2Plant3: '',
      pruningNumber8RepAngelleRow2Plant3: '',
      fruitDiameter8RepAngelleRow2Plant3: '',

      trussNumber9RepAngelleRow2Plant3: '',
      setFruits9RepAngelleRow2Plant3: '',
      setFlowers9RepAngelleRow2Plant3: '',
      pruningNumber9RepAngelleRow2Plant3: '',
      fruitDiameter9RepAngelleRow2Plant3: '',

      fruitLoadRepAngelleRow2Plant3: '',
      harvestTrussRepAngelleRow2Plant3: '',
      pruningHarRepAngelleRow2Plant3: '',
      settingTrussNumberRepAngelleRow2Plant3: '',
      prunSettingRepAngelleRow2Plant3: '',
      pruneFloweringRepAngelleRow2Plant3: '',

      floweringTrussNumberRepAngelleRow2Plant3: '',
      settingTrussRepAngelleRow2Plant3: '',
      settingTruss2RepAngelleRow2Plant3: '',
      floweringTrussssRepAngelleRow2Plant3: '',

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
      AsyncStorage.getItem('leavesPerPlantRepAngelleRow2Plant3').then((text1Value) => {
        this.setState({ leavesPerPlantRepAngelleRow2Plant3: JSON.parse(text1Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fullySetTrussRepAngelleRow2Plant3').then((text2Value) => {
        this.setState({ fullySetTrussRepAngelleRow2Plant3: JSON.parse(text2Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setTrussLengthRepAngelleRow2Plant3').then((text3Value) => {
        this.setState({ setTrussLengthRepAngelleRow2Plant3: JSON.parse(text3Value) });

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('weeklyGrowthRepAngelleRow2Plant3').then((text4Value) => {
        this.setState({ weeklyGrowthRepAngelleRow2Plant3: JSON.parse(text4Value) });



      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('floweringTrussHeightRepAngelleRow2Plant3').then((text5Value) => {
        this.setState({ floweringTrussHeightRepAngelleRow2Plant3: JSON.parse(text5Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('leafLengthRepAngelleRow2Plant3').then((text6Value) => {
        this.setState({ leafLengthRepAngelleRow2Plant3: JSON.parse(text6Value) });


      }).done();
    } catch (error) {
    } try {
      AsyncStorage.getItem('leafWidthRepAngelleRow2Plant3').then((text7Value) => {
        this.setState({ leafWidthRepAngelleRow2Plant3: JSON.parse(text7Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('stmDiameterRepAngelleRow2Plant3').then((text8Value) => {
        this.setState({ stmDiameterRepAngelleRow2Plant3: JSON.parse(text8Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('lastWeekStmDiameterRepAngelleRow2Plant3').then((text9Value) => {
        this.setState({ lastWeekStmDiameterRepAngelleRow2Plant3: JSON.parse(text9Value) });


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('trussNumberRepAngelleRow2Plant3').then((text10Value) => {

        if (text10Value !== null) {
          this.setState({ trussNumberRepAngelleRow2Plant3: JSON.parse(text10Value) });

          this.setState({ trussNumber1RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 1 })
          this.setState({ trussNumber2RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 2 })
          this.setState({ trussNumber3RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 3 })
          this.setState({ trussNumber4RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 4 })
          this.setState({ trussNumber5RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 5 })
          this.setState({ trussNumber6RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 6 })
          this.setState({ trussNumber7RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 7 })
          this.setState({ trussNumber8RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 8 })
          this.setState({ trussNumber9RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 9 })

        }

      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFruitsRepAngelleRow2Plant3').then((text11Value) => {
        if (text11Value !== null) {

          this.setState({ setFruitsRepAngelleRow2Plant3: JSON.parse(text11Value) });

        }


      }).done();
    } catch (error) {
    }


    try {
      AsyncStorage.getItem('setFlowersRepAngelleRow2Plant3').then((text12Value) => {

        if (text12Value !== null) {

          this.setState({ setFlowersRepAngelleRow2Plant3: JSON.parse(text12Value) });

        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumberRepAngelleRow2Plant3').then((text13Value) => {
        if (text13Value !== null) {
          this.setState({ pruningNumberRepAngelleRow2Plant3: JSON.parse(text13Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameterRepAngelleRow2Plant3').then((text14Value) => {

        if (text14Value !== null) {
          this.setState({ fruitDiameterRepAngelleRow2Plant3: JSON.parse(text14Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 1---------------------------------//

    try {
      AsyncStorage.getItem('setFruits1RepAngelleRow2Plant3').then((text16Value) => {

        if (text16Value !== null) {
          this.setState({ setFruits1RepAngelleRow2Plant3: JSON.parse(text16Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers1RepAngelleRow2Plant3').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFlowers1RepAngelleRow2Plant3: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber1RepAngelleRow2Plant3').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ pruningNumber1RepAngelleRow2Plant3: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter1RepAngelleRow2Plant3').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ fruitDiameter1RepAngelleRow2Plant3: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 2---------------------------------//

    try {
      AsyncStorage.getItem('setFruits2RepAngelleRow2Plant3').then((text17Value) => {

        if (text17Value !== null) {
          this.setState({ setFruits2RepAngelleRow2Plant3: JSON.parse(text17Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers2RepAngelleRow2Plant3').then((text18Value) => {

        if (text18Value !== null) {
          this.setState({ setFlowers2RepAngelleRow2Plant3: JSON.parse(text18Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber2RepAngelleRow2Plant3').then((text19Value) => {

        if (text19Value !== null) {
          this.setState({ pruningNumber2RepAngelleRow2Plant3: JSON.parse(text19Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter2RepAngelleRow2Plant3').then((text20Value) => {

        if (text20Value !== null) {
          this.setState({ fruitDiameter2RepAngelleRow2Plant3: JSON.parse(text20Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 3---------------------------------//

    try {
      AsyncStorage.getItem('setFruits3RepAngelleRow2Plant3').then((text21Value) => {

        if (text21Value !== null) {
          this.setState({ setFruits3RepAngelleRow2Plant3: JSON.parse(text21Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers3RepAngelleRow2Plant3').then((text22Value) => {

        if (text22Value !== null) {
          this.setState({ setFlowers3RepAngelleRow2Plant3: JSON.parse(text22Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber3RepAngelleRow2Plant3').then((text23Value) => {

        if (text23Value !== null) {
          this.setState({ pruningNumber3RepAngelleRow2Plant3: JSON.parse(text23Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter3RepAngelleRow2Plant3').then((text24Value) => {

        if (text24Value !== null) {
          this.setState({ fruitDiameter3RepAngelleRow2Plant3: JSON.parse(text24Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 4---------------------------------//

    try {
      AsyncStorage.getItem('setFruits4RepAngelleRow2Plant3').then((text25Value) => {

        if (text25Value !== null) {
          this.setState({ setFruits4RepAngelleRow2Plant3: JSON.parse(text25Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers4RepAngelleRow2Plant3').then((text26Value) => {

        if (text26Value !== null) {
          this.setState({ setFlowers4RepAngelleRow2Plant3: JSON.parse(text26Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber4RepAngelleRow2Plant3').then((text27Value) => {

        if (text27Value !== null) {
          this.setState({ pruningNumber4RepAngelleRow2Plant3: JSON.parse(text27Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter4RepAngelleRow2Plant3').then((text28Value) => {

        if (text28Value !== null) {
          this.setState({ fruitDiameter4RepAngelleRow2Plant3: JSON.parse(text28Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 5---------------------------------//

    try {
      AsyncStorage.getItem('setFruits5RepAngelleRow2Plant3').then((text29Value) => {

        if (text29Value !== null) {
          this.setState({ setFruits5RepAngelleRow2Plant3: JSON.parse(text29Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers5RepAngelleRow2Plant3').then((text30Value) => {

        if (text30Value !== null) {
          this.setState({ setFlowers5RepAngelleRow2Plant3: JSON.parse(text30Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber5RepAngelleRow2Plant3').then((text31Value) => {

        if (text31Value !== null) {
          this.setState({ pruningNumber5RepAngelleRow2Plant3: JSON.parse(text31Value) });
        }


      }).done();
    } catch (error) {
    }
    try {

      AsyncStorage.getItem('fruitDiameter5RepAngelleRow2Plant3').then((text32Value) => {
        if (text32Value !== null) {
          this.setState({ fruitDiameter5RepAngelleRow2Plant3: JSON.parse(text32Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 6---------------------------------//

    try {
      AsyncStorage.getItem('setFruits6RepAngelleRow2Plant3').then((text33Value) => {

        if (text33Value !== null) {
          this.setState({ setFruits6RepAngelleRow2Plant3: JSON.parse(text33Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers6RepAngelleRow2Plant3').then((text34Value) => {

        if (text34Value !== null) {
          this.setState({ setFlowers6RepAngelleRow2Plant3: JSON.parse(text34Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber6RepAngelleRow2Plant3').then((text35Value) => {

        if (text35Value !== null) {
          this.setState({ pruningNumber6RepAngelleRow2Plant3: JSON.parse(text35Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter6RepAngelleRow2Plant3').then((text36Value) => {

        if (text36Value !== null) {
          this.setState({ fruitDiameter6RepAngelleRow2Plant3: JSON.parse(text36Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 7---------------------------------//

    try {
      AsyncStorage.getItem('setFruits7RepAngelleRow2Plant3').then((text37Value) => {

        if (text37Value !== null) {
          this.setState({ setFruits7RepAngelleRow2Plant3: JSON.parse(text37Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers7RepAngelleRow2Plant3').then((text38Value) => {

        if (text38Value !== null) {

          this.setState({ setFlowers7RepAngelleRow2Plant3: JSON.parse(text38Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber7RepAngelleRow2Plant3').then((text39Value) => {

        if (text39Value !== null) {
          this.setState({ pruningNumber7RepAngelleRow2Plant3: JSON.parse(text39Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter7RepAngelleRow2Plant3').then((text40Value) => {

        if (text40Value !== null) {
          this.setState({ fruitDiameter7RepAngelleRow2Plant3: JSON.parse(text40Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Truss 8---------------------------------//

    try {
      AsyncStorage.getItem('setFruits8RepAngelleRow2Plant3').then((text41Value) => {

        if (text41Value !== null) {
          this.setState({ setFruits8RepAngelleRow2Plant3: JSON.parse(text41Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers8RepAngelleRow2Plant3').then((text42Value) => {

        if (text42Value !== null) {
          this.setState({ setFlowers8RepAngelleRow2Plant3: JSON.parse(text42Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber8RepAngelleRow2Plant3').then((text43Value) => {

        if (text43Value !== null) {
          this.setState({ pruningNumber8RepAngelleRow2Plant3: JSON.parse(text43Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter8RepAngelleRow2Plant3').then((text44Value) => {

        if (text44Value !== null) {
          this.setState({ fruitDiameter8RepAngelleRow2Plant3: JSON.parse(text44Value) });
        }


      }).done();
    } catch (error) {
    }

    //-------------------------Truss 9---------------------------------//

    try {
      AsyncStorage.getItem('setFruits9RepAngelleRow2Plant3').then((text45Value) => {

        if (text45Value !== null) {
          this.setState({ setFruits9RepAngelleRow2Plant3: JSON.parse(text45Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('setFlowers9RepAngelleRow2Plant3').then((text46Value) => {

        if (text46Value !== null) {
          this.setState({ setFlowers9RepAngelleRow2Plant3: JSON.parse(text46Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('pruningNumber9RepAngelleRow2Plant3').then((text47Value) => {

        if (text47Value !== null) {
          this.setState({ pruningNumber9RepAngelleRow2Plant3: JSON.parse(text47Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('fruitDiameter9RepAngelleRow2Plant3').then((text48Value) => {

        if (text48Value !== null) {
          this.setState({ fruitDiameter9RepAngelleRow2Plant3: JSON.parse(text48Value) });
        }


      }).done();
    } catch (error) {
    }


    //-------------------------Calculations---------------------------------//

    try {
      AsyncStorage.getItem('fruitLoadRepAngelleRow2Plant3').then((text49Value) => {
        if (text49Value !== null) {
          this.setState({ fruitLoadRepAngelleRow2Plant3: JSON.parse(text49Value) });
        }


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('floweringTrussssRepAngelleRow2Plant3').then((text50Value) => {

        if (text50Value !== null) {
          this.setState({ floweringTrussssRepAngelleRow2Plant3: JSON.parse(text50Value) });
        }

        console.log("ttttttttttttttttttttttttttttt : "+this.state.floweringTrussssRepAngelleRow2Plant3)


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('settingTrussNumberRepAngelleRow2Plant3').then((text51Value) => {

        if (text51Value !== null) {
          this.setState({ settingTrussNumberRepAngelleRow2Plant3: JSON.parse(text51Value) });
        }

        console.log("yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy : "+this.state.settingTrussNumberRepAngelleRow2Plant3)


      }).done();
    } catch (error) {
    }
    try {
      AsyncStorage.getItem('harvestTrussRepAngelleRow2Plant3').then((text52Value) => {

        if (text52Value !== null) {
          this.setState({ harvestTrussRepAngelleRow2Plant3: JSON.parse(text52Value) });
        }


      }).done();
    } catch (error) {
    }






    /*try {
      AsyncStorage.getItem('trussNumberRepAngelleRow2Plant3').then((text10Value) => {
        this.setState({ trussNumberRepAngelleRow2Plant3: JSON.parse(text10Value) });
        console.log(this.state.trussNumberRepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruitsRepAngelleRow2Plant3').then((text11Value) => {
        this.setState({ setFruitsRepAngelleRow2Plant3: JSON.parse(text11Value) });
        console.log(this.state.setFruitsRepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowersRepAngelleRow2Plant3').then((text12Value) => {
        this.setState({ setFlowersRepAngelleRow2Plant3: JSON.parse(text12Value) });
        console.log(this.state.setFlowersRepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumberRepAngelleRow2Plant3').then((text13Value) => {
        this.setState({ pruningNumberRepAngelleRow2Plant3: JSON.parse(text13Value) });
        console.log(this.state.pruningNumberRepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameterRepAngelleRow2Plant3').then((text14Value) => {
        this.setState({ fruitDiameterRepAngelleRow2Plant3: JSON.parse(text14Value) });
        console.log(this.state.fruitDiameterRepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits1RepAngelleRow2Plant3').then((text15Value) => {
        this.setState({ setFruits1RepAngelleRow2Plant3: JSON.parse(text15Value) });
        console.log(this.state.setFruits1RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers1RepAngelleRow2Plant3').then((text16Value) => {
        this.setState({ setFlowers1RepAngelleRow2Plant3: JSON.parse(text16Value) });
        console.log(this.state.setFlowers1RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber1RepAngelleRow2Plant3').then((text17Value) => {
        this.setState({ pruningNumber1RepAngelleRow2Plant3: JSON.parse(text17Value) });
        console.log(this.state.pruningNumber1RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter1RepAngelleRow2Plant3').then((text18Value) => {
        this.setState({ fruitDiameter1RepAngelleRow2Plant3: JSON.parse(text18Value) });
        console.log(this.state.fruitDiameter1RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits2RepAngelleRow2Plant3').then((text19Value) => {
        this.setState({ setFruits2RepAngelleRow2Plant3: JSON.parse(text19Value) });
        console.log(this.state.setFruits2RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers2RepAngelleRow2Plant3').then((text20Value) => {
        this.setState({ setFlowers2RepAngelleRow2Plant3: JSON.parse(text20Value) });
        console.log(this.state.setFlowers2RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber2RepAngelleRow2Plant3').then((text21Value) => {
        this.setState({ pruningNumber2RepAngelleRow2Plant3: JSON.parse(text21Value) });
        console.log(this.state.pruningNumber2RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter2RepAngelleRow2Plant3').then((text22Value) => {
        this.setState({ fruitDiameter2RepAngelleRow2Plant3: JSON.parse(text22Value) });
        console.log(this.state.fruitDiameter2RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFruits3RepAngelleRow2Plant3').then((text23Value) => {
        this.setState({ setFruits3RepAngelleRow2Plant3: JSON.parse(text23Value) });
        console.log(this.state.setFruits3RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('setFlowers3RepAngelleRow2Plant3').then((text24Value) => {
        this.setState({ setFlowers3RepAngelleRow2Plant3: JSON.parse(text24Value) });
        console.log(this.state.setFlowers3RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('pruningNumber3RepAngelleRow2Plant3').then((text25Value) => {
        this.setState({ pruningNumber3RepAngelleRow2Plant3: JSON.parse(text25Value) });
        console.log(this.state.pruningNumber3RepAngelleRow2Plant3)



      }).done();
    } catch (error) {
    }

    try {
      AsyncStorage.getItem('fruitDiameter3RepAngelleRow2Plant3').then((text26Value) => {
        this.setState({ fruitDiameter3RepAngelleRow2Plant3: JSON.parse(text26Value) });
        console.log(this.state.fruitDiameter3RepAngelleRow2Plant3)



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

    this.setState({ trussNumber1RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 1 })
    this.setState({ trussNumber2RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 2 })
    this.setState({ trussNumber3RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 3 })
    this.setState({ trussNumber4RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 4 })
    this.setState({ trussNumber5RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 5 })
    this.setState({ trussNumber6RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 6 })
    this.setState({ trussNumber7RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 7 })
    this.setState({ trussNumber8RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 8 })
    this.setState({ trussNumber9RepAngelleRow2Plant3: parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 9 })


    if (this.state.trussNumberRepAngelleRow2Plant3 !== "") {

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
    sum = ((parseInt(this.state.setFruitsRepAngelleRow2Plant3) ? parseInt(this.state.setFruitsRepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits1RepAngelleRow2Plant3) ? parseInt(this.state.setFruits1RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits2RepAngelleRow2Plant3) ? parseInt(this.state.setFruits2RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits3RepAngelleRow2Plant3) ? parseInt(this.state.setFruits3RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits4RepAngelleRow2Plant3) ? parseInt(this.state.setFruits4RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits5RepAngelleRow2Plant3) ? parseInt(this.state.setFruits5RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits6RepAngelleRow2Plant3) ? parseInt(this.state.setFruits6RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits7RepAngelleRow2Plant3) ? parseInt(this.state.setFruits7RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits8RepAngelleRow2Plant3) ? parseInt(this.state.setFruits8RepAngelleRow2Plant3) : 0) + (parseInt(this.state.setFruits9RepAngelleRow2Plant3) ? parseInt(this.state.setFruits9RepAngelleRow2Plant3) : 0));
    this.setState({
      fruitLoadRepAngelleRow2Plant3: sum,
    });

    this.setItem("fruitLoadRepAngelleRow2Plant3", this.state.fruitLoadRepAngelleRow2Plant3)

    console.log("Fruit Load : " + sum);



  }

  calculateHarvestTruss = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var prunNum = 0;

    if (this.state.setFlowersRepAngelleRow2Plant3 === "") {

      prunNum = parseInt(this.state.pruningNumberRepAngelleRow2Plant3)

      div = (parseInt((this.state.setFruitsRepAngelleRow2Plant3) ? (this.state.setFruitsRepAngelleRow2Plant3) : 0) / parseFloat((this.state.pruningNumberRepAngelleRow2Plant3) ? (this.state.pruningNumberRepAngelleRow2Plant3) : 0))
      sub = (1 - div);
      add = (((parseInt(this.state.trussNumberRepAngelleRow2Plant3) ? parseInt(this.state.trussNumberRepAngelleRow2Plant3) : 0) + sub).toFixed(2))
      this.setState({
        harvestTrussRepAngelleRow2Plant3: add,
        pruningHar: prunNum,
      });

    } else {

      prunNum = parseInt(this.state.pruningNumberRepAngelleRow2Plant3)
      var num = this.state.trussNumberRepAngelleRow2Plant3

      this.setState({
        harvestTrussRepAngelleRow2Plant3: num,
        pruningHar: prunNum,
      });
    }

    console.log("Harvest Truss : " + add);

    this.setItem("harvestTrussRepAngelleRow2Plant3", this.state.harvestTrussRepAngelleRow2Plant3)



  }

  calculateSettingTruss2 = () => {

    var div = 0;
    var sub = 0;
    var add = 0;
    var pruningSet = 0;
    var settingTruss = 0;
    var settingFruit = 0;
    var trussNum = 0;

    console.log("Setting truss called : " + this.state.setFruits2RepAngelleRow2Plant3);

    if (this.state.setFruits9RepAngelleRow2Plant3 === "") {

      if (this.state.setFruits8RepAngelleRow2Plant3 === "") {

        if (this.state.setFruits7RepAngelleRow2Plant3 === "") {

          if (this.state.setFruits6RepAngelleRow2Plant3 === "") {

            if (this.state.setFruits5RepAngelleRow2Plant3 === "") {

              if (this.state.setFruits4RepAngelleRow2Plant3 === "") {

                if (this.state.setFruits3RepAngelleRow2Plant3 === "") {

                  if (this.state.setFruits2RepAngelleRow2Plant3 === "") {

                    if (this.state.setFruits1RepAngelleRow2Plant3 === "") {

                      if (this.state.setFruitsRepAngelleRow2Plant3 === "") {


                      } else {

                        pruningSet = parseInt(this.state.pruningNumberRepAngelleRow2Plant3);
                        trussNum = parseInt(this.state.trussNumberRepAngelleRow2Plant3);
                        settingFruit = parseInt(this.state.setFruitsRepAngelleRow2Plant3);
                        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                        console.log("Setting Truss Number : " + settingTruss);
                        this.setState({
                          settingTrussNumberRepAngelleRow2Plant3: settingTruss,
                          settingTruss: trussNum,
                          prunSetting: pruningSet,

                        });

                        this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


                      }

                    } else {

                      var number = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 1)

                      pruningSet = parseInt(this.state.pruningNumber1RepAngelleRow2Plant3);
                      trussNum = parseInt(number);
                      settingFruit = parseInt(this.state.setFruits1RepAngelleRow2Plant3);
                      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                      console.log("Setting Truss Number 1 : " + settingTruss);
                      this.setState({
                        settingTrussNumberRepAngelleRow2Plant3: settingTruss,
                        settingTruss: trussNum,
                        prunSetting: pruningSet,

                      });

                      this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


                    }

                  } else {

                    var number2 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 2)

                    pruningSet = parseInt(this.state.pruningNumber2RepAngelleRow2Plant3);
                    trussNum = parseInt(number2);
                    settingFruit = parseInt(this.state.setFruits2RepAngelleRow2Plant3);
                    settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                    console.log("Setting Truss Number 2 : " + settingTruss);
                    this.setState({
                      settingTrussNumberRepAngelleRow2Plant3: settingTruss,
                      settingTruss: trussNum,
                      prunSetting: pruningSet,

                    });
                    this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


                  }

                } else {

                  var number3 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 3)

                  pruningSet = parseInt(this.state.pruningNumber3RepAngelleRow2Plant3);
                  trussNum = parseInt(number3);
                  settingFruit = parseInt(this.state.setFruits3RepAngelleRow2Plant3);
                  settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                  console.log("Setting Truss Number 3 : " + settingTruss);
                  this.setState({
                    settingTrussNumberRepAngelleRow2Plant3: settingTruss,
                    settingTruss: trussNum,
                    prunSetting: pruningSet,

                  });

                  this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


                }

              } else {

                var number4 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 4)

                pruningSet = parseInt(this.state.pruningNumber4RepAngelleRow2Plant3);
                trussNum = parseInt(number4);
                settingFruit = parseInt(this.state.setFruits4RepAngelleRow2Plant3);
                settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
                console.log("Setting Truss Number 4 : " + settingTruss);
                this.setState({
                  settingTrussNumberRepAngelleRow2Plant3: settingTruss,
                  settingTruss: trussNum,
                  prunSetting: pruningSet,

                });

                this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


              }

            } else {

              var number5 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 5)

              pruningSet = parseInt(this.state.pruningNumber5RepAngelleRow2Plant3);
              trussNum = parseInt(number5);
              settingFruit = parseInt(this.state.setFruits5RepAngelleRow2Plant3);
              settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
              console.log("Setting Truss Number 5 : " + settingTruss);
              this.setState({
                settingTrussNumberRepAngelleRow2Plant3: settingTruss,
                settingTruss: trussNum,
                prunSetting: pruningSet,

              });

              this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)



            }

          } else {

            var number6 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 6)

            pruningSet = parseInt(this.state.pruningNumber6RepAngelleRow2Plant3);
            trussNum = parseInt(number6);
            settingFruit = parseInt(this.state.setFruits6RepAngelleRow2Plant3);
            settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
            console.log("Setting Truss Number 6 : " + settingTruss);
            this.setState({
              settingTrussNumberRepAngelleRow2Plant3: settingTruss,
              settingTruss: trussNum,
              prunSetting: pruningSet,

            });

            this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


          }

        } else {
          var number7 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 7)

          pruningSet = parseInt(this.state.pruningNumber7RepAngelleRow2Plant3);
          trussNum = parseInt(number7);
          settingFruit = parseInt(this.state.setFruits7RepAngelleRow2Plant3);
          settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
          console.log("Setting Truss Number 7 : " + settingTruss);
          this.setState({
            settingTrussNumberRepAngelleRow2Plant3: settingTruss,
            settingTruss: trussNum,
            prunSetting: pruningSet,

          });

          this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)

        }

      } else {

        var number8 = (parseInt(this.state.trussNumberRepAngelleRow2Plant3) + 8)

        pruningSet = parseInt(this.state.pruningNumber8RepAngelleRow2Plant3);
        trussNum = parseInt(number8);
        settingFruit = parseInt(this.state.setFruits8RepAngelleRow2Plant3);
        settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
        console.log("Setting Truss Number 8 : " + settingTruss);
        this.setState({
          settingTrussNumberRepAngelleRow2Plant3: settingTruss,
          settingTruss: trussNum,
          prunSetting: pruningSet,

        });

        this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


      }

    } else {

      var number9 = (ParseInt(this.state.trussNumberRepAngelleRow2Plant3) + 9)

      pruningSet = parseInt(this.state.pruningNumber9RepAngelleRow2Plant3);
      trussNum = parseInt(number9);
      settingFruit = parseInt(this.state.setFruits9RepAngelleRow2Plant3);
      settingTruss = ((trussNum + (settingFruit / pruningSet)).toFixed(2));
      console.log("Setting Truss Number 9 : " + settingTruss);
      this.setState({
        settingTrussNumberRepAngelleRow2Plant3: settingTruss,
        settingTruss2: trussNum,
        prunSetting: pruningSet,
      });

      this.setItem("settingTrussNumberRepAngelleRow2Plant3", settingTruss)


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

    console.log("Flowering truss called : " + this.state.setFlowers2RepAngelleRow2Plant3);


    if (this.state.setFlowers9RepAngelleRow2Plant3 === "") {

      if (this.state.setFlowers8RepAngelleRow2Plant3 === "") {

        if (this.state.setFlowers7RepAngelleRow2Plant3 === "") {

          if (this.state.setFlowers6RepAngelleRow2Plant3 === "") {

            if (this.state.setFlowers5RepAngelleRow2Plant3 === "") {

              if (this.state.setFlowers4RepAngelleRow2Plant3 === "") {

                if (this.state.setFlowers3RepAngelleRow2Plant3 === "") {

                  if (this.state.setFlowers2RepAngelleRow2Plant3 === "") {

                    if (this.state.setFlowers1RepAngelleRow2Plant3 === "") {

                      if (this.state.setFlowersRepAngelleRow2Plant3 === "") {


                      } else {

                        var number01 = this.state.trussNumberRepAngelleRow2Plant3


                        flowerPruningNumner = parseInt(this.state.pruningNumberRepAngelleRow2Plant3);
                        flowering = parseInt(this.state.setFlowersRepAngelleRow2Plant3);
                        flowerSetFruits = parseInt(this.state.setFruitsRepAngelleRow2Plant3);
                        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                        floweringTruss = ((parseInt(number01) + (summ / flowerPruningNumner)).toFixed(2));
                        console.log("Flowering Truss Value : " + floweringTruss);
                        this.setState({
                          floweringTrussssRepAngelleRow2Plant3: floweringTruss,
                          pruneFlowering: flowerPruningNumner,
                        });
                        this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)

                      }


                    } else {

                      var number11 = + (this.state.trussNumberRepAngelleRow2Plant3) + 1

                      console.log("oooooooooooooooooooooooooooooo : " + number11);
                      flowerPruningNumner = parseInt(this.state.pruningNumber1RepAngelleRow2Plant3);
                      flowering = parseInt(this.state.setFlowers1RepAngelleRow2Plant3);
                      flowerSetFruits = parseInt(this.state.setFruits1RepAngelleRow2Plant3);
                      trussNum = number11
                      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                      floweringTruss = ((parseInt(number11) + (summ / flowerPruningNumner)).toFixed(2));
                      console.log("Flowering Truss Value : " + floweringTruss);
                      this.setState({
                        floweringTrussssRepAngelleRow2Plant3: floweringTruss,
                        pruneFlowering: flowerPruningNumner,

                      });
                      this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


                    }


                  } else {

                    var number21 = + (this.state.trussNumberRepAngelleRow2Plant3) + 2

                    flowerPruningNumner = parseInt(this.state.pruningNumber2RepAngelleRow2Plant3);
                    flowering = parseInt(this.state.setFlowers2RepAngelleRow2Plant3);
                    flowerSetFruits = parseInt(this.state.setFruits2RepAngelleRow2Plant3);
                    summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                    floweringTruss = ((parseInt(number21) + (summ / flowerPruningNumner)).toFixed(2));
                    console.log("Flowering Truss Value : " + floweringTruss);
                    this.setState({
                      floweringTrussssRepAngelleRow2Plant3: floweringTruss,
                      pruneFlowering: flowerPruningNumner,

                    });
                    this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


                  }


                } else {

                  var number31 = + (this.state.trussNumberRepAngelleRow2Plant3) + 3

                  flowerPruningNumner = parseInt(this.state.pruningNumber3RepAngelleRow2Plant3);
                  flowering = parseInt(this.state.setFlowers3RepAngelleRow2Plant3);
                  flowerSetFruits = parseInt(this.state.setFruits3RepAngelleRow2Plant3);
                  summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                  floweringTruss = ((parseInt(number31) + (summ / flowerPruningNumner)).toFixed(2));
                  console.log("Flowering Truss Value : " + floweringTruss);
                  this.setState({
                    floweringTrussssRepAngelleRow2Plant3: floweringTruss,
                    pruneFlowering: flowerPruningNumner,

                  });

                  this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)

                }


              } else {

                var number41 = + (this.state.trussNumberRepAngelleRow2Plant3) + 4

                flowerPruningNumner = parseInt(this.state.pruningNumber4RepAngelleRow2Plant3);
                flowering = parseInt(this.state.setFlowers4RepAngelleRow2Plant3);
                flowerSetFruits = parseInt(this.state.setFruits4RepAngelleRow2Plant3);
                summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
                floweringTruss = ((parseInt(number41) + (summ / flowerPruningNumner)).toFixed(2));
                console.log("Flowering Truss Value : " + floweringTruss);
                this.setState({
                  floweringTrussssRepAngelleRow2Plant3: floweringTruss,
                  pruneFlowering: flowerPruningNumner,

                });

                this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


              }


            } else {

              var number51 = + (this.state.trussNumberRepAngelleRow2Plant3) + 5

              flowerPruningNumner = parseInt(this.state.pruningNumber5RepAngelleRow2Plant3);
              flowering = parseInt(this.state.setFlowers5RepAngelleRow2Plant3);
              flowerSetFruits = parseInt(this.state.setFruits5RepAngelleRow2Plant3);
              summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
              floweringTruss = ((parseInt(number51) + (summ / flowerPruningNumner)).toFixed(2));
              console.log("Flowering Truss Value : " + floweringTruss);
              this.setState({
                floweringTrussssRepAngelleRow2Plant3: floweringTruss,
                pruneFlowering: flowerPruningNumner,

              });

              this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


            }


          } else {

            var number61 = + (this.state.trussNumberRepAngelleRow2Plant3) + 6

            flowerPruningNumner = parseInt(this.state.pruningNumber6RepAngelleRow2Plant3);
            flowering = parseInt(this.state.setFlowers6RepAngelleRow2Plant3);
            flowerSetFruits = parseInt(this.state.setFruits6RepAngelleRow2Plant3);
            summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
            floweringTruss = ((parseInt(number61) + (summ / flowerPruningNumner)).toFixed(2));
            console.log("Flowering Truss Value : " + floweringTruss);
            this.setState({
              floweringTrussssRepAngelleRow2Plant3: floweringTruss,
              pruneFlowering: flowerPruningNumner,

            });

            this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


          }


        } else {

          var number71 = + (this.state.trussNumberRepAngelleRow2Plant3) + 7

          flowerPruningNumner = parseInt(this.state.pruningNumber7RepAngelleRow2Plant3);
          flowering = parseInt(this.state.setFlowers7RepAngelleRow2Plant3);
          flowerSetFruits = parseInt(this.state.setFruits7RepAngelleRow2Plant3);
          summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
          floweringTruss = ((parseInt(number71) + (summ / flowerPruningNumner)).toFixed(2));
          console.log("Flowering Truss Value : " + floweringTruss);
          this.setState({
            floweringTrussssRepAngelleRow2Plant3: floweringTruss,
            pruneFlowering: flowerPruningNumner,

          });

          this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


        }


      } else {
        var number81 = + (this.state.trussNumberRepAngelleRow2Plant3) + 8

        flowerPruningNumner = parseInt(this.state.pruningNumber8RepAngelleRow2Plant3);
        flowering = parseInt(this.state.setFlowers8RepAngelleRow2Plant3);
        flowerSetFruits = parseInt(this.state.setFruits8RepAngelleRow2Plant3);
        summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
        floweringTruss = ((parseInt(number81) + (summ / flowerPruningNumner)).toFixed(2));
        console.log("Flowering Truss Value : " + floweringTruss);
        this.setState({
          floweringTrussssRepAngelleRow2Plant3: floweringTruss,
          pruneFlowering: flowerPruningNumner,

        });

        this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


      }


    } else {

      var number91 = + (this.state.trussNumberRepAngelleRow2Plant3) + 9

      flowerPruningNumner = parseInt(this.state.pruningNumber9RepAngelleRow2Plant3);
      flowering = parseInt(this.state.setFlowers9RepAngelleRow2Plant3);
      flowerSetFruits = parseInt(this.state.setFruits9RepAngelleRow2Plant3);
      summ = (flowering ? flowering : 0) + (flowerSetFruits ? flowerSetFruits : 0);
      floweringTruss = ((parseInt(number91) + (summ / flowerPruningNumner)).toFixed(2));
      console.log("Flowering Truss Value : " + floweringTruss);
      this.setState({
        floweringTrussssRepAngelleRow2Plant3: floweringTruss,
        pruneFlowering: flowerPruningNumner,

      });

      this.setItem("floweringTrussssRepAngelleRow2Plant3", floweringTruss)


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
           this.calculateharvestTrussRepAngelleRow2Plant3();
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

  onSubmitleavesPerPlantRepAngelleRow2Plant3() {
    this.leavesPerPlantRepAngelleRow2Plant3.focus();
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

    ['leavesPerPlantRepAngelleRow2Plant3', 'FullysetTruss', 'TrussLength', 'WeeklyGrowth', 'FlowerTrussHeight', 'LeafLength', 'LeafWidth', 'StmDiameter', 'LastWeekStmDiameter']
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

            <TouchableOpacity onPress={() => this.props.navigation.push('RepAngellePlantsRow2')} >
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

        <Text style={styles.text}>REP - Angelle</Text>

        <Text style={styles.text2}><Text style={styles.textPlants}>Plant 3</Text>/ Row No. 823/ Week No. {this.state.weekNumber}</Text>


        <ScrollView
          keyboardShouldPersistTaps='handled'
          scrollEventThrottle={16}
        >

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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leavesPerPlantRepAngelleRow2Plant3')}
                    value={this.state.leavesPerPlantRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'fullySetTrussRepAngelleRow2Plant3')}
                    value={this.state.fullySetTrussRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'setTrussLengthRepAngelleRow2Plant3')}
                    value={this.state.setTrussLengthRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'weeklyGrowthRepAngelleRow2Plant3')}
                    value={this.state.weeklyGrowthRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'floweringTrussHeightRepAngelleRow2Plant3')}
                    value={this.state.floweringTrussHeightRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leafLengthRepAngelleRow2Plant3')}
                    value={this.state.leafLengthRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'leafWidthRepAngelleRow2Plant3')}
                    value={this.state.leafWidthRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'stmDiameterRepAngelleRow2Plant3')}
                    value={this.state.stmDiameterRepAngelleRow2Plant3}
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
                    onChangeText={(text) => this.updatePlantsTextInput(text, 'lastWeekStmDiameterRepAngelleRow2Plant3')}
                    value={this.state.lastWeekStmDiameterRepAngelleRow2Plant3}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumberRepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumberRepAngelleRow2Plant3}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruitsRepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruitsRepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowersRepAngelleRow2Plant3')}
                value={this.state.setFlowersRepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumberRepAngelleRow2Plant3')}
                value={this.state.pruningNumberRepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameterRepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber1RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber1RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits1RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits1RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers1RepAngelleRow2Plant3')}
                value={this.state.setFlowers1RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber1RepAngelleRow2Plant3')}
                value={this.state.pruningNumber1RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter1RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber2RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber2RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits2RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits2RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers2RepAngelleRow2Plant3')}
                value={this.state.setFlowers2RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber2RepAngelleRow2Plant3')}
                value={this.state.pruningNumber2RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter2RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber3RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber3RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits3RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits3RepAngelleRow2Plant3.toString()} />

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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers3RepAngelleRow2Plant3')}
                value={this.state.setFlowers3RepAngelleRow2Plant3.toString()} />

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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber3RepAngelleRow2Plant3')}
                value={this.state.pruningNumber3RepAngelleRow2Plant3.toString()} />


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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter3RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber4RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber4RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits4RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits4RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers4RepAngelleRow2Plant3')}
                value={this.state.setFlowers4RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber4RepAngelleRow2Plant3')}
                value={this.state.pruningNumber4RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter4RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber5RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber5RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits5RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits5RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers5RepAngelleRow2Plant3')}
                value={this.state.setFlowers5RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber5RepAngelleRow2Plant3')}
                value={this.state.pruningNumber5RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter5RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber6RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber6RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits6RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits6RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers6RepAngelleRow2Plant3')}
                value={this.state.setFlowers6RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber6RepAngelleRow2Plant3')}
                value={this.state.pruningNumber6RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter6RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber7RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber7RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits7RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits7RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers7RepAngelleRow2Plant3')}
                value={this.state.setFlowers7RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber7RepAngelleRow2Plant3')}
                value={this.state.pruningNumber7RepAngelleRow2Plant3.toString()}

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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter7RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput22(text, 'trussNumber8RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber8RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits8RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits8RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers8RepAngelleRow2Plant3')}
                value={this.state.setFlowers8RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber8RepAngelleRow2Plant3')}
                value={this.state.pruningNumber8RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter8RepAngelleRow2Plant3')}
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
                onChangeText={(text) => this.updateTextInput(text, 'trussNumber9RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.trussNumber9RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFruits9RepAngelleRow2Plant3')}
                blurOnSubmit={false}
                value={this.state.setFruits9RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'setFlowers9RepAngelleRow2Plant3')}
                value={this.state.setFlowers9RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'pruningNumber9RepAngelleRow2Plant3')}
                value={this.state.pruningNumber9RepAngelleRow2Plant3.toString()}
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
                onChangeText={(text) => this.updateTextInput(text, 'fruitDiameter9RepAngelleRow2Plant3')}
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

              <View style={[(this.state.fruitLoadRepAngelleRow2Plant3 <= 22 || this.state.fruitLoadRepAngelleRow2Plant3 >= 40) ? styles.borderErrorColor : null]}>

                <View
                  style={{
                    marginTop: 1
                  }}
                />

                <View style={styles.row}>
                  <Text style={styles.text4}>Fruit Load</Text>
                  <Text style={styles.text5}>{this.state.fruitLoadRepAngelleRow2Plant3}</Text>
                </View>

                <View
                  style={{
                    marginBottom: 5
                  }}
                />

              </View>

              <View style={[(this.state.floweringTrussssRepAngelleRow2Plant3 <= 0 || this.state.floweringTrussssRepAngelleRow2Plant3 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Flowering Truss</Text>
                  <Text style={styles.text5}>{this.state.floweringTrussssRepAngelleRow2Plant3}</Text>
                </View>


                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>

              <View style={[(this.state.settingTrussNumberRepAngelleRow2Plant3 <= 1 || this.state.settingTrussNumberRepAngelleRow2Plant3 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Setting Truss</Text>
                  <Text style={styles.text5}>{this.state.settingTrussNumberRepAngelleRow2Plant3}</Text>
                </View>
                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>

              <View style={[(this.state.floweringTrussssRepAngelleRow2Plant3 <= 0 || this.state.floweringTrussssRepAngelleRow2Plant3 >= 45) ? styles.borderErrorColor : null]}>
                <View style={styles.row}>
                  <Text style={styles.text4}>Harvest Truss</Text>
                  <Text style={styles.text5}>{this.state.harvestTrussRepAngelleRow2Plant3}</Text>
                </View>
                <View
                  style={{
                    marginBottom: 5
                  }}
                />
              </View>
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