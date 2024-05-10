import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return (
    <>
      <Container>
        <div>
          <img src="\images\dices 1.png" />
        </div>

        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  align-content: center;
  max-width: 1180px;
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;
// const Button = styled.button`
//   color: white;
//   background: black;
//   border: none;
//   width: 210px;
//   height: 50px;
//   font-size: 18px;
//   text-align: center;
//   transition: all 0.4s ease-in;
//   border: 1px solid transparent;
//   cursor: pointer;
//   margin: 20px 0;
//   border-radius: 5px;
//   font-weight: 900;

//   &:hover {
//     background: white;
//     color: black;
//     border: 1px solid black;
//     transition: all 0.2s ease-in;
//     border-radius: 5px;
//     font-weight: 900;
//   }
//   @media (max-width: 768px) {
//     width: 100%;
//     text-align: center;
//     margin: 20px 0;
//   }
// `;

export default StartGame;
