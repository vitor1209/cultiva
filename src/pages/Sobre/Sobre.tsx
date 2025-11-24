import { Box, Typography, Stack, Paper, IconButton } from "@mui/material";
import logoCultiva from "../../assets/images/imgSobre/logoCultiva.svg";
import meninoPlantando from "../../assets/images/imgSobre/mninoPlantando.svg";
import vegetaisTerra from "../../assets/images/imgSobre/vegetaisTerra.svg";
import pratoSaudavel from "../../assets/images/imgSobre/pratoSaudavel.svg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Footer } from "../../components/Footer/Footer.tsx";
import { CarouselCards } from "../../components/CarouselCards/CarouselCards.tsx";
import ftLeticia from "../../assets/images/imgSobre/ftsGrupo/ftLeticia.svg";
import ftNi from "../../assets/images/imgSobre/ftsGrupo/ftNicole.svg";
import ftThais from "../../assets/images/imgSobre/ftsGrupo/ftThais.svg";
import ftVitor from "../../assets/images/imgSobre/ftsGrupo/ftVitor.svg";
import ftProfs from "../../assets/images/imgSobre/ftsGrupo/profs.svg";
import { useNavigate } from "react-router";



export function SobrePage() {

    const navigate = useNavigate();


    return (
        <Box width="100%" display="flex" flexDirection="column" alignItems="center" bgcolor={"#fff9dfff"}>
            {/* 
            <Header
                end={
                    <Button
                        to="/Login"
                            variante="ButtonGreen"
                            espacamento={14}
                            tamanho="md"
                        >
                            Login
                    </Button>
                }
            >
                <>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Início</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Produtores</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Produtos</Button>
                    <Button variante="ButtonLinkBlack" tamanho="sm">Como Funciona</Button>
                </>
            </Header> */}




            <Box position="absolute" top={20} left={20} zIndex={1000}>
                <Paper
                    elevation={3}
                    sx={{
                        borderRadius: "50px",
                        p: 0.5,
                        bgcolor: "#9bda76ff",
                        backdropFilter: "blur(6px)",
                    }}
                >
                    <IconButton onClick={() => navigate(-1)}>
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                </Paper>
            </Box>




            <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={4}
                mt={3}
                px={{ xs: 0, md: 0 }}
                py={{ xs: 10, md: 8 }}
                width="100%"
                maxWidth="1300px"
                alignItems="center"
            >
                <Box flex={1}>
                    <img src={logoCultiva} style={{ width: "80%" }} />
                    <Typography mt={-2} sx={{ width: "80%", marginLeft: "10%" }} fontSize={{ xs: "0.95rem", md: "1.1rem" }} fontFamily={"Arimo"}>
                        O Cultiva+ é uma plataforma desenvolvida para facilitar a conexão entre produtores locais de hortaliças, frutas, produtos orgânicos e alimentos naturais com consumidores da mesma região. O objetivo é ampliar a visibilidade desses produtores e incentivar o consumo de alimentos frescos e de qualidade, promovendo uma rotina mais saudável e sustentável para a comunidade.
                    </Typography>
                </Box>

                <Box flex={1} display="flex" justifyContent="center" >
                    <img src={meninoPlantando} style={{ width: "100%", maxWidth: "500px", marginBottom: "-80px" }} />
                </Box>
            </Stack>

            <Box
                component="img"
                src={vegetaisTerra}
                sx={{
                    width: "100%",
                    objectFit: "cover",
                    display: "block",
                    marginTop: 0,
                    marginBottom: 0,


                    height: {
                        xs: "25vh",   // altura maior no celular
                        md: "30vh",   // altura padrão no PC
                        lg: "40vh",   // altura padrão no PC
                    },
                }}
            />

            <CarouselCards></CarouselCards>

            <Box
                width="80%"
                maxWidth="1300px"
                px={{ xs: 3, md: 6 }}
                py={{ xs: 6, md: 10 }}
            >
                <Typography
                    align="left"
                    fontWeight="bold"
                    fontSize={{ xs: "1.4rem", md: "1.6rem" }}
                    mb={0}
                    fontFamily={"Anybody"}
                >
                    Benefícios de uma Alimentação Saudável —
                </Typography>
                <Typography
                    align="left"
                    fontWeight="bold"
                    fontSize={{ xs: "1.2rem", md: "1.4rem" }}
                    mb={4}
                    fontFamily={"Anybody"}
                >
                    Por que Priorizar Alimentos Naturais?
                </Typography>

                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={4}
                    alignItems="center"
                >
                    <img
                        src={pratoSaudavel}
                        style={{ width: "100%", maxWidth: "350px", borderRadius: "14px" }}
                    />
                    <Box>
                        <Typography fontSize={{ xs: "0.95rem", md: "1.1rem" }} mb={1} fontFamily={"Arimo"}>
                            Uma alimentação baseada em produtos frescos, naturais e variados desempenha papel essencial na manutenção da saúde. Dietas equilibradas contribuem para o fortalecimento do sistema imunológico, melhoria do bem-estar físico, controle do peso e prevenção de doenças crônicas, como diabetes, hipertensão e problemas cardíacos. Consumir frutas, verduras e legumes também favorece níveis adequados de energia e melhora a qualidade de vida de forma geral.
                        </Typography>
                        <Typography fontSize={{ xs: "0.95rem", md: "1.1rem" }} fontFamily={"Arimo"}>
                            Apesar disso, muitas pessoas enfrentam dificuldades para encontrar alimentos frescos por preços justos ou de produtores confiáveis. O Cultiva+ surge como uma solução prática ao aproximar consumidores de produtores locais, facilitando o acesso a ingredientes de qualidade e estimulando escolhas alimentares mais saudáveis no cotidiano.
                        </Typography>
                    </Box>
                </Stack>
            </Box>


            <Stack
                width="90%"
                maxWidth="1300px"
                spacing={6}
                px={{ xs: 0, md: 0 }}
                py={{ xs: 6, md: 10 }}
                mb={5}
            >

                <Typography
                    align="center"
                    fontWeight="bold"
                    fontSize={{ xs: "1.2rem", md: "1.6rem" }}
                    mb={4}
                    fontFamily={"Anybody"}
                >
                    Equipe Cultiva+
                </Typography>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    gap={3}
                    flexWrap="wrap"
                >
                    {[
                        { src: ftLeticia, nome: "Letícia Vasconcelos" },
                        { src: ftNi, nome: "Nicole Modesto" },
                        { src: ftThais, nome: "Thaís Abe" },
                        { src: ftVitor, nome: "Vitor Lopes" },
                    ].map(({ src, nome }, index) => (
                        <Box
                            key={index}
                            position="relative"
                            sx={{
                                "&:hover .overlay": { opacity: 1 },
                                flex: { xs: "0 0 45%", sm: "0 0 45%", md: "0 0 22%" },
                                boxSizing: "border-box", 
                            }}
                        >
                            <img
                                src={src}
                                style={{
                                    width: "100%",
                                    borderRadius: "8px",
                                    display: "block",
                                }}
                            />
                            <Box
                                className="overlay"
                                position="absolute"
                                bottom={0}
                                left={0}
                                width="100%"
                                height="20%"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                                sx={{
                                    background: "rgba(0, 0, 0, 0.55)",
                                    color: "#fff",
                                    fontSize: "1.1rem",
                                    fontWeight: "600",
                                    opacity: 0,
                                    transition: "0.3s",
                                    fontFamily: "Arimo"
                                }}
                            >
                                {nome}
                            </Box>
                        </Box>
                    ))}
                </Box>



                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={2}
                    alignItems="center"
                >
                    <Box flex={1} display="flex" justifyContent="left">
                        <Box
                            component="img"
                            src={ftProfs}
                            sx={{
                                width: "100%",
                                maxWidth: { xs: "280px", sm: "500px", md: "500px", lg: "550px" },
                                borderRadius: "14px",
                                ml: { xs: 0, sm: 2, md: 3, lg: "42px" },
                                display: "block",
                            }}
                        />
                    </Box>

                    <Box flex={1} width="80%"
                        maxWidth="1300px"
                        px={{ xs: 3, md: 6 }}
                        py={{ xs: 6, md: 10 }}
                    >
                        <Typography fontSize={{ xs: "0.95rem", md: "1.1rem" }} mb={1} fontFamily={"Arimo"}>
                            Somos estudantes do 2º ano do Ensino Médio com técnico em Informática para Internet, da Etec Maria Cristina Medeiros, e desenvolvemos o Cultiva+ como projeto de TCA (Trabalho de Conclusão de Ano).
                        </Typography>

                        <Typography fontSize={{ xs: "0.95rem", md: "1.1rem" }} mb={1} fontFamily={"Arimo"}>
                            A plataforma foi criada com o propósito de facilitar o acesso da população a alimentos frescos e incentivar o fortalecimento da produção local. Essa iniciativa se torna ainda mais relevante diante do cenário atual: segundo o IBGE (Pesquisa Nacional de Saúde), a taxa de obesidade entre adultos no Brasil aumentou de 20,8% em 2013 para 22,4% em 2019, refletindo a importância de promover hábitos alimentares mais saudáveis e acessíveis.
                        </Typography>

                        <Typography fontSize={{ xs: "0.95rem", md: "1.1rem" }} mb={1} fontFamily={"Arimo"}>

                            O Cultiva+ contribui diretamente para a ODS 2 Fome Zero e Agricultura Sustentável ao aproximar pequenos produtores de consumidores locais, fortalecendo a agricultura familiar e incentivando o acesso a alimentos frescos e de qualidade.

                        </Typography>
                    </Box>
                </Stack>
            </Stack>


            <Footer></Footer>
        </Box>
    );
}
