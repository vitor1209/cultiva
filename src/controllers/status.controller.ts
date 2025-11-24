import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { StatusQueryKey, type UpdateStatus } from "../models/status.types";

export const useUpdateStatus = () => {
  return useMutation<
    UpdateStatus.Response,
    unknown,
    { id: number; status: number } 
  >({
    mutationKey: [StatusQueryKey.UPDATE],
    mutationFn: async ({ id, status }) => {
      const { data } = await api.put(`/pedido/${id}/status`, { status });
      return data;
    },
  });
};
