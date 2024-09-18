import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import React from "react";
import styled from "styled-components";
import { FaStreetView } from "react-icons/fa";
import {
  useGetAllCountries,
  useGetAllCountriesByName,
} from "@/hooks/countries/country.hook";

const CountryCard = () => {
  return (
    <div className="body">
      <div className="left">
        <p className="name">Country Name</p>
        <p className="sub-info">Capital - Capital * Continent - Continent</p>
        <p className="sub-info">
          Population - Population * Timezones - Timezones
        </p>
        <p className="name">About</p>
        <p className="sub-info">
          fghj jhbjh jhvnb kgvbjhgcvbjgfhcvb bgc bmhj bhgjhg jgfhgcvb
          gvybiurefbwer wkerhfweudw efwjcesf wdsbc wdfsjcwjehfc whisdf wjahfwehj
          fweifbw emffc wrsdkf rwkhsfvwr cdjhsfnbfcw hbfedf cwhsfwjef jwhfijwe
          wjeihfb wsdnfj
        </p>
      </div>
      <div className="right">
        <img src="" alt="flag" className="flag" />
        <img src="" alt="coat of arms" className="coat" />
      </div>
    </div>
  );
};

const CountreeLayout = () => {
  const { data } = useGetAllCountries();
  const { data: yes } = useGetAllCountriesByName("ger");
  console.log({ dataxxxxxxx: data, yes });
  return (
    <Wrapper>
      <div className="header">
        <h4>
          <FaStreetView style={{ marginRight: "5px" }} />
          Countree
        </h4>
        <div>
          <input type="text" placeholder="Search" />
          <p className="hint">Press Enter to search</p>
        </div>
      </div>
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </Wrapper>
  );
};

export default CountreeLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
  width: 100%;
  p {
    margin: 0;
    padding: 0;
    /* background-color: pink; */
  }
  .header {
    display: flex;
    /* flex-direction: column; */
    gap: 1rem;
    h4 {
      font-size: ${fontSizes.xl};
      font-weight: 600;
      color: ${colors.gray600};
    }
    input {
      width: 250px;
      border-radius: 5px;
      outline: 0;
      height: 25px;
      border: 1px solid ${colors.gray300};
      padding: 5px;
      background-color: transparent;
      color: ${colors.gray600};
      font-weight: 500 !important;
      font-style: italic;
      font-size: ${fontSizes.m};
    }
    .hint {
      color: ${colors.gray500};
      font-size: ${fontSizes.xs};
      font-weight: 400;
      font-style: italic;
      margin-top: 0.2rem;
    }
  }
  .body {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    .left {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      flex: 7;
      /* background-color: ${colors.gray200}; */
      .name {
        font-size: ${fontSizes.m};
        font-weight: 600;
        color: ${colors.gray600};
      }
      .sub-info {
        font-size: ${fontSizes.s};
        color: ${colors.gray500};
        line-height: 20px;
      }
    }
    .right {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      flex: 3;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: ${colors.gray200};
        border: 5px solid ${colors.white};
      }
    }
  }
`;
