import { View ,FlatList } from 'react-native';
import React from 'react';
// import FoodItem from '../foodItem';
import styles from './styles';
import foods from './foods';

export default function FoodList(props) {
  return (
    <View style={styles.container}>
      <FlatList /*data={foods}*/ renderItem={({item}) => <FoodItem food={item} /> } />
    </View>
  )
}