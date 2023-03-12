import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  width: 445px;
  height: 472px;
  left: 832px;
  top: 210px;
  background-color: white;
  /* 
  width: 400px;
  height: 400px;
  color: white;
  padding: 40px; */
`;
const PlanetInfo = ({ planet, data }) => {
  return (
    <Container>
      <div>
        {/* {data.destinations.map((des) => {
          return (
            <button value={des} id={des.name} onClick={() => setPlanet(des)}>
              {des.name}
            </button>
          );
        })} */}
      </div>
      <h1>{planet.name}</h1>
      <p>{planet.description}</p>
      <hr />
      <h3>distance</h3>
      <strong>{planet.distance}</strong>
    </Container>
  );
};

export default PlanetInfo;
