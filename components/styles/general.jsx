import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: ${colors.white};
  min-height: 100vh;
  flex-direction: ${({ direction }) => direction ?? `column`};
  justify-content: ${({ justify }) => justify ?? `flex-start`};
  align-items: ${({ align }) => align ?? `flex-start`};
  margin: 0;
  padding: 1rem;
  width: 100%;
  h1 {
    font-size: ${fontSizes.l};
    font-weight: 500;
    color: ${colors.gray600};
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  background-color: ${colors.white};
  flex-direction: ${({ direction }) => direction ?? `column`};
  justify-content: ${({ justify }) => justify ?? `flex-start`};
  align-items: ${({ align }) => align ?? `flex-start`};
  padding: 1rem;
  gap: 1rem;
  width: 100%;
`;
