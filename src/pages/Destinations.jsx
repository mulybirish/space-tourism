import React, { useState } from "react";
import BgImage from "../assets/destination/background-destination-desktop.jpg";
import styled from "styled-components";
import data from "../data.json";
import PlanetInfo from "../components/PlanetInfo";
import PlanetImage from "../components/PlanetImage";
import photo from "../assets/destination/image-moon.png";

const Container = styled.div`
  background-image: url(${BgImage});
  height: 100vh;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* flex-direction: row; */

  /* display: grid;
  place-items: center;
  margin: 0;  */
`;
const Section = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  /* flex-direction: row; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
  gap: 10px;
  color: green;
`;
const ListItem = styled.li`
  background-color: yellow;
  color: black;
  /* width: 200px;
  height: 100px; */
`;

const ImageHolder = styled.div`
  /* background-color: yellow; */
  /* color: black; */
  /* height: 400px;
  width: 400px; */
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  background-color: yellow;
  /* margin-top: 100px; */
  /* position: absolute; */
  /* left: 0%;
  right: 35.84%;
  top: 0%;
  bottom: 92.8%; */
  /* width: 400px;
  height: 400px; */
`;

const Destinations = () => {
  const [planet, setPlanet] = useState(data.destinations[0]);
  const stateChange = (des) => {
    setPlanet(des);
  };
  console.log(planet);
  return (
    <Container>
      <Section>
        <h1>dfgdfgdf</h1>
        <h1>dfgdfgdf</h1>
        <h1>dfgdfgdf</h1>
        <h1>dfgdfgdf</h1>
        <Buttons>
          {data.destinations.map((des) => {
            return (
              <button
                value={des}
                id={des.name}
                onClick={() => stateChange(des)}
              >
                {des.name}
              </button>
            );
          })}
        </Buttons>
        <Buttons>
          <PlanetInfo planet={planet} data={data} stateChange={stateChange} />
        </Buttons>
      </Section>
      {/* <ImageHolder><img src={planet.images[0]} alt="" /></ImageHolder> */}
      <PlanetImage planet={planet} />
    </Container>
  );
};

export default Destinations;
