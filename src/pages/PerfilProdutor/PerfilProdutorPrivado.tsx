import { Container, IconButton, Stack } from "@mui/material"
import { Header } from "../../components/Header/Header.tsx"
import { Button } from "../../components/Button/Button.tsx"
import SearchBar from "../../components/barSearch/barSearch.tsx"
import { UserRound, ChevronRight, LogOut } from "lucide-react";
import Typography from '@mui/joy/Typography';
import ProductCard from "../../components/Card/Card.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";
import * as Styled from "./PerfilProdutor.styled.ts";
import { HeaderProdutor } from "../../components/HeaderProdutor/HeaderProdutor.tsx";
import { useNavigate } from "react-router-dom";

export const ProdutorPrivatePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("usuarioLogado");
        navigate("/Login");
    };

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "left", marginTop: 12, padding: 0 }}
        >
            {/* Header principal */}
            <Header
                end={
                    <Stack direction="row" spacing={1}>
                        <IconButton aria-label="perfil" size="large">
                            <UserRound />
                        </IconButton>
                        <IconButton aria-label="logout" size="large" onClick={handleLogout}>
                            <LogOut />
                        </IconButton>
                    </Stack>
                }
                start={
                    <Stack flex={1} minWidth="250px" maxWidth="400px">
                        <SearchBar />
                    </Stack>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Seus Produtos</Button>
                    <Button variante="ButtonLinkBlack" to="/Pedidos" tamanho="sm">Pedidos</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                </>
            </Header>

            {/* Header do produtor */}
            <HeaderProdutor
                nome="Sítio Verde Serra"
                endereco="Rua das Palmeiras, 233 - Santa Branca"
                telefone="(19) 99855-2291"
                rating={4.8}
                reviews={128}
                logo={"https://scontent.fcgh17-1.fna.fbcdn.net/v/t51.75761-15/476900709_18018938066669479_1055719783307189216_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1L76eXZgVpsQ7kNvwG44Mei&_nc_oc=AdlB-yur_e7ULD9hmRFK4383vl95TUNU8QECKmfbY79-gN5mzEnpPsa80YIoRIsPjivHdD-0_1bd6lK_pv6lJ80I&_nc_zt=23&_nc_ht=scontent.fcgh17-1.fna&_nc_gid=0IqFh4BOMMuN0lBhQbIi9w&oh=00_AfjyBiFrzn5xUibSlxw1ndOVvaPSHOGnuyRv_Ud_NFRmBQ&oe=6917C411"}
                descricao="Produtor local especializado em cultivo orgânico de hortaliças. Comprometido com a sustentabilidade e qualidade dos produtos."
                beditar
            />

            {/* Produtos */}
            <Container
                maxWidth={"xl"}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}
            >
                <Stack
                    direction="row"
                    justifyContent='space-between'
                    width="90%"
                    alignItems='center'
                    marginBottom={2}
                >
                    <Typography level="body-lg">Seus Produtos</Typography>
                    <Button
                        ladoIcon="direita"
                        icon={ChevronRight}
                        variante="ButtonLinkBlack"
                        tamanho={"sm"}
                    >
                        Ver todos
                    </Button>
                </Stack>

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    gap={3}
                    flexWrap="wrap"
                    justifyContent="space-evenly"
                    alignItems="center"
                    width="95%"
                >
                    {/* Cards de exemplo — você pode substituir por dados reais */}
                    <ProductCard
                        image="https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"
                        name="Alface Orgânica"
                        lugar="Sítio Verde"
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image="https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"
                        name="Alface Orgânica"
                        lugar="Sítio Verde"
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image="https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"
                        name="Alface Orgânica"
                        lugar="Sítio Verde"
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image="https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"
                        name="Alface Orgânica"
                        lugar="Sítio Verde"
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                    <ProductCard
                        image="https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"
                        name="Alface Orgânica"
                        lugar="Sítio Verde"
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produtor'}
                    />
                </Stack>
            </Container>

            <Styled.Division />
            <Footer />
        </Container>
    )
}
