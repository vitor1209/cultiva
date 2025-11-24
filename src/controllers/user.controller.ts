import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import type { AuthUpdate, AuthUserData } from "../models/user.types";

export const useGetUser = () => {
  return useQuery<AuthUserData.User>({
    queryKey: ["GET_USER"],
    queryFn: async () => {
      const response = await api.get("/user");
      return response.data;
    },
  });
};

export const useAuthUpdate = () => {
  return useMutation<AuthUpdate.Response, unknown, FormData>({
    mutationFn: async (data: FormData) => {
      const response = await api.post("/user/editar", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
  });
};
