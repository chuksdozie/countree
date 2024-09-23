import { colors } from "@/constants/colors";
import { fontSizes } from "@/constants/fontSizes";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaStreetView } from "react-icons/fa";
import {
  useGetAllCountries,
  useGetAllCountriesByName,
} from "@/hooks/countries/country.hook";
import Link from "next/link";

const CountryCard = ({ country }) => {
  return (
    <div className="body">
      <div className="left">
        <p className="name">
          {country?.name?.common} {country?.flag}
        </p>
        <p className="name">{country?.name?.official}</p>
        <p className="sub-info">
          Capital - {country?.capital?.[0]} ----- Continent - {country?.region}
        </p>
        <p className="sub-info">
          Population - {country?.population} ----- Timezones -{" "}
          {country?.timezones?.[0]}
        </p>
        <p className="sub-info">
          Language -{" "}
          {country?.languages?.[0] && Object?.values(country?.languages)?.[0]}{" "}
          ----- Week begins on - {country?.startOfWeek}
        </p>
        <Link href={country?.maps?.googleMaps} target="_blank">
          <p className="map">View {country?.name?.common} on Google Maps</p>
        </Link>

        {/* <p className="name">About</p>
        <p className="sub-info">
          fghj jhbjh jhvnb kgvbjhgcvbjgfhcvb bgc bmhj bhgjhg jgfhgcvb
          gvybiurefbwer wkerhfweudw efwjcesf wdsbc wdfsjcwjehfc whisdf wjahfwehj
          fweifbw emffc wrsdkf rwkhsfvwr cdjhsfnbfcw hbfedf cwhsfwjef jwhfijwe
          wjeihfb wsdnfj
        </p> */}
      </div>
      <div className="right">
        <div>
          <img src="" alt="flag" className="flag" src={country?.flags?.png} />
          <p className="sub-info">Flag of {country?.name?.common}</p>
        </div>
        {country?.coatOfArms?.png && (
          <div>
            <img
              src=""
              alt="coat of arms"
              className="coat"
              src={country?.coatOfArms?.png}
            />
            <p className="sub-info">Coat of Arms</p>
          </div>
        )}
      </div>
    </div>
  );
};

const CountreeLayout = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useGetAllCountries();
  const [countries, setCountries] = useState([]);
  // const { data } = useGetAllCountriesByName(searchValue);
  // const countries = data?.data;
  // const countries = [];
  // console.log({ dataxxxxxxx: data });

  useEffect(() => {
    if (!searchValue && data?.data) {
      setCountries(data?.data);
    } else if (searchValue && data?.data) {
      const newArray = data?.data?.filter(
        (country) =>
          country?.name?.common.toLowerCase() === searchValue.toLowerCase() ||
          country?.name?.common
            .toLowerCase()
            .includes(searchValue.toLowerCase())
      );
      setCountries(newArray);
    } else {
      setCountries([]);
    }
  }, [data, searchValue]);
  return (
    <Wrapper>
      <div className="header">
        <h4>
          <FaStreetView style={{ marginRight: "5px" }} />
          Countree
        </h4>
        <div>
          <input
            type="text"
            placeholder="Search"
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                console.log(e.target.value);
                setSearchValue(e.target.value);
              }
            }}
            onChange={(e) => {
              console.log(e.target.value);
              setSearchValue(e.target.value);
            }}
          />
          <p className="hint">Press Enter to search</p>
        </div>
      </div>
      {isLoading && <p>Loading, Please wait...</p>}
      {countries?.map((country, index) => (
        <CountryCard key={`${country?.area}${index}`} country={country} />
      ))}
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
      .map {
        font-size: ${fontSizes.s};
        color: ${colors.primary600};
        font-weight: 600;
        line-height: 20px;
      }
    }
    .right {
      display: flex;
      gap: 3rem;
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
