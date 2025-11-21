export interface CardProps {
    image: string;
    name: string;
    lugar: string;
    descricao?: string;
    validade?: string;
    preco?: string | number;
    tipoCard: "Horta" | "Produtor" | "Produto";
}