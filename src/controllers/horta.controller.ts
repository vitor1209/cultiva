import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { HortaQueryKey, type GetHorta } from "../models/horta.types";

export const useGetHorta = () => {
  return useQuery<GetHorta.Response>({
    queryKey: [HortaQueryKey.GET],
    queryFn: async () => {
      const response = await api.get("/hortas");
      return response.data.data; 
    },
  });
};
