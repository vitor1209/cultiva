export interface CardPedidosProps {
  image: string;
  nome: string;
  data: string;
  status:  "Preparando" | "Enviado" | "Disponível para retirada" | "Finalizado" ;
}