import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";

const SecondaryButton = ({ onClick, value, disabled, type }) => {
  return (
    <Button onClick={onClick} disabled={disabled} type={type ?? "button"}>
      {value}
    </Button>
  );
};

export default SecondaryButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${colors.gray100};
  border: 1px solid ${colors.gray200};
  color: ${colors.gray600};
  padding: 0.7rem;
  cursor: pointer;
  border-radius: 5px;
  outline: none;
  /* border: 0; */
  font-size: ${fontSizes.m};
`;
