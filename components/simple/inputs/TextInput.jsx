import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";

const TextInput = ({
  label,
  type,
  value,
  onChange,
  name,
  id,
  placeholder,
  error,
}) => {
  return (
    <ParentDiv>
      {label && <Label htmlFor={id}>{label}</Label>}
      <Input
        type={type ?? "text"}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p className="er">{error}</p>}
    </ParentDiv>
  );
};

export default TextInput;

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;
  width: 100%;
  p {
    /* width: 100%; */
    font-size: ${fontSizes.s} !important;
    color: ${colors.error700} !important;
    /* text-align: left; */
    /* background-color: pink; */
  }
`;

const Input = styled.input`
  outline: none;
  width: 100%;
  font-size: ${fontSizes.m};
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${colors.gray300};
  color: ${colors.gray600};
  /* ::placeholder {
    color: ${colors.gray100};
  } */
`;
const Label = styled.label`
  width: 100%;
  font-size: ${fontSizes.m};
  color: ${colors.gray600};
  text-align: left;
`;
