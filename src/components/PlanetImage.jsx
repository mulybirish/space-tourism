import React from "react";
import styled from "styled-components";

const Img = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: teal; */
`;
const PlanetImage = ({ planet }) => {
  console.log(planet.images.png);
  return (
    <Img>
      <img src={planet.images.png} alt="" />
    </Img>
  );
};

export default PlanetImage;
