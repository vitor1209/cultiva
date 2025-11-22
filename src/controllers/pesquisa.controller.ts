import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api/api";

export function useGetProdutosPesquisa({ nome }: { nome: string }) {
  return useQuery({
    queryKey: ["produtos-pesquisa", nome],
    queryFn: async () => {
      const response = await api.get(`/produto/filtros?nome=${nome}`);
      return response.data;
    },
    enabled: nome.trim() !== "", // só busca quando digita algo
  });
}