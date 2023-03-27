import { View ,FlatList } from 'react-native';
import React from 'react';
import FoodItem from '../foodItem/index.js';
import styles from './styles';
import foods from './foods';

const FoodList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList data={foods} renderItem={({item}) => <FoodItem food={item} /> } />
    </View>
  )
}

export default FoodList;