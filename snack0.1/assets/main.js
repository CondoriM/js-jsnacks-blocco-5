/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

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

let somma = 0

//calcolare la somma del peso di tutte le zucchine
zucchine.forEach((zucchina) => {
    console.log(zucchina.peso);

    let peso = zucchina.peso
    somma += peso
})

console.log(somma);