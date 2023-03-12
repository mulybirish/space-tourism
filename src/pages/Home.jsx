import React from "react";
import styled from "styled-components";
import bgImage from "../assets/home/background-home-desktop.jpg";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background-image: url(${bgImage});
  display: flex;
  /* position: relative; */
  /* width: 1440px;
  height: 900px; */
  height: 100vh;
`;

const Section = styled.div`
  position: absolute;
  width: 450px;
  height: 382px;
  left: 165px;
  top: 287px;
  /* background-color: green; */
`;
const Title = styled.h2`
  position: absolute;
  height: 34px;
  left: 0.11%;
  right: 15.67%;
  top: calc(50% - 34px / 2 - 174px);

  font-family: "Barlow Condensed";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 34px;
  /* identical to box height */

  letter-spacing: 4.725px;

  color: #d0d6f9;
`;
const Space = styled.h1`
  position: absolute;
  height: 172px;
  left: 0%;
  right: 1.11%;
  top: calc(50% - 172px / 2 - 47px);

  font-family: "Bellefair";
  font-style: normal;
  font-weight: 400;
  font-size: 150px;
  line-height: 172px;
  /* identical to box height */

  color: #ffffff;
`;

const Paragraph = styled.p`
  color: #d0d6f9;
  position: absolute;
  height: 128px;
  left: 0.11%;
  right: 1.22%;
  top: calc(50% - 128px / 2 + 127px);

  font-family: "Barlow";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
`;

const ButtonContainer = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  left: 900px;
  top: 295px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const ExploreButton = styled.button`
  width: 274px;
  height: 274px;
  border-radius: 50%;
  font-size: 32px;
  font-family: "Bellefair";
  border: none;
  background-color: #ffffff;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    /* background-color: #1b2872; */
  }
`;
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Container>
        <Section>
          <Title>SO, YOU WANT TO TRAVEL TO</Title>
          <Space>SPACE</Space>
          <Paragraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Paragraph>
        </Section>
        <ButtonContainer>
          <ExploreButton>EXPLORE</ExploreButton>
        </ButtonContainer>
      </Container>
    </div>
  );
};

export default Home;
