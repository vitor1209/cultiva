export interface CardProps {
    image: string;
    id: number;
    name: string;
    lugar: string;
    descricao?: string;
    validade?: string;
    preco?: string | number;
    tipoCard: "Horta" | "Produtor" | "Produto" | 'semLogin';
}