import React from "react";
import styled from "styled-components";
import PrimaryButton from "../simple/buttons/PrimaryButton";
import SecondaryButton from "../simple/buttons/SecondaryButton";
import { fontSizes } from "@/constants/fontSizes";
import { colors } from "@/constants/colors";

const ProceedPopup = ({
  title,
  description,
  onCancel,
  onProceed,
  loading,
  disabled,
}) => {
  return (
    <Wrapper>
      <p className="title">{title}</p>
      <p>{description}</p>
      <div>
        <SecondaryButton
          value={"Cancel"}
          onClick={onCancel}
          loading={loading}
          disabled={disabled}
        />
        <PrimaryButton
          value={"Proceed"}
          onClick={onProceed}
          loading={loading}
          disabled={disabled}
        />
      </div>
    </Wrapper>
  );
};

export default ProceedPopup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  p {
    font-size: ${fontSizes.xs};
    color: ${colors.gray500};
    text-align: center;
    margin: 0 0 1rem;
  }
  .title {
    font-size: ${fontSizes.m};
    font-weight: 600;
    color: ${colors.gray500};
    text-align: center;
    margin: 0;
  }
  div {
    display: flex;
    gap: 0.5rem;
  }
`;
