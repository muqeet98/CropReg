/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import SQLite from "react-native-sqlite-storage";
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "T&GCropRegoDatabase.db";
const database_version = "1.0";
const database_displayname = "Crop Rego New Offline Database";
const database_size = 20000000;
import {store} from './src/store'
import { Provider } from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useMutation,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


import SplashScreen from 'react-native-splash-screen'
import MainStackNavigator from './navigation/MainStackNavigator'
// import Database from '../CropRegistration/screens/Database'
import { TouchableOpacity } from 'react-native';
import SaveData from './screens/SaveData'
import Database from './screens/Database'
import { INSERT_PLAN_DETAILS } from './screens/GraphQl'

const db = new Database();

const App = () => {

  const [plants, setPlants] = useState([]);
  const [truss, setTruss] = useState([]);

  const [sample, setSample] = useState([]);

  const [listPlants, setlistPlants] = useState({});
  const [listTrusss, setListTrusss] = useState({});
  const [data, setData] = useState([]);
  const db = new Database();
  const [formSubmit, setFormSubmit] = useState(false)
  // const [insertPlanDetaills] = useMutation(INSERT_PLAN_DETAILS);

  useEffect(() => {
    let check;
    setTimeout(async () => {
      if (typeof window !== 'undefined') {
        // check = localStorage.getItem('submit')
        value = await AsyncStorage.getItem('submit');

      }
      if (check == true) {
        setFormSubmit(check)

      }
    }, 200)
  }, []);

  useEffect(() => {
    if (formSubmit == true) {
      console.log("here in after submit",)
      db.listPlants(data).then((result) => {

        console.log(result.pop());
        // insertPlanDetaills({
        //   variables: {
        //     objects: {

        //     }
        //   }
        // })

      }).catch((err) => {
        console.log(err);

      })

    }

  }, [formSubmit])


  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const httpLink = createHttpLink({
    uri: 'https://secure-piranha-67.hasura.app/v1/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "x-hasura-admin-secret": "bDawOreH2YEaemnn5oCQ1eo85Db9pXoLTA7vFVEfO8y33ocutMavXQtqtQcZNKVu",
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    uri: "https://secure-piranha-67.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
  });




  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        3000
      )
    ).catch(error => {
      console.log("echoTest failed - plugin not functional");
    });
  }

  const getPlants = () => {
    let plants = {};
    db.listPlants().then((data) => {
      console.log("Calling database")
      listPlants = data;
      plants = data;
      setlistPlants(listPlants)

      console.log("here in local db", listPlants)
    }).catch((err) => {
      console.log(err);
    })
  }

  const getTruss = () => {
    let truss = {};
    db.listTruss().then((data) => {
      console.log("Calling database")
      listTrusss = data;
      truss = data;
      setTruss(data)
      setListTrusss(listTrusss)
    }).catch((err) => {
      console.log(err);
    })
  }





  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <MainStackNavigator />
      </ApolloProvider>
    </Provider>

  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
});

