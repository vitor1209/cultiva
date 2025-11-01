import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import type { CarouselFullScreenProps } from "./Carousel.types.ts"
import { CarouselArrow } from "./Arrow.tsx";

export const CarouselFullScreen: React.FC<CarouselFullScreenProps> = (
    {
        children,
        tamanho,
    }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: tamanho === 'xl',
        prevArrow: <CarouselArrow direction={"prev"} />,
        nextArrow: <CarouselArrow direction={"next"} />,

    };

    return (
        <Box sx={{ width: tamanho === 'full' ? '100%' : '85%' }}>
            <Slider {...settings} >
                {children}
            </Slider>
        </Box>
    );
};