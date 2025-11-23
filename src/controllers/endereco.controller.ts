import { useMutation, useQuery } from "@tanstack/react-query";
import type { EnderecoAdd, EnderecoGet, EnderecoUpdate } from "../models/endereco.types";
import { api } from "../lib/api/api";

export const useGetEndereco = () => {
  return useQuery<EnderecoGet.Response>({
    queryKey: ["GET_ENDERECO"],
    queryFn: async () => {
      const response = await api.get("/enderecos");
      return response.data;
    },
  });
};

export const useEnderecoAdd = () => {
  return useMutation<EnderecoAdd.Response, unknown, EnderecoAdd.Request>({
    mutationFn: async (data) => {
      const response = await api.post("/enderecos", data);
      return response.data;
    },
  });
};

export const useEnderecoUpdate = () => {
  return useMutation<EnderecoUpdate.Response, unknown, EnderecoUpdate.Request>({
    mutationFn: async (data) => {
      const response = await api.put(`/enderecos/${data.id}`, data);
      return response.data;
    },
  });
};
