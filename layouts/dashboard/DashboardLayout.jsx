import { colors } from "@/constants/colors";
import useLoggedInUser from "@/hooks/userLoggedIn";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../Header";

const DashboardLayout = ({ children }) => {
  const { userProfile } = useLoggedInUser();
  const { asPath, push } = useRouter();

  // useEffect(() => {
  //   console.log({ userProfile, asPath });
  //   if (userProfile && asPath === "/login") {
  //     push("/dashboard");
  //   } else if (userProfile && asPath !== "/login") {
  //     push(asPath);
  //   } else if (!userProfile && !asPath.startsWith("/dashboard")) {
  //     push(asPath);
  //   } else {
  //     push("/login");
  //   }
  // }, [userProfile, asPath]);
  return (
    <Wrapper>
      {asPath.startsWith("/dashboard") && <Header />}
      <div className="body">{children}</div>
    </Wrapper>
  );
};

export default DashboardLayout;

const Wrapper = styled.div`
  /* background-color: ${colors.gray500}; */
  height: 100vh;
  width: 100%;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  .body {
    display: flex;
    /* flex-direction: column; */
    background-color: ${colors.gray50};
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    padding: 1rem;
  }
`;
