import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const AuthFormLayout = ({ children, title, footerText }) => {
  return (
    <FormWrapper>
      <div className="form-head">
        <p>{title}</p>
      </div>
      <div className="form-body">{children}</div>

      <div className="form-foot">
        <Link href={"/dashboard"}>
          <p>{footerText}</p>
        </Link>
      </div>
    </FormWrapper>
  );
};

export default AuthFormLayout;

const FormWrapper = styled.div`
  /* background-color: red; */
  width: 450px;
  border: 1px solid ${colors.gray300};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 0.5rem; */

  .form-head {
    background-color: ${colors.gray700};
    width: 100%;
    padding: 1rem 0.5rem;
    p {
      font-size: ${fontSizes.xl};
      color: ${colors.white};
    }
  }
  .form-body {
    /* background-color: ${colors.gray700}; */
    width: 100%;
    padding: 0.5rem;
    p {
      font-size: ${fontSizes.xl};
      color: ${colors.white};
    }
  }
  .form-foot {
    /* background-color: ${colors.gray700}; */
    width: 100%;
    padding: 0 1rem 1rem;
    p {
      font-size: ${fontSizes.s};
      color: ${colors.gray700};
      /* text-align: right; */
    }
  }
`;
