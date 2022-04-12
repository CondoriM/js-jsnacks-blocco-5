const zucchine = [
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 25
    },
    {
        varieta: 'faenza',
        peso: 40,
        lunghezza: 5
    },
    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 35
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 20,
        lunghezza: 5
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 25
    },
    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 15
    },
    {
        varieta: 'faenza',
        peso: 30,
        lunghezza: 35
    },
    {
        varieta: 'faenza',
        peso: 10,
        lunghezza: 25
    }
]

const lunghezzaZucchine = zucchine.filter((zucchina) => zucchina.lunghezza < 15)
console.log(lunghezzaZucchine);

const lunghezzaZucchine_over15 =  zucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(lunghezzaZucchine_over15);

//fare la somma dei pesi dell array lunghezzaZucchine15

let somma= 0;
lunghezzaZucchine.forEach((zucchina) => {
    somma += zucchina.peso
})

console.log(somma);

let somma_over15= 0;
lunghezzaZucchine_over15.forEach((zucchina) => {
    somma_over15 += zucchina.peso
})

console.log(somma_over15);