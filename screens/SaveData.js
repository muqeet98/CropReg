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

import SQLite from "react-native-sqlite-storage";


SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "T&GCropRegoDatabase.db";
const database_version = "1.0";
const database_displayname = "Crop Rego New Offline Database";
const database_size = 20000000;

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

import Database from './Database'
import { TouchableOpacity } from 'react-native';

const db = new Database();

const SaveData = () => {

    const [plants, setPlants] = useState([]);
    const [truss, setTruss] = useState([]);

    const [sample, setSample] = useState([]);

    const [listPlants, setlistPlants] = useState({});
    const [listTrusss, setListTrusss] = useState({});
    const [data, setData] = useState([]);


    useEffect(async () => {

    }, [])



    const GetPlants = gql`
   query MyQuery {
     PlantDetails {
       plantId
       leavesPerPlant
       leafWidth
       leafLength
       lastWeekStmDiameter
       fullySetTruss
       plantName
       plantNumber
       plantRow
       plantWeek
       setTrussLength
       stmDiameter
       weeklyGrowth
       floweringTrussHeight
     }
   }
   `;
    const GetTruss = gql`
   query MyQuery {
     TrussDetails {
       floweringTruss
       fruitDiameter
       fruitLoad
       harvestTruss
       plantName
       plantNumber
       plantRow
       plantWeek
       pruningFlower
       pruningHarvest
       pruningNumber
       pruningSet
       setFlowers
       setFruits
       settingTruss
       trussID
       trussNumber
     }
   }
   `;

    const simpleMutation = async () => {
        const { data, error } = await useMutation({
            mutation: gql`
      mutation MyMutation {
        insert_TrussDetails(objects: {trussID: 3, settingTruss: 12, trussNumber: 11, setFruits: 10, setFlowers: 10, pruningSet: 10, pruningNumber: 10, pruningHarvest: 10, pruningFlower: 10, plantWeek: 10, plantRow: 10, plantNumber: "10", plantName: "", harvestTruss: 10, fruitLoad: 10, fruitDiameter: 10, floweringTruss: 10})
        {
          returning{trussID
          settingTruss
          }
        }
      }
      `,
        });
        if (error) {
            alert(`error => ${JSON.stringify(error)}`);
            console.log('error', JSON.stringify(error));
            return;
        }
        alert(`Response: ${JSON.stringify(data)}`);
        console.log('data', JSON.stringify(data));
    };

    return (
        <View>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={simpleMutation}>
                <Text>Add Data</Text>
            </TouchableOpacity>
        </View>
    );
}
export default SaveData;

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


