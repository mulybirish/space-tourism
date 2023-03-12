import React from "react";
import styled from "styled-components";
import logo from "../assets/shared/logo.svg";

const Container = styled.div`
  display: flex;
  position: absolute;
  width: 1385px;
  height: 96px;
  left: 55px;
  top: 40px;
`;

const Logo = styled.img`
  position: absolute;
  width: 48px;
  height: 48px;
  left: 55px;
  top: 25px;
`;

const ListContainer = styled.div`
  position: relative;
  width: 775px;
  height: 96px;
  left: 610px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(40.7742px);
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 70px;
  position: absolute;
  width: 542px;
  height: 19px;
`;
const ListItem = styled.li`
  list-style-type: none;
  color: white;
  font-family: "Barlow Condensed", sans-serif;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
`;

const HorizontalRule = styled.hr`
  position: absolute;
  width: 473px;
  height: 0.7px;
  left: 167px;
  top: 44px;
  z-index: 10;
  background: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.25;
`;

const Span = styled.span`
  font-family: "Barlow Condensed", sans-serif;
  font-weight: 700;
  font-size: 1em;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.7px;
`;

const ListItemContainer = styled.div`
  height: 55px;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid rgba(255, 255, 255, 0.4);
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Logo src={logo} />
      <HorizontalRule />
      <ListContainer>
        <List>
          <ListItemContainer>
            <ListItem>
              {" "}
              <Span>00</Span> HOME
            </ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>
              <Span>01</Span> DESTINATION
            </ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>
              <Span>02</Span> CREW
            </ListItem>
          </ListItemContainer>
          <ListItemContainer>
            <ListItem>
              <Span>03</Span> TECHNOLOGY
            </ListItem>
          </ListItemContainer>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Navbar;
