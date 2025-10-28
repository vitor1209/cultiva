export interface CardProps {
    tipoCard: "Produto" | "Horta";
    image: string;
    name: string;
    lugar: string;
    avaliacao: number;
    preco?: number;
}
