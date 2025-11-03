export const MASCARA_REAL = {
    mask: Number,
    scale: 2, // duas casas decimais
    signed: false, // não permite negativo
    thousandsSeparator: ".", // separador de milhar
    radix: ",", // separador decimal
    mapToRadix: ["."], // mapeia ponto para vírgula
    padFractionalZeros: true, // sempre mostra 2 casas decimais
    normalizeZeros: true, // remove zeros desnecessários
    min: 0,
    max: 9999999,
    prefix: "R$ ", // adiciona R$ no início
}
