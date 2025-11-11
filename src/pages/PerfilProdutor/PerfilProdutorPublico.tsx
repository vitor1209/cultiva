import { Container, IconButton, Stack } from "@mui/material"
import { Header } from "../../components/Header/Header"
import { Button } from "../../components/Button/Button"
import SearchBar from "../../components/barSearch/barSearch"
import { UserRound } from "lucide-react";
import Typography from '@mui/joy/Typography';
import { ChevronRight } from "lucide-react";
import ProductCard from "../../components/Card/Card.tsx";
import { Footer } from "../../components/Footer/Footer";
import * as Styled from "../PerfilProdutor/PerfilProdutor.styled.ts";
import { HeaderProdutor } from "../../components/HeaderProdutor/HeaderProdutor.tsx";



export const PerfilProdutorPage = () => {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{ backgroundColor: "#fff8f0", textAlign: "left", marginTop: 12, padding: 0 }}
        >

            <Header
                end={
                    <IconButton aria-label="delete" size="large">
                        <UserRound />
                    </IconButton>
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

            
            
            <HeaderProdutor               
                nome="Sítio Verde Serra"
                endereco="Rua das Palmeiras, 233 - Santa Branca"
                telefone="(19) 99855-2291"
                rating={4.8}
                reviews={128}
                logo={"https://scontent.fcgh17-1.fna.fbcdn.net/v/t51.75761-15/476900709_18018938066669479_1055719783307189216_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=1L76eXZgVpsQ7kNvwG44Mei&_nc_oc=AdlB-yur_e7ULD9hmRFK4383vl95TUNU8QECKmfbY79-gN5mzEnpPsa80YIoRIsPjivHdD-0_1bd6lK_pv6lJ80I&_nc_zt=23&_nc_ht=scontent.fcgh17-1.fna&_nc_gid=0IqFh4BOMMuN0lBhQbIi9w&oh=00_AfjyBiFrzn5xUibSlxw1ndOVvaPSHOGnuyRv_Ud_NFRmBQ&oe=6917C411"}
                descricao="Produtor local especializado em cultivo orgânico de hortaliças. Comprometido com a sustentabilidade e qualidade dos produtos."
            />

            
            
            <Container maxWidth={"xl"} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', }}>
                <Stack direction="row" justifyContent='space-between' width="90%" alignItems='center' marginBottom={2}>
                    <Typography level="h4">Seus Produtos</Typography>
                    <Button ladoIcon="direita" icon={ChevronRight} variante="ButtonLinkBlack" tamanho={"sm"}>Ver todos</Button>
                </Stack>
                <Stack direction={{ xs: "column", sm: "row" }} gap={2} flexWrap="wrap" justifyContent="space-evenly" alignItems="center" width="95%"    >
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                    <ProductCard
                        image={"https://image.tuasaude.com/media/article/du/sw/beneficios-da-alface_16044.jpg"}
                        name={"Alface Orgânica"}
                        lugar={"Sítio Verde"}
                        avaliacao={4.8}
                        preco={'3.50'}
                        tipoCard={'Produto'}
                    />
                </Stack>
            </Container>
            
            <Styled.Division />            

            <Footer />

        </Container>
    )
}