import { useState } from "react";
import { useCarrinhoAdd, useCarrinhoDel, useGetCarrinho } from "../../controllers/carrinho.controller";
import { useNavigate } from "react-router-dom";
import type { CarrinhoAdd } from "../../models/carrinho.types";
import { Badge, IconButton } from "@mui/material";
import { ShoppingCart } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const useAddCarrinho = () => {
  const addMutation = useCarrinhoAdd();

  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleAdd = (payload: CarrinhoAdd.Request) => {
    addMutation.mutate(payload, {
      onSuccess: (data) => {
        setModalMessage(data.message);
        setModalOpen(true);
      },
      onError: () => {
        setModalMessage("Erro ao adicionar ao carrinho");
        setModalOpen(true);
      },
    });
  };

  return {
    handleAdd,
    modalMessage,
    modalOpen,
    setModalOpen,
    isLoading: addMutation.isPending,
  };
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDelCarrinho = () => {
  const delMutation = useCarrinhoDel();

  const [modalMessageDel, setModalMessageDel] = useState<string | null>(null);
  const [modalOpenDel, setModalOpenDel] = useState(false);

  const handleDel = (id: number) => {
    delMutation.mutate(id, {
      onSuccess: (data) => {
        setModalMessageDel(data.message);
        setModalOpenDel(true);
      },
      onError: () => {
        setModalMessageDel("Erro ao deletar do carrinho");
        setModalOpenDel(true);
      },
    });
  };

  return {
    handleDel,
    modalMessageDel,
    modalOpenDel,
    setModalOpenDel,
  };
};


export function CarrinhoButton() {
  const navigate = useNavigate();
  const { data: carrinho } = useGetCarrinho(); 

  const handleClick = () => {
    if (carrinho && carrinho.length > 0) {
      navigate("/FinalizarCarrinho");
    } else {
      navigate("/CarrinhoVazioPage");
    }
  };

  const totalItens = carrinho?.reduce((acc, item) => acc + item.quantidade_item_total, 0) ?? 0;

  return (
    <IconButton aria-label="carrinho" size="large" onClick={handleClick}>
      <Badge 
        badgeContent={totalItens} 
        color="error" 
        overlap="circular"
        sx={{ "& .MuiBadge-badge": { fontSize: '0.8rem', height: 18, minWidth: 18 } }}
      >
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}