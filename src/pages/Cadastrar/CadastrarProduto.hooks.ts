import { useForm, type SubmitHandler } from "react-hook-form"
import type { CadastroProdutoType } from "./CadastrarProduto.schemas"

export const useProduto = () => {
    const { control, handleSubmit } = useForm<CadastroProdutoType>()
    const onSubmit: SubmitHandler<CadastroProdutoType> = (data) => console.log(data)

    enum MEDIDAS {
        "mg",
        "kg",
        "ml",
        map,
    }

    return {
        MEDIDAS,
        control,
        handleSubmit,
        onSubmit,
    }
}
