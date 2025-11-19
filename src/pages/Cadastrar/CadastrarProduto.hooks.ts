import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cadastroProduto, type CadastroProdutoType } from "./CadastrarProduto.schemas"
import { useCreateProduto } from "../../controllers/produto.controller"
import { useNavigate } from "react-router-dom"

export const useProduto = () => {
    const createProduto = useCreateProduto()
    const navigate = useNavigate() // ← useNavigate

    const { control, handleSubmit, reset } = useForm<CadastroProdutoType>({
        resolver: zodResolver(cadastroProduto),
    })

    const formatarData = (data: string) => {
        const [dia, mes, ano] = data.split("/")
        return `${ano}-${mes}-${dia}`
    }

    const converterPreco = (valor: string): number => {
        return Number(
            valor
                .replace("R$", "")
                .replace(/\./g, "")
                .replace(",", ".")
                .trim()
        )
    }

    const onSubmit = handleSubmit((data) => {
        const payload = {
            nome: data.nome,
            descricao: data.descricao ?? undefined,
            preco: converterPreco(data.preco),
            unidadeMedida: data.unidadeMedida,
            quantidadeEstoque: Number(data.quantidadeEstoque),
            quantidadeMedida: Number(data.quantidadeMedida),
            dataColheita: formatarData(data.dataColheita),
            dataValidade: formatarData(data.dataValidade),
        }

        console.log("Payload final:", payload)

        createProduto.mutate(payload, {
            onSuccess: () => {
                alert("Produto cadastrado com sucesso!")
                reset()
                navigate("/HomeProdutor") 
            },
            onError: () => {
                alert("Erro ao cadastrar produto")
            },
        })
    })

    return {
        control,
        handleSubmit,
        onSubmit,
        isLoading: createProduto.isPending,
        MEDIDAS: ["mg", "kg", "ml"] as const,
    }
}
