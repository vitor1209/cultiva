import { Container, IconButton, Stack } from "@mui/material"
import { Header } from "../../components/Header/Header.tsx"
import { Button } from "../../components/Button/Button.tsx"
import { UserRound, ChevronRight } from "lucide-react";
import Typography from "@mui/joy/Typography";
import ProductCard from "../../components/Card/Card";
import { Footer } from "../../components/Footer/Footer";
import * as Styled from "./PerfilProdutor.styled";
import { HeaderProdutor } from "../../components/HeaderProdutor/HeaderProdutor";
import { useNavigate } from "react-router";
import { useGetHorta } from "../../controllers/horta.controller";
import { useGetProdutos } from "../../controllers/produto.controller";
import { useState } from "react";

export const ProdutorPrivatePage = () => {
    const navigate = useNavigate();
    const [mostrarTodos, setMostrarTodos] = useState(false);

    const { data: hortas } = useGetHorta();
    const usuarioLogado = localStorage.getItem("usuarioLogado");
    let fkHortaId = 1
    if (usuarioLogado) {
        try {
            const userObj = JSON.parse(usuarioLogado);
            fkHortaId = userObj.id || 1;
        } catch (err) {
            console.warn("Não foi possível ler o usuário logado:", err);
        }
    }

    const horta = hortas?.find((h) => h.id === Number(fkHortaId));

    const { data: produtos, isLoading, error } = useGetProdutos(Number(fkHortaId));

    const produtosExibidos = mostrarTodos ? produtos : produtos?.slice(0, 8);



    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "left", marginTop: 12, padding: 0 }}
        >
            <Header
                end={
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="perfil" size="large">
                            <UserRound />
                        </IconButton>
                    </Stack>
                }

            >
                <>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" to="/HomeProdutor#produtos" tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" to="/Sobre" tamanho="sm">Sobre</Button>
                </>
            </Header>

            <HeaderProdutor
                nome={horta?.nome ?? ''}
                endereco={horta?.usuario?.email ?? ''}
                telefone={String(horta?.usuario.telefone)}
                logo={horta?.usuario?.banner ?? ''}
                descricao={horta?.descricao ?? ''}
                beditar
            />

            <Container
                id="produtos"
                maxWidth={"xl"}
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <Stack direction="row" justifyContent="space-between" width="90%" marginBottom={2}>
                    <Typography level="body-lg">Seus Produtos</Typography>
                    <Button
                        ladoIcon="direita"
                        icon={ChevronRight}
                        variante="ButtonLinkBlack"
                        tamanho="sm"
                        onClick={() => setMostrarTodos(true)}
                    >
                        Ver todos
                    </Button>
                </Stack>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={3}
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                    width="95%"
                >
                    {isLoading && <Typography>Carregando produtos...</Typography>}
                    {error && <Typography>Erro ao carregar produtos</Typography>}

                    {produtosExibidos && produtosExibidos.length > 0 ? (
                        produtosExibidos.map((produto) => (
                            <ProductCard
                                key={produto.id}
                                id={produto.id}
                                image={produto.imagem ?? "https://veja.abril.com.br/wp-content/uploads/2016/12/maconha.jpg?crop=1&resize=1212,909"}
                                name={produto.nome}
                                lugar={horta?.usuario?.nome ?? ""}
                                descricao={produto.descricao}
                                preco={produto.preco_unit.toFixed(2)}
                                tipoCard="Produtor"
                            />
                        ))
                    ) : (
                        !isLoading && <Typography>Nenhum produto cadastrado</Typography>
                    )}
                </Stack>
            </Container>

            <Styled.Division />
            <Footer />
        </Container>
    );
};
