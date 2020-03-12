import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={ props.background } />
      <Title>{ props.title }</Title>
    </Cover>
    <Content>
      <Logo source={ props.logo } />
      <Wrapper>
        <Caption> { props.caption } </Caption>
        <Subtitle>{ props.subtitle }</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

const Container = styled.View`
  flex : 1;
  align-items : center;
  justify-content: center;
`

const Cover = styled.View`
  width: 326px;
  height: 626px;
  border-radius: 28px;
  overflow: hidden;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  width: 170px;
  margin-top: 20px;
  margin-left: 20px;
`;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 80px;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 4px;
`;

export default Card

