import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import type { CarouselFullScreenProps } from "./Carousel.types.ts"


export const CarouselFullScreen: React.FC<CarouselFullScreenProps> = ({ children }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Slider {...settings}>
                {children}
            </Slider>
        </Box>
    );
};
