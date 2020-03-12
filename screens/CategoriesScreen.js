import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
// import {  } from 'react-native-gesture-handler';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constant/Colors';

const CategoriesScreen = props => {

  console.log(Colors)

  const renderGridItem = (itemData) => {
    return (
        <TouchableOpacity style = { styles.gridItem } onPress = { () => {
          props.navigation.navigate({
            routeName : 'CategoryMeals',
            params : {
              categoryId : itemData.item.id
            }
          })
        } }>
          <View>
            <Text>{itemData.item.title}</Text>
          </View>
        </TouchableOpacity>
      )
  }

  return (
    <FlatList data = {CATEGORIES} renderItem = {renderGridItem}  numColumns = {2} keyExtractor = {(item,index) => item.id} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle : 'Meal Categories',
  headerStyle : {
    backgroundColor : Colors.primaryColor
  },
  headerTintColor : 'white'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem : {
    flex : 1,
    margin : 15,
    height : 150
  }
});

export default CategoriesScreen;
