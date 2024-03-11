import styled from "styled-components";

const buttonDefault = true;

export const ButtonContainer = styled.button`
  background: ${buttonDefault ? "green" : "red"};
  color: white;
`;