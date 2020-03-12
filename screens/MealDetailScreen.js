import React from 'react';
import {StyleSheet, ScrollView, SafeAreaView, Animated, TouchableOpacity, Dimensions} from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import Card from "../components/Card"
import Menu from "../components/Menu"

class MealDetailScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active : false 
    };
  }


  toggleMenu = () => {
    
    this.screenHeight = Dimensions.get("window").height;
    console.log("intento mostrar el menu jajaja", this.screenHeight)
    this.setState({ active : !this.state.active }, () =>
    Animated.spring(new Animated.Value(this.state.active ? 0 : this.screenHeight), {
      toValue: this.state.active ? this.screenHeight : 0
    }).start())
  };


  render(){
      
      const AnimatedContainer = Animated.createAnimatedComponent(Container);

      return (
          <SafeAreaView>
            <ScrollView showsHorizontalScrollIndicator={false}>

                <TouchableOpacity
                  onPress={this.toggleMenu}
                  style={{
                    position: "absolute",
                    top: "2%",
                    left: "2%",
                    zIndex: 1
                  }}
                >
                  <CloseView>
                    <Ionicons name="ios-close" size={44} color="#546bfb" />
                  </CloseView>
                </TouchableOpacity>

                <Card
                  title="Styled Components"
                  background={require("../assets/images/gatoChidop.jpg")}
                  caption="React Native"
                  logo={require("../assets/images/hunter.gif")}
                  subtitle="5 of 12 sections"
                />
                <AnimatedContainer style={{ top: this.state.active ? this.screenHeight : 0 }}>
                  <Menu/>
                </AnimatedContainer>
            </ScrollView>
          </SafeAreaView>
         
      );
  };
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  position : absolute;
  bottom : 0;
`

const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`

export default MealDetailScreen;
