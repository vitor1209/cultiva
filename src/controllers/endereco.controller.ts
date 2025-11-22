import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api/api";
import { EnderecoKey, type EnderecoAdd } from "../models/endereco.types";

export const useEnderecoAdd = () => {
  return useMutation<EnderecoAdd.Response, unknown, EnderecoAdd.Request>({
    mutationKey: [EnderecoKey.POST],
    mutationFn: async (payload) => {
      const { data } = await api.post("/enderecos", payload);
      return data;
    },
  });
};
