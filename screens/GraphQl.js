import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    useMutation,
    gql,
    createHttpLink
  } from "@apollo/client";

export const SaveData = gql`
mutation MyMutation {
  insert_TrussDetails(objects: {trussID: 7, settingTruss: 10, trussNumber: 10, setFruits: 10, setFlowers: 10, pruningSet: 10, pruningNumber: 10, pruningHarvest: 10, pruningFlower: 10, plantWeek: 10, plantRow: 10, plantNumber: "10", plantName: "", harvestTruss: 10, fruitLoad: 10, fruitDiameter: 10, floweringTruss: 10})
  {
    returning{trussID
    settingTruss
    }
  }
}
`;

export const INSERT_PLAN_DETAILS = gql `
    mutation insert_PlantDetails($objects: [PlantDetails_insert_input!]!) {
        insert_PlantDetails(object: $object) {
            affected_rows
        }
    }`

  export  const GetPlants = gql`
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
  export  const GetTruss = gql`
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
