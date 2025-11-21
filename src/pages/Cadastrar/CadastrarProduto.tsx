import { Container, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import { Alert } from "@mui/joy";
import { Asterisk, UserRound } from "lucide-react";
import { Header } from "../../components/Header/Header.tsx";
import SearchBar from "../../components/barSearch/barSearch.tsx";
import { Button } from "../../components/Button/Button.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import { Input } from "../../components/Input/Input.tsx";
import { MASCARAS } from "../../masks/index.ts";
import * as styled from "./CadastrarProdutoPage.styled.ts";
import { InputImagem } from "../../components/Input/BoxImg/BoxImg.tsx";
import { SelectControlado } from "../../components/Input/Select/Select.tsx";
import { useCadastroProduto } from "./CadastrarProduto.hooks.ts";
import { useForm } from "react-hook-form";
import type { CadastroProdutoType } from "./CadastrarProduto.schemas.ts";

export function CadastrarProdutoPage() {
    const { control, handleSubmit } = useForm<CadastroProdutoType>();
    const { cadastroProduto, successMessage, errorMessage, loading } = useCadastroProduto();

   const onSubmit = handleSubmit((data) => {
  // Pegar o usuário logado
  const usuarioLogado = localStorage.getItem("usuarioLogado");
  let fkHortaId = 0; // valor padrão

  if (usuarioLogado) {
    try {
      const userObj = JSON.parse(usuarioLogado);
      // Agora usamos o id do usuário como fk_horta_id
      fkHortaId = userObj.id || 0;
    } catch (err) {
      console.warn("Não foi possível ler o usuário logado:", err);
    }
  }

  // FormData para envio
  const formData = new FormData();
  const precoFormatado = parseFloat(
    data.preco.replace("R$", "").replace(/\./g, "").replace(",", ".")
  );

  formData.append("nome", data.nome);
  formData.append("descricao", data.descricao || "");
  formData.append("preco_unit", String(precoFormatado.toFixed(2)));
  formData.append("quantidade_estoque", String(Math.floor(Number(data.quantidadeEstoque))));
  formData.append("quant_unit_medida", String(Math.floor(Number(data.quantidadeMedida))));

  // Aqui convertemos a data para YYYY-MM-DD
  const [day, month, year] = data.dataValidade.split("/").map(Number);
  const validadeString = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  formData.append("validade", validadeString);

  formData.append("fk_unidade_medida_id", String(Number(data.unidadeMedida)));
  formData.append("fk_horta_id", String(fkHortaId));

  if (data.imagem) {
    const file = Array.isArray(data.imagem) ? data.imagem[0] : data.imagem;
    formData.append("caminho", file);
  }

  console.log("Dados do produto antes do envio:");
  console.log({
    nome: data.nome,
    descricao: data.descricao,
    preco_unit: precoFormatado.toFixed(2),
    quantidade_estoque: Math.floor(Number(data.quantidadeEstoque)),
    quant_unit_medida: Math.floor(Number(data.quantidadeMedida)),
    validade: validadeString,
    fk_unidade_medida_id: Number(data.unidadeMedida),
    fk_horta_id: fkHortaId,
    imagem: data.imagem,
  });

  // Chamar mutation
  cadastroProduto(formData);
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
                                label="Cadastrar Novo Produto:"
                                height={40}
                                width={45}
                            />
                        </styled.BoxFoto>

                        <styled.BoxInputs>
                            <styled.InputWrapper>
                                <Input Icon={Asterisk} required placeholder="Nome do Produto" name="nome" label="Nome do Produto:" control={control} />
                            </styled.InputWrapper>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required mask={MASCARAS.data} placeholder="dd/mm/aaaa" name="dataColheita" label="Data da colheita:" control={control} />
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
                                        <MenuItem value="1">kg</MenuItem>
                                        <MenuItem value="2">ml</MenuItem>
                                        <MenuItem value="3">gr</MenuItem>
                                        <MenuItem value="4">l</MenuItem>
                                        <MenuItem value="5">dz</MenuItem>
                                        <MenuItem value="6">und</MenuItem>
                                        <MenuItem value="7">cm</MenuItem>

                                    </SelectControlado>
                                </Stack>
                            </styled.InputRow>

                            <styled.InputRow>
                                <Input Icon={Asterisk} required type="number" placeholder="Quantidade disponível" name="quantidadeEstoque" label="Quantidade disponível:" control={control} />
                                <Input mask={MASCARAS.real} Icon={Asterisk} required placeholder="R$ 00,00" name="preco" label="Preço:" control={control} />
                            </styled.InputRow>

                            <Stack flexDirection="row" width="90%" justifyContent="space-between" mb="10%" mt="5%">
                                <Button variante="ButtonGray" tamanho="md" type="button" sx={{ width: "48%" }}>Cancelar</Button>
                                <Button tamanho="md" variante="ButtonGreen" sx={{ width: "48%" }} onClick={onSubmit} disabled={loading}>
                                    {loading ? "Salvando..." : "Salvar"}
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
