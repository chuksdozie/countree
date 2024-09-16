import { API } from "@/api/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useCounterQuery = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: () => API.get("/users/test"),
  });
};

export const usePatchQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: console.log({ that: "ran" }),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
