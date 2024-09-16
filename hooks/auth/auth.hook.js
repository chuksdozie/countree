import { API } from "@/api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const URL = "/auth";

export const useCounterQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => API.get("/users/test"),
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => API.post(`${URL}/register`, data),
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => API.post(`${URL}/login`, data),
    onSuccess: () => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
