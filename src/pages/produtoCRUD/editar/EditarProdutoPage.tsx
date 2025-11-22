import { Container, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import { Alert } from "@mui/joy";
import { Asterisk, UserRound } from "lucide-react";
import { Header } from "../../../components/Header/Header.tsx";
import SearchBar from "../../../components/barSearch/barSearch.tsx";
import { Button } from "../../../components/Button/Button.tsx";
import { Footer } from "../../../components/Footer/Footer.tsx";
import { Input } from "../../../components/Input/Input.tsx";
import { MASCARAS } from "../../../masks/index.ts";
import * as styled from "../CadastrarProdutoPage.styled.ts";
import { InputImagem } from "../../../components/Input/BoxImg/BoxImg.tsx";
import { SelectControlado } from "../../../components/Input/Select/Select.tsx";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import type { CadastroProdutoType } from "../CadastrarProduto.schemas.ts";
import { useEditarProduto } from "./EditarProduto.hook.ts";

export function EditarProdutoPage() {
    const { id } = useParams();
    const { produto, carregarProduto, atualizarProduto, successMessage, errorMessage, loading } = useEditarProduto();

    const { control, handleSubmit, reset } = useForm<CadastroProdutoType>();

    useEffect(() => {
        if (id) carregarProduto(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const unidadeMedidaMap: Record<number, "kg" | "gr" | "l" | "ml" | "und" | "dz" | "cm"> = {
        1: "kg",
        2: "ml",
        3: "gr",
        4: "l",
        5: "dz",
        6: "und",
        7: "cm",
    };

    useEffect(() => {
        if (produto) {
            reset({
                nome: produto.nome,
                descricao: produto.descricao,
                preco: `R$ ${produto.preco_unit.toFixed(2)}`,
                quantidadeEstoque: String(produto.quantidade_estoque),
                quantidadeMedida: String(produto.quant_unit_medida),
                unidadeMedida: unidadeMedidaMap[produto.fk_unidade_medida_id] as "kg" | "ml" | "gr" | "l" | "dz" | "und" | "cm",
                dataValidade: produto.validade ? new Date(produto.validade).toLocaleDateString("pt-BR") : "",
                imagem: undefined,
                dataColheita: ""
            });
            console.log(produto.imagem);
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [produto, reset]);


    const onSubmit = handleSubmit((data) => {

        const unidadeIdMap: Record<string, number> = {
            kg: 1,
            ml: 2,
            gr: 3,
            l: 4,
            dz: 5,
            und: 6,
            cm: 7,
        };

        if (!id) return;

        const formData = new FormData();

        const precoFormatado = parseFloat(data.preco.replace("R$", "").replace(/\./g, "").replace(",", "."));

        formData.append("nome", data.nome);
        formData.append("descricao", data.descricao || "");
        formData.append("preco_unit", String(precoFormatado.toFixed(2)));
        formData.append("quantidade_estoque", String(Math.floor(Number(data.quantidadeEstoque))));
        formData.append("quant_unit_medida", String(Math.floor(Number(data.quantidadeMedida))));

        if (data.dataValidade) {
            const [d, m, y] = data.dataValidade.split("/").map(Number);
            const validadeString = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
            formData.append("validade", validadeString);
        }

        formData.append("fk_unidade_medida_id", String(unidadeIdMap[data.unidadeMedida]));

        if (data.imagem) {
            const file = Array.isArray(data.imagem) ? data.imagem[0] : data.imagem;
            formData.append("caminho", file);
        }

        atualizarProduto(id, formData);
    });

    return (
        <Container disableGutters maxWidth={false} sx={{ backgroundColor: "#fff8f0", mt: 8, textAlign: "center", p: 0 }}>
            <Header
                end={<IconButton size="large"><UserRound /></IconButton>}
                start={<Stack flex={1} minWidth="250px" maxWidth="400px"><SearchBar /></Stack>}
            >
                <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
                <Button variante="ButtonLinkBlack" tamanho="sm">Seus Produtos</Button>
                <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
            </Header>

            <Stack>
                <form onSubmit={onSubmit}>
                    <styled.ContainerInputs>
                        <styled.BoxFoto>
                            <InputImagem
                                name="imagem"
                                control={control}
                                label="Imagem do Produto:"
                                height={40}
                                width={45}
                                defaultImage={produto?.imagem}
                            />
                        </styled.BoxFoto>

                        <styled.BoxInputs>
                            <styled.InputWrapper>
                                <Input Icon={Asterisk} required placeholder="Nome do Produto" name="nome" label="Nome do Produto:" control={control} />
                            </styled.InputWrapper>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required mask={MASCARAS.data} placeholder="dd/mm/aaaa" name="dataValidade" label="Data de validade:" control={control} />
                            </styled.InputRow>

                            <styled.InputWrapper>
                                <Input multiline rows={5} Icon={Asterisk} required placeholder="Descrição detalhada" name="descricao" label="Descrição detalhada:" control={control} />
                            </styled.InputWrapper>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required type="number" placeholder="Unidades" name="quantidadeMedida" label="Quantidade por unidade:" control={control} />
                                <Stack sx={{ width: { md: "90%", lg: "35%" } }}>
                                    <Typography variant="subtitle1" fontWeight={500} color="#0A0A0A">Unidade de medida:</Typography>
                                    <SelectControlado control={control} name="unidadeMedida" placeholder="Selecione uma opção">
                                        {["kg", "ml", "gr", "l", "dz", "und", "cm"].map((u) => (
                                            <MenuItem key={u} value={u}>{u}</MenuItem>
                                        ))}
                                    </SelectControlado>
                                </Stack>
                            </styled.InputRow>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required type="number" placeholder="Quantidade disponível" name="quantidadeEstoque" label="Quantidade disponível:" control={control} />
                                <Input mask={MASCARAS.real} Icon={Asterisk} required placeholder="R$ 00,00" name="preco" label="Preço:" control={control} />
                            </styled.InputRow>

                            <Stack flexDirection="row" width="90%" justifyContent="space-between" mb="10%" mt="5%">
                                <Button variante="ButtonGray" to="/HomeProdutor" tamanho="md" type="button" sx={{ width: "48%" }}>Cancelar</Button>
                                <Button tamanho="md" variante="ButtonGreen" sx={{ width: "48%" }} onClick={onSubmit} disabled={loading}>
                                    {loading ? "Buscando..." : "Salvar Alterações"}
                                </Button>
                            </Stack>

                            {successMessage && <Alert color="success" sx={{ mt: 2 }}>{successMessage}</Alert>}
                            {errorMessage && <Alert color="danger" sx={{ mt: 2 }}>{errorMessage}</Alert>}
                        </styled.BoxInputs>
                    </styled.ContainerInputs>
                </form>
            </Stack>

            <Footer />
        </Container>
    );
}
