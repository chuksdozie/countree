import { API, COUNTRYAPI } from "@/api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const URL = "/auth";

export const useGetAllCountries = () => {
  return useQuery({
    queryKey: ["countries"],
    queryFn: () => COUNTRYAPI.get("/all"),
  });
};

export const useGetAllCountriesByName = (name) => {
  return useQuery({
    queryKey: [`countries${name}`],
    queryFn: () => COUNTRYAPI.get(`/name/${name}`),
  });
};
