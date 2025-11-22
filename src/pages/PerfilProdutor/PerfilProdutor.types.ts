export interface ProdutorPrivado {
  nome: string;
  endereco: string;
  telefone: string;
  descricao: string;
  logo?: string;
  desde?: string;
  beditar?: boolean;
}

export interface ProdutoDoProdutor {
  image: string;
  name: string;
  lugar: string;
  preco: string;
  tipoCard: "Produtor" | string;
}

export interface ProdutorPrivatePageProps {
  produtor: ProdutorPrivado;
  produtos: ProdutoDoProdutor[];
}
