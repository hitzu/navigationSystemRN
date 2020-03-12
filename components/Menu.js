import React from "react";
import styled from "styled-components";
import Card from "./Card";

class Menu extends React.Component {
  
  render() {
    return (
      <Container>
        <Cover />
      </Container>
      
    );
  }
}

export default Menu;

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items : center;
  justify-content: center;
  background: red;
  position : absolute;
`

const Cover = styled.View`
  width: 326px;
  height: 626px;
  background: black;
`;
