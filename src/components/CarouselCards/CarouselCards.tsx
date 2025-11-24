import { useState } from "react";
import { Box, IconButton, useMediaQuery, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Workflow,
  HeartHandshake,
  Eye,
  TrendingUp,
  ClipboardList,
} from "lucide-react";


/* import img1 from "../../assets/images/imgSobre/card1.png";
import img2 from "../../assets/images/imgSobre/card2.png";
import img3 from "../../assets/images/imgSobre/card3.png";
import img4 from "../../assets/images/imgSobre/card4.png";
import img5 from "../../assets/images/imgSobre/card5.png";
import img6 from "../../assets/images/imgSobre/card6.png";
 */
const cards = [
    {  title: "Gestão Simplificada", desc: "Acompanhe sua produção com clareza e administre seu negócio de forma prática e eficiente.", icon: <Workflow size={32} />, },
    {  title: "Impacto Positivo na Comunidade", desc: "Ao oferecer alimentos frescos e de qualidade, o produtor contribui diretamente para a saúde e o bem-estar da população.", icon:<HeartHandshake size={32} /> },
    {  title: "Mais visibilidade", desc: "Alcance novos clientes e aumente suas oportunidades de venda.", icon: <Eye size={32} />,},
    {  title: "Maiores Lucros", desc: "Maior exposição = mais vendas e melhor retorno para o produtor.", icon: <TrendingUp size={32} /> },
    {  title: "Ferramentas de Organização", desc: "Acesso a controle de vendas, relatórios personalizados e indicadores de desempenho.", icon: <ClipboardList size={32} />, },
];

export function CarouselCards() {
    const [index, setIndex] = useState(0);

    const isMobile = useMediaQuery("(max-width: 750px)");
    const isTablet = useMediaQuery("(max-width: 1280px)");

    const visibleCount = isMobile ? 1 : isTablet ? 3 : 5;

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % cards.length);
    };

    const getVisibleCards = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
        visible.push(cards[(index + i) % cards.length]);
        }
        return visible;
    };

    const middlePosition = Math.floor(visibleCount / 2);

    return (
    
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: 6,
                pb: 20,
                background: "#703412",
                clipPath: "ellipse(120% 100% at 50% 0%)",
            }}
        >
            <Typography align="center"  fontWeight="bold"
                fontSize={{ xs: "1.rem", md: "1.8rem" }}
                mb={2}
                variant="h5"
                sx={{color: "white" }}
                fontFamily={"Anybody"}
            >
                Torne-se um Produtor
            </Typography>
            <Typography align="center"  fontWeight="bold"
                fontSize={{ xs: "1.2rem", md: "1.6rem" }}
                mb={5}
                variant="h5"
                sx={{color: "white" }}
                fontFamily={"Anybody"}
            >
                Conheça as Vantagens de Fazer Parte do Cultiva+
            </Typography>
            <Typography width={"80%"} align="center" fontSize={{ xs: "0.95rem", md: "1.1rem"  }} sx={{color: "white"}} mb={10} fontFamily={"Arimo"}>
                O Cultiva+ é uma plataforma que conecta produtores locais a consumidores interessados em alimentos frescos e naturais. Ao participar do sistema, o produtor amplia sua visibilidade na região, alcançando novos clientes e aumentando suas oportunidades de venda. Essa exposição fortalece o comércio local e contribui diretamente para o crescimento financeiro do produtor. Além disso, o Cultiva+ oferece ferramentas que proporcionam maior organização no dia a dia: controle de vendas, relatórios personalizados e acompanhamento do desempenho do negócio. Com esses recursos, o produtor obtém mais clareza sobre sua produção e consegue administrar seu empreendimento de forma simples e eficiente.
            </Typography>
            
            <Box
                sx={{
                width: "100%",
                maxWidth: "1300px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                
                }}
            >
                
                <IconButton
                    onClick={handlePrev}
                    sx={{ color: "white", position: "absolute", left: 0, zIndex: 5 }}
                >
                    <ArrowBackIos />
                </IconButton>

                
                <Box
                    sx={{
                        display: "flex",
                        gap: isMobile ? 1 : 6,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {getVisibleCards().map((card, i) => {
                        const isCenter = i === middlePosition;

                        return (
                            <Box
                                key={i + card.title}
                                sx={{
                                    width: isCenter
                                        ? isMobile
                                        ? "170px"
                                        : isTablet
                                        ? "190px"
                                        : "240px"
                                        : isMobile
                                        ? "120px"
                                        : isTablet
                                        ? "140px"
                                        : "160px",

                                    height: isCenter
                                        ? isMobile
                                        ? "240px"
                                        : isTablet
                                        ? "280px"
                                        : "330px"
                                        : isMobile
                                        ? "160px"
                                        : isTablet
                                        ? "200px"
                                        : "230px",

                                    background: "#e0fde2ff",
                                    borderRadius: "18px",
                                    boxShadow: isCenter
                                        ? "0 8px 30px rgba(0,0,0,0.35)"
                                        : "0 3px 15px rgba(0,0,0,0.2)",

                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "14px",
                                    transition: "all 1.0s ease",
                                    transform: isCenter ? "scale(1.15)" : "scale(1)",
                                }}
                            >
                                {/* <img
                                src={card.img}
                                style={{
                                    width: isCenter ? "75%" : "55%",
                                    transition: "0.3s",
                                }}
                                /> */}

                                {card.icon && (
                                    <Box sx={{ mb: 1 }}>
                                        {card.icon}
                                    </Box>
                                )}

                                <Typography
                                    fontSize={{ xs: "0.rem", md: "1.1rem"  }}
                                    variant="h3"
                                    sx={{
                                        margin: "10px 0px 6px 0",
                                        fontSize: isCenter ? "1.2rem" : "1rem",
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        fontFamily: "Anybody"
                                        
                                    }}
                                >
                                    {card.title}
                                </Typography>



                                {isCenter && (
                                    <Typography
                                        variant="h3"
                                        sx={{
                                        fontSize: "0.9rem",
                                        textAlign: "center",
                                        width: "90%",
                                        fontFamily: "Arimo"
                                        }}
                                    >
                                        {card.desc}
                                    </Typography>
                                )}
                            </Box>
                        );
                    })}
                </Box>

                {/* Seta direita */}
                <IconButton
                    onClick={handleNext}
                    sx={{ color: "white", position: "absolute", zIndex: 5, right: {xs: "10px", sm: "20px", md: "0", } }}
                >
                    <ArrowForwardIos />
                </IconButton>
            </Box>
        </Box>
    );
}
