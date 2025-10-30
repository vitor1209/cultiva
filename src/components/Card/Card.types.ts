export interface CardProps {
    tipoCard: "Produto" | "Horta" | "Produtor"
    image: string
    name: string
    lugar: string
    avaliacao: number
    preco?: string
}
