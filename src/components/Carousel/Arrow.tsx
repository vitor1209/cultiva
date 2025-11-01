import { IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ArrowProps = {
    direction: "prev" | "next";
    style?: React.CSSProperties;
    onClick?: () => void;
};

export function CarouselArrow({ direction, style, onClick }: ArrowProps) {
    const isPrev = direction === "prev";

    return (
        <IconButton
            onClick={onClick}
            sx={{
                ...style,
                position: "absolute",
                [isPrev ? "left" : "right"]: 15,
                top: "50%",
                transform: "translateY(-50%)",
                height: "2.5rem",
                width: "2.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                zIndex: 2,
                color: "#000",
                backgroundColor: "rgba(255,255,255,0.8)",
                "&:hover": { backgroundColor: "rgba(255,255,255,1)" },
            }}
        >
            {isPrev ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </IconButton>
    );
}
