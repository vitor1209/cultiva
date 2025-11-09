export const MASCARA_DINHEIRO_REAL = [
    {
        mask: "R$ num",
        blocks: {
            num: {
                mask: Number,
                signed: false,
                min: 0,
                thousandsSeparator: ".",
                radix: ",",
                scale: 2,
                normalizeZeros: false,
                padFractionalZeros: false,
            },
        },
    },
]
