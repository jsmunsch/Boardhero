import React from "react";
import styled from "styled-components";

const FlipContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  margin-left: 130px;
  height: 15%;
<<<<<<< HEAD
  width: 60%;
=======
  width: 60%
>>>>>>> master
  font-size: 1.4em;
`;

export default function CardFlip({ children }) {
  return <FlipContainer>{children}</FlipContainer>;
}
