import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import { resetAccount } from "@/store/slices/account.slice";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <p>Project Name</p>
      <p className="action" onClick={() => dispatch(resetAccount())}>
        Logout
      </p>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 30px; */
  padding: 1rem;
  border-bottom: 1px solid ${colors.gray200};
  p {
    font-size: ${fontSizes.m};
  }
  .action {
    cursor: pointer;
    color: ${colors.error700};
  }
`;
