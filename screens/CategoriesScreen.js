import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';
import styled from "styled-components";
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
          <Container>
            <Text>{itemData.item.title}</Text>
          </Container>
        </TouchableOpacity>
      )
  }

  return (
    <Screen>
      <TitleBar>
        <Avatar source={require("../assets/images/hunter.gif")}></Avatar>
        <TitleAndName>
          <Title>Welcome back,</Title>
          <Name>Meng</Name>
        </TitleAndName>
      </TitleBar>
      <FlatList data = {CATEGORIES} renderItem = {renderGridItem}  numColumns = {2} keyExtractor = {(item,index) => item.id} />
    </Screen>
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle : 'Meal Categories',
  headerStyle : {
    backgroundColor : Colors.primaryColor
  },
  headerTintColor : 'white'
}

const Screen = styled.View` 
  flex: 1;
`;

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  display : flex;
  flex-direction : row;
  
  align-items : center;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  margin-left: 20px;
`;

const TitleAndName = styled.View`
  width: 100%;
  display : flex;
  align-items : center;
  margin-right : 20px
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const styles = StyleSheet.create({
  
  gridItem : {
    flex : 1,
    margin : 15,
    height : 150
  }
});

export default CategoriesScreen;
