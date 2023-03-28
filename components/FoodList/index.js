import { View ,FlatList, Dimensions } from 'react-native';
import React from 'react';
import FoodItem from '../FoodItem/index.js';
import styles from './styles';
import foods from './foods';


const FoodList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={foods} renderItem={({item}) => <FoodItem food={item} /> } snapToAlignment={"start"} decelerationRate={"fast"} snapToInterval={Dimensions.get("window").height} />
    </View>
  )
}

export default FoodList;