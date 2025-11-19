export interface ProductCardComponentProps {
    title: string
    farm: string
    price: number
    quantity: number
    imageUrl: string
    onIncrease: () => void
    onDecrease: () => void
    onDelete: () => void
}
