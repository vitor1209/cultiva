export interface ProdutorPrivado {
  nome: string;
  endereco: string;
  telefone: string;
  rating: number;
  reviews: number;
  descricao: string;
  logo?: string;
  desde?: string;
  beditar?: boolean;
}

export interface ProdutoDoProdutor {
  image: string;
  name: string;
  lugar: string;
  avaliacao: number;
  preco: string;
  tipoCard: "Produtor" | string;
}

export interface ProdutorPrivatePageProps {
  produtor: ProdutorPrivado;
  produtos: ProdutoDoProdutor[];
}
